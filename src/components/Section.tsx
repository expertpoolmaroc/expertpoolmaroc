import Link from "next/link";
import Image from "next/image";
import type { LandingPage } from "@/content/pages";
import { imageForCard } from "@/content/images";

export function PageSections({ page }: { page: LandingPage }) {
  const sections = page.slug === "services" ? enrichServices(page.sections) : page.sections;

  return (
    <>
      {sections.map((section, index) => (
        <section key={`${section.title}-${index}`} className={`section ${index % 2 ? "sectionTint" : ""} ${index === 0 ? "sectionLead" : ""}`}>
          <div className="container">
            <div className="sectionHead">
              {section.kicker ? <p className="kicker">{section.kicker}</p> : null}
              <h2>{section.title}</h2>
              {section.intro ? <p>{section.intro}</p> : null}
            </div>
            <div className={`cardGrid cardGrid-${section.items.length}`}>
              {section.items.map((item, itemIndex) => (
                <article className="serviceCard" key={item.title}>
                  <div className="cardMedia">
                    <Image
                      src={imageForCard(page.slug, index, itemIndex)}
                      alt={`${item.title} : ${item.text}`}
                      fill
                      sizes="(max-width: 760px) 50vw, (max-width: 1100px) 33vw, 25vw"
                    />
                    <span className="cardNumber">{String(itemIndex + 1).padStart(2, "0")}</span>
                  </div>
                  <div className="cardBody">
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                    {item.href ? <Link href={item.href}>Découvrir {item.title.toLowerCase()} <span aria-hidden="true">→</span></Link> : null}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      ))}
    </>
  );
}

function enrichServices(sections: LandingPage["sections"]) {
  return sections.map((section) =>
    section.items.length
      ? section
      : {
          ...section,
          items: [
            { title: "Piscines", text: "Conception, construction, renovation et entretien.", href: "/piscines" },
            { title: "Fontaines", text: "Fontaines decoratives, jeux d'eau et murs d'eau.", href: "/fontaines-maroc" },
            { title: "Spa & Jacuzzi", text: "Installation, integration et maintenance.", href: "/spa-jacuzzi-maroc" },
            { title: "Sauna & Hammam", text: "Conception, equipements, vapeur et SAV.", href: "/sauna-hammam-maroc" },
            { title: "Local technique", text: "Pompes, filtration, regulation et coffrets.", href: "/local-technique-piscine" },
            { title: "Traitement", text: "Analyse, equilibre, UV et regulation.", href: "/traitement-piscine-maroc" },
          ],
        },
  );
}
