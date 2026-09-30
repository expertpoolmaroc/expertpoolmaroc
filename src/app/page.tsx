import { LandingPage } from "@/components/LandingPage";
import { pages } from "@/content/pages";
import { pageMetadata } from "@/lib/seo";

const home = pages.find((page) => page.slug === "")!;

export const metadata = pageMetadata(home);

export default function Home() {
  return <LandingPage page={home} />;
}
