import { PageHero } from "@/components/page-hero";

export default function Journal() {
  return (
    <main>
      <PageHero eyebrow="06 / Journal" title="Journal" description="Notes sur l’architecture, l’ingénierie, l’IA, la sécurité, le développement produit et le processus de construction." />
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
        <div className="border-y border-white/[0.1] py-12 md:py-16">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-signal">À venir</p>
          <h2 className="mt-6 max-w-3xl text-balance font-display text-4xl leading-tight tracking-[-0.05em] text-ink md:text-6xl">Essais techniques, notes de terrain et décryptages d’architecture.</h2>
          <p className="mt-8 max-w-xl text-base leading-7 text-white/45">Les prochains articles documenteront des décisions, des échecs et des méthodes réutilisables.</p>
        </div>
      </section>
    </main>
  );
}
