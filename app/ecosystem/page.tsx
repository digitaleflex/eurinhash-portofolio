import { PageHero } from "@/components/page-hero";

const ecosystem = [
  ["HashCode", "Apprendre et construire ensemble."],
  ["Eurin Hash", "Architecture, systèmes et produits numériques."],
  ["Infrastructure numérique", "Les fondations techniques qui rendent les idées possibles."],
];

export default function Ecosystem() {
  return (
    <main>
      <PageHero eyebrow="05 / Écosystème" title="Écosystème" description="La couche connectée qui rassemble les produits, les communautés, l’infrastructure et les expérimentations autour du travail." />
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
        <div className="grid gap-3 md:grid-cols-3">
          {ecosystem.map(([title, description], index) => (
            <article key={title} className="border border-white/[0.1] p-7">
              <p className="font-mono text-xs text-signal">0{index + 1}</p>
              <h2 className="mt-20 font-display text-2xl text-ink">{title}</h2>
              <p className="mt-4 text-sm leading-6 text-white/45">{description}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
