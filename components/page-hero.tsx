import Link from "next/link";

export function PageHero({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <section className="border-b border-white/[0.08] px-6 pb-24 pt-20 md:px-10 md:pb-32">
      <div className="mx-auto max-w-7xl">
        <Link href="/" className="text-xs text-white/35 hover:text-white">← Back to hub</Link>
        <p className="mt-20 text-xs uppercase tracking-[.28em] text-[#c5f441]">{eyebrow}</p>
        <h1 className="mt-6 max-w-6xl text-6xl font-medium capitalize leading-[.9] tracking-[-.065em] md:text-8xl">{title}</h1>
        <p className="mt-10 max-w-2xl text-lg leading-8 text-white/50">{description}</p>
      </div>
    </section>
  );
}