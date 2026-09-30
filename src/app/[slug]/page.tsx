import { notFound } from "next/navigation";
import { LandingPage } from "@/components/LandingPage";
import { allPages, getPage } from "@/content/pages";
import { pageMetadata } from "@/lib/seo";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return allPages.filter((page) => page.slug).map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const page = getPage(slug);
  if (!page) return {};
  return pageMetadata(page);
}

export default async function SlugPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const page = getPage(slug);
  if (!page) notFound();
  return <LandingPage page={page} />;
}
