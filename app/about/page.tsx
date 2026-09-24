import { PageHero } from "@/components/page-hero";

export default function About() {
  return (
    <main>
      <PageHero eyebrow="01 / À propos" title="À propos" description="Un créateur technologique orienté systèmes, qui travaille entre ingénierie logicielle, infrastructure cloud, cybersécurité, IA appliquée et produits numériques." />
      <section className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
        <div className="grid gap-12 md:grid-cols-[0.42fr_1fr] md:gap-20">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-signal">La démarche</p>
          <div>
            <h2 className="max-w-4xl text-balance font-display text-4xl leading-tight tracking-[-0.05em] text-ink md:text-6xl">La curiosité lance le projet. L’architecture le rend durable.</h2>
            <p className="mt-10 max-w-2xl text-lg leading-8 text-white/50">Il ne s’agit pas d’accumuler des technologies, mais de comprendre les contraintes, de rendre les systèmes lisibles et de construire des solutions capables d’évoluer.</p>
            <div className="mt-16 grid gap-0 border-t border-white/[0.1] sm:grid-cols-2">
              {["Comprendre le problème", "Rendre les choix explicites", "Sécuriser par défaut", "Construire pour durer"].map((item, index) => (
                <div key={item} className="border-b border-white/[0.1] py-6 sm:odd:pr-8 sm:even:border-l sm:even:pl-8">
                  <p className="font-mono text-xs text-signal">0{index + 1}</p>
                  <p className="mt-6 text-sm text-white/70">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
