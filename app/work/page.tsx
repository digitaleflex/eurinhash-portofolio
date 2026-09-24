import Link from "next/link";
import { PageHero } from "@/components/page-hero";

const work = [
  {
    name: "HashCode",
    type: "Communauté / plateforme technologique",
    summary: "Un écosystème qui réunit apprentissage, projets et collaboration pratique.",
    href: "/work/hashcode",
    areas: ["Architecture produit", "Systèmes d’apprentissage", "Plateforme"],
  },
  {
    name: "Marketplace 1M",
    type: "Place de marché numérique",
    summary: "Un concept de commerce évolutif, conçu autour de la confiance et de l’expérience client.",
    href: "/work/marketplace-1m",
    areas: ["Place de marché", "Systèmes UX", "Commerce"],
  },
  {
    name: "EduSync",
    type: "Infrastructure éducative",
    summary: "Une plateforme universitaire pour clarifier les emplois du temps et la coordination.",
    href: "/work/edusync",
    areas: ["Next.js", "PostgreSQL", "Workflows"],
  },
  {
    name: "Mecanotic Auto",
    type: "Commerce automobile digital",
    summary: "Une expérience digitale de distribution automobile pensée pour rendre le catalogue et la conversion plus lisibles.",
    href: "/work/mecanotic-auto",
    areas: ["Commerce", "UX", "WordPress"],
  },
];

export default function Work() {
  return (
    <main>
      <PageHero eyebrow="02 / Projets" title="Projets sélectionnés" description="Des projets où l’intention produit, les décisions d’ingénierie et l’architecture des systèmes se rencontrent." />
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
        <div className="mb-8 flex items-center justify-between border-b border-white/[0.1] pb-5 font-mono text-[0.65rem] uppercase tracking-[0.16em] text-white/35">
          <span>Index / 04 systèmes</span>
          <span>Du problème au système</span>
        </div>
        <div className="divide-y divide-white/[0.1] border-y border-white/[0.1]">
          {work.map((project, index) => (
            <Link href={project.href} key={project.name} className="group grid gap-6 py-10 md:grid-cols-[80px_1fr_auto] md:items-start">
              <span className="font-mono text-xs text-white/25">0{index + 1}</span>
              <div className="min-w-0">
                <h2 className="font-display text-3xl tracking-[-0.04em] text-ink transition-colors duration-200 group-hover:text-signal md:text-5xl">{project.name}</h2>
                <p className="mt-2 font-mono text-[0.65rem] uppercase tracking-[0.14em] text-signal/70">{project.type}</p>
                <p className="mt-6 max-w-xl text-base leading-7 text-white/50">{project.summary}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.areas.map((area) => <span key={area} className="border border-white/[0.1] px-2 py-1 font-mono text-[0.58rem] uppercase tracking-[0.12em] text-white/35">{area}</span>)}
                </div>
              </div>
              <span className="font-mono text-xs uppercase tracking-[0.14em] text-white/35 transition-colors duration-200 group-hover:text-signal">Voir l’étude ↗</span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
