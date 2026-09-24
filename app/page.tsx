import Link from "next/link";
import { ArrowUpRight, Check, ChevronRight } from "lucide-react";
import { SystemMap } from "@/components/system-map";

const systems = [
  { number: "01", name: "HashCode", category: "TECHNOLOGY ECOSYSTEM", description: "Un écosystème qui relie communauté, apprentissage, projets, sécurité, IA et infrastructure.", href: "/work/hashcode", status: "ECOSYSTEM", tags: ["Product architecture", "Learning systems", "Community"] },
  { number: "02", name: "Marketplace 1M", category: "MARKETPLACE ARCHITECTURE", description: "Une architecture de marketplace pensée autour de la disponibilité, de la confiance, de la réservation et des opérations.", href: "/work/marketplace-1m", status: "PRODUCT SYSTEM", tags: ["Marketplace", "Booking", "Trust"] },
  { number: "03", name: "EduSync", category: "EDUCATION SYSTEM", description: "Une plateforme de coordination universitaire structurée autour des données, des règles métier et des workflows.", href: "/work/edusync", status: "PRODUCT SYSTEM", tags: ["Next.js", "PostgreSQL", "Workflows"] },
  { number: "04", name: "Mecanotic Auto", category: "DIGITAL COMMERCE", description: "Une expérience digitale de distribution automobile pensée pour rendre le catalogue et la conversion plus lisibles.", href: "/work/mecanotic-auto", status: "CLIENT SYSTEM", tags: ["Commerce", "UX", "WordPress"] },
];

const method = [
  ["01", "Comprendre", "Le problème réel, les utilisateurs, les contraintes et les risques."],
  ["02", "Structurer", "Les composants, flux, responsabilités et décisions qui rendent le système lisible."],
  ["03", "Sécuriser", "Les accès, données, validations et opérations dès la conception."],
  ["04", "Faire évoluer", "Une architecture mesurable qui peut changer sans devenir fragile."],
];

const signals = [
  ["ARCHITECTURE", "DECISION-LED"],
  ["SECURITY", "BUILT-IN"],
  ["AI", "APPLIED"],
  ["CLOUD", "RESILIENT"],
];

