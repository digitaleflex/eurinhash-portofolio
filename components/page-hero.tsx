import Link from "next/link";

export function PageHero({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <section className="relative overflow-hidden border-b border-white/[0.08] px-6 pb-20 pt-16 md:px-10 md:pb-28 md:pt-20">
      <div className="system-grid pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl">
        <Link href="/" className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-white/40 transition-colors duration-200 hover:text-signal">
          ← Retour à l’accueil
        </Link>
        <div className="mt-16 grid gap-10 md:grid-cols-[1fr_0.42fr] md:items-end">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-signal">{eyebrow}</p>
            <h1 className="mt-6 max-w-5xl text-balance text-6xl font-display font-medium leading-[0.92] tracking-[-0.065em] text-ink md:text-8xl">{title}</h1>
          </div>
          <p className="max-w-md text-pretty text-base leading-7 text-white/55 md:pb-2">{description}</p>
        </div>
      </div>
    </section>
  );
}
