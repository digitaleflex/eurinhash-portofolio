import { PageHero } from "@/components/page-hero";

const principles = [
  ["01", "Vision produit", "Comprendre le problème avant de choisir l’architecture."],
  ["02", "Conception de systèmes", "Relier les composants, les flux et les responsabilités."],
  ["03", "Sécurité dès la conception", "Intégrer les contrôles là où les décisions se prennent."],
  ["04", "Évolutivité", "Concevoir pour absorber le changement sans rupture."],
  ["05", "Ingénierie de la performance", "Mesurer avant d’optimiser, puis mesurer le résultat."],
  ["06", "Intégration de l’IA", "Utiliser l’intelligence artificielle quand elle résout un vrai problème."],
  ["07", "Expérience développeur", "Créer des systèmes aussi accessibles que maintenables."],
  ["08", "Automatisation", "Réduire les tâches répétitives qui éloignent de la décision."],
];

export default function Architecture() {
  return (
    <main>
      <PageHero eyebrow="03 / Architecture" title="Architecture" description="Un cadre pratique pour transformer des besoins produit ambigus en systèmes compréhensibles, sécurisés et résilients." />
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
        <div className="mb-8 flex items-center justify-between border-b border-white/[0.1] pb-5 font-mono text-[0.65rem] uppercase tracking-[0.16em] text-white/35">
          <span>Principes / 08</span>
          <span>Exigences → production</span>
        </div>
        <div className="grid gap-0 border-t border-white/[0.1] md:grid-cols-2">
          {principles.map(([number, title, description]) => (
            <article key={number} className="border-b border-white/[0.1] py-8 md:odd:pr-10 md:even:border-l md:even:pl-10">
              <p className="font-mono text-xs text-signal">{number}</p>
              <h2 className="mt-12 font-display text-2xl text-ink">{title}</h2>
              <p className="mt-4 max-w-sm text-sm leading-6 text-white/45">{description}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
