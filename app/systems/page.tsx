import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SystemMap } from "@/components/system-map";

const layers = [
  ["01", "Intention", "Le problème, les utilisateurs et les contraintes."],
  ["02", "Architecture", "Les composants, flux, responsabilités et décisions."],
  ["03", "Sécurité", "Les données, accès, validations et traces."],
  ["04", "Produit", "L'expérience réelle et les règles métier."],
  ["05", "Déploiement", "L'infrastructure, l'observabilité et l'évolution."],
];

export default function Systems() {
  return (
    <main>
      <section className="border-b border-white/[0.08] px-5 pb-20 pt-14 md:px-10 md:pb-28 md:pt-20">
        <div className="mx-auto max-w-7xl">
          <p className="section-kicker">System Map / 00</p>
          <div className="mt-7 grid gap-10 lg:grid-cols-[1fr_0.58fr] lg:items-end">
            <div>
              <h1 className="section-title text-[clamp(3.5rem,8vw,7rem)]">Comment je transforme une idée en système.</h1>
              <p className="mt-8 max-w-2xl text-base leading-7 text-white/50 md:text-lg">Une carte de travail pour comprendre la relation entre produit, architecture, sécurité, infrastructure et déploiement.</p>
            </div>
            <SystemMap />
          </div>
        </div>
      </section>

      <section className="section-frame">
        <div className="section-grid">
          <div className="section-index">01 / LAYERS</div>
          <div className="divide-y divide-white/[0.1] border-y border-white/[0.1]">
            {layers.map(([number, title, description]) => (
              <article key={number} className="grid gap-5 py-8 md:grid-cols-[80px_0.6fr_1fr]">
                <span className="font-mono text-xs text-signal">{number}</span>
                <h2 className="font-display text-2xl tracking-[-0.03em] text-ink">{title}</h2>
                <p className="max-w-xl text-sm leading-6 text-white/45">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-frame border-t border-white/[0.08]">
        <div className="section-grid">
          <div className="section-index">02 / EXPLORE</div>
          <div>
            <p className="section-kicker">Architecture in practice</p>
            <h2 className="section-title">Voir les systèmes construits.</h2>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link href="/work" className="button-primary">Explorer le work <ArrowUpRight size={15} /></Link>
              <Link href="/architecture" className="button-secondary">Voir les principes</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
