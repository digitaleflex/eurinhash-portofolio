import { PageHero } from "@/components/page-hero";

export default function Community() {
  return (
    <main>
      <PageHero eyebrow="07 / Communauté" title="Communauté" description="HashCode est l’écosystème d’apprentissage et de création qui relie développeurs, professionnels de la cybersécurité et apprenants du numérique." />
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
        <div className="grid gap-10 border border-white/[0.1] p-8 md:grid-cols-[0.45fr_1fr] md:p-14">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-signal">HashCode</p>
            <p className="mt-16 font-mono text-[0.62rem] uppercase tracking-[0.16em] text-white/30">Community / system</p>
          </div>
          <div>
            <h2 className="max-w-3xl text-balance font-display text-4xl leading-tight tracking-[-0.05em] text-ink md:text-6xl">Apprendre. Construire. Partager.</h2>
            <p className="mt-8 max-w-2xl text-base leading-7 text-white/45">Un espace communautaire dédié à l’apprentissage pratique de la technologie, aux projets, aux défis et à la collaboration.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
