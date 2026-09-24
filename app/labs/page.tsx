import { PageHero } from "@/components/page-hero";

const labs = [
  ["Agents IA", "Flux de travail multi-agents et automatisation du développement.", "expérimentation"],
  ["OSINT", "Systèmes de recherche, cadres de connaissance et outils d’enquête.", "recherche"],
  ["Sécurité", "Outils défensifs, authentification et expérimentations de sécurité.", "défense"],
  ["Cloud", "Infrastructure, déploiement, observabilité et fiabilité.", "systèmes"],
];

export default function Labs() {
  return (
    <main>
      <PageHero eyebrow="04 / R&D" title="Laboratoires" description="Un espace expérimental pour les idées trop tôt, trop techniques ou trop singulières pour une page produit." />
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
        <div className="grid gap-3 md:grid-cols-2">
          {labs.map(([title, description, status], index) => (
            <article key={title} className="min-h-64 border border-white/[0.1] p-7 transition-colors duration-200 hover:border-signal/40">
              <div className="flex items-center justify-between font-mono text-[0.62rem] uppercase tracking-[0.16em] text-white/30">
                <span>LABO / 0{index + 1}</span>
                <span className="text-signal/70">{status}</span>
              </div>
              <h2 className="mt-20 font-display text-3xl tracking-[-0.04em] text-ink">{title}</h2>
              <p className="mt-4 max-w-md text-sm leading-6 text-white/45">{description}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