export default function Home() {
  return (
    <main>
      <section className="hero-editorial relative overflow-hidden border-b border-white/[0.08]">
        <div className="hero-grid pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="mx-auto grid min-h-[calc(100svh-4.5rem)] max-w-7xl items-end gap-14 px-5 pb-12 pt-16 md:px-10 md:pb-16 lg:grid-cols-[1.05fr_0.75fr] lg:gap-20">
          <div className="relative z-10 max-w-4xl">
            <div className="mb-8 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">
              <span className="h-px w-8 bg-signal" />
              Digital Architect · Technology Entrepreneur
            </div>
            <h1 className="max-w-5xl text-balance font-display text-[clamp(3.5rem,8.2vw,7.75rem)] font-medium leading-[0.84] tracking-[-0.075em] text-ink">
              I build
              <br />
              <span className="text-white/28">digital</span> systems.
            </h1>
            <div className="mt-10 grid gap-8 border-t border-white/[0.1] pt-7 md:grid-cols-[1fr_auto] md:items-end">
              <p className="max-w-xl text-pretty text-base leading-7 text-white/55 md:text-lg">
                Je transforme des idées complexes en systèmes clairs, fiables et évolutifs — de l’architecture produit à l’infrastructure, de l’IA à la cybersécurité.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/work" className="button-primary">Explorer les systèmes <ArrowUpRight size={15} /></Link>
                <Link href="/contact" className="button-secondary">Parler d’un projet</Link>
              </div>
            </div>
          </div>
          <div className="relative z-10 lg:pb-1">
            <SystemMap />
          </div>
        </div>
      </section>

      <section className="border-b border-white/[0.08]" aria-label="Architecture signals">
        <div className="mx-auto grid max-w-7xl grid-cols-2 md:grid-cols-4">
          {signals.map(([label, value], index) => (
            <div key={label} className="signal-cell border-b border-white/[0.08] px-5 py-6 md:border-b-0 md:border-l md:px-7 md:first:border-l-0">
              <div className="flex items-center justify-between gap-4 font-mono text-[10px] uppercase tracking-[0.16em]">
                <span className="text-white/35">0{index + 1}</span>
                <span className="text-signal">●</span>
              </div>
              <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.14em] text-white/70">{label}</p>
              <p className="mt-1 text-sm text-white/35">{value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-frame border-b border-white/[0.08]">
        <div className="section-grid">
          <div className="section-index">01 / SYSTEMS</div>
          <div>
            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <div>
                <p className="section-kicker">Selected work</p>
                <h2 className="section-title">Des systèmes construits autour d’un problème.</h2>
              </div>
              <Link href="/work" className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.14em] text-white/45 hover:text-signal">Tout voir <ArrowUpRight size={14} /></Link>
            </div>
            <div className="mt-14 divide-y divide-white/[0.1] border-y border-white/[0.1]">
              {systems.map((system) => (
                <Link href={system.href} key={system.name} className="system-row group">
                  <span className="system-row-number">{system.number}</span>
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-signal/80">{system.category}</p>
                      <span className="status-chip">{system.status}</span>
                    </div>
                    <h3 className="mt-4 font-display text-3xl tracking-[-0.045em] text-ink md:text-5xl">{system.name}</h3>
                    <p className="mt-4 max-w-2xl text-sm leading-6 text-white/45 md:text-base">{system.description}</p>
                    <div className="mt-6 flex flex-wrap gap-2">{system.tags.map((tag) => <span key={tag} className="tech-chip">{tag}</span>)}</div>
                  </div>
                  <span className="system-row-arrow"><ArrowUpRight size={18} /></span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-frame border-b border-white/[0.08]">
        <div className="section-grid">
          <div className="section-index">02 / METHOD</div>
          <div>
            <p className="section-kicker">Architecture method</p>
            <h2 className="section-title max-w-4xl">Rendre le complexe lisible avant de le construire.</h2>
            <div className="mt-14 grid border-t border-white/[0.1] md:grid-cols-2">
              {method.map(([number, title, description]) => (
                <article key={number} className="method-card">
                  <span className="font-mono text-xs text-signal">{number}</span>
                  <div><h3 className="font-display text-2xl tracking-[-0.03em] text-ink">{title}</h3><p className="mt-3 max-w-md text-sm leading-6 text-white/45">{description}</p></div>
                  <Check className="text-white/15" size={18} />
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-frame border-b border-white/[0.08]">
        <div className="section-grid">
          <div className="section-index">03 / ECOSYSTEM</div>
          <div className="ecosystem-feature">
            <div>
              <p className="section-kicker">Beyond projects</p>
              <h2 className="section-title max-w-4xl">Je ne construis pas seulement des produits. Je construis des systèmes autour d’eux.</h2>
              <p className="mt-7 max-w-2xl text-base leading-7 text-white/45">HashCode, produits numériques, laboratoires, infrastructure et recherche forment un même écosystème de travail.</p>
              <Link href="/ecosystem" className="button-secondary mt-9">Explorer l’écosystème <ChevronRight size={15} /></Link>
            </div>
            <div className="ecosystem-map" aria-hidden="true">
              <span className="eco-node eco-core">EURIN</span>
              <span className="eco-node eco-top">HASHCODE</span>
              <span className="eco-node eco-left">PRODUCTS</span>
              <span className="eco-node eco-right">LABS</span>
              <span className="eco-node eco-bottom">INFRA</span>
              <i className="eco-line eco-line-a" /><i className="eco-line eco-line-b" /><i className="eco-line eco-line-c" /><i className="eco-line eco-line-d" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-frame">
        <div className="section-grid">
          <div className="section-index">04 / START</div>
          <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
            <div>
              <p className="section-kicker">Start a conversation</p>
              <h2 className="section-title max-w-5xl">Vous construisez quelque chose de complexe ?</h2>
              <p className="mt-6 max-w-2xl text-base leading-7 text-white/45">Donnons au problème une structure claire, puis construisons ce qui mérite de l’être.</p>
            </div>
            <Link href="/contact" className="button-primary shrink-0">Parler du projet <ArrowUpRight size={15} /></Link>
          </div>
        </div>
      </section>
    </main>
  );
}
