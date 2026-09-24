import Link from "next/link";

const projects = [
  {
    number: "01",
    name: "HashCode",
    category: "Communauté / plateforme technologique",
    description: "Transformer l’apprentissage technique en expérience collective structurée.",
    href: "/work/hashcode",
    tags: ["Architecture produit", "Systèmes d’apprentissage", "Plateforme"],
  },
  {
    number: "02",
    name: "Marketplace 1M",
    category: "Place de marché numérique",
    description: "Concevoir un commerce évolutif où la confiance fait partie de l’expérience.",
    href: "/work/marketplace-1m",
    tags: ["Place de marché", "Systèmes UX", "Commerce"],
  },
  {
    number: "03",
    name: "EduSync",
    category: "Infrastructure éducative",
    description: "Donner de la clarté opérationnelle à un écosystème universitaire complexe.",
    href: "/work/edusync",
    tags: ["Next.js", "PostgreSQL", "Workflows"],
  },
];

const principles = [
  ["01", "Comprendre", "Identifier le problème réel avant de choisir une solution."],
  ["02", "Structurer", "Transformer les contraintes en une architecture lisible."],
  ["03", "Sécuriser", "Intégrer la confiance dès la conception du système."],
  ["04", "Faire évoluer", "Construire pour durer, mesurer et améliorer."],
];

export default function Home() {
  return (
    <main>
      <section className="relative flex min-h-[calc(100vh-5rem)] items-end overflow-hidden border-b border-white/[0.08] px-6 pb-16 md:px-10 md:pb-24">
        <div className="system-grid pointer-events-none absolute inset-0 opacity-50" aria-hidden="true" />
        <div className="pointer-events-none absolute -right-40 top-10 h-96 w-96 rounded-full bg-signal/5 blur-3xl" aria-hidden="true" />
        <div className="relative mx-auto grid w-full max-w-7xl gap-14 lg:grid-cols-[1.05fr_0.75fr] lg:items-end">
          <div className="reveal">
            <p className="mb-8 font-mono text-[0.65rem] uppercase tracking-[0.24em] text-white/45">Architecte digital · products · systems</p>
            <h1 className="max-w-5xl text-balance font-display text-6xl font-medium leading-[0.88] tracking-[-0.075em] text-ink md:text-8xl lg:text-[7.25rem]">
              Je conçois des systèmes
              <br />
              <span className="text-white/30">qui transforment les idées</span>
              <br />
              en infrastructures.
            </h1>
            <div className="mt-12 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
              <p className="max-w-xl text-pretty text-base leading-7 text-white/55 md:text-lg">
                Logiciel, cloud, cybersécurité et IA appliquée — réunis par la vision produit et l’ingénierie système.
              </p>
              <Link href="/work" className="w-fit border border-signal/50 px-5 py-3 text-sm text-signal transition-colors duration-200 hover:bg-signal hover:text-canvas">
                Découvrir les projets →
              </Link>
            </div>
          </div>

          <div className="system-map reveal reveal-delay-2 relative aspect-square max-w-lg overflow-hidden p-6 md:p-8">
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-4 font-mono text-[0.6rem] uppercase tracking-[0.16em] text-white/40">
              <span>System map / 01</span>
              <span className="text-signal">● stable</span>
            </div>
            <svg viewBox="0 0 420 420" className="mt-4 h-full w-full" aria-hidden="true" focusable="false">
              <path className="system-map-line" d="M90 90L210 145L335 88M210 145L210 270M210 270L92 335M210 270L334 332M145 45L210 145L300 210L210 270L120 210Z" />
              <path className="system-map-line" d="M90 90L92 335M335 88L334 332" />
              <circle className="system-map-node" cx="90" cy="90" r="9" />
              <circle className="system-map-node" cx="210" cy="145" r="12" />
              <circle className="system-map-node" cx="335" cy="88" r="9" />
              <circle className="system-map-node" cx="210" cy="270" r="12" />
              <circle className="system-map-node" cx="92" cy="335" r="9" />
              <circle className="system-map-node" cx="334" cy="332" r="9" />
              <circle cx="210" cy="145" r="3" fill="#C5F441" />
              <circle cx="210" cy="270" r="3" fill="#C5F441" />
              <text className="system-map-label" x="56" y="65">intention</text>
              <text className="system-map-label" x="178" y="120">architecture</text>
              <text className="system-map-label" x="300" y="64">produit</text>
              <text className="system-map-label" x="180" y="300">sécurité</text>
              <text className="system-map-label" x="54" y="365">cloud</text>
              <text className="system-map-label" x="302" y="362">déploiement</text>
            </svg>
            <div className="absolute bottom-5 left-6 right-6 flex items-center justify-between border-t border-white/[0.08] pt-4 font-mono text-[0.6rem] uppercase tracking-[0.14em] text-white/35 md:left-8 md:right-8">
              <span>intent → system</span>
              <span>01 / 04</span>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/[0.08] px-6 md:px-10" aria-label="Domaines d’expertise">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-white/[0.08] md:grid-cols-4">
          {[
            ["SYSTÈMES", "Architecture produit"],
            ["IA", "Intelligence appliquée"],
            ["CLOUD", "Infrastructure"],
            ["SÉCURITÉ", "Confiance intégrée"],
          ].map(([label, value]) => (
            <div key={label} className="px-4 py-8 first:pl-0 md:px-8">
              <p className="font-mono text-[0.65rem] tracking-[0.2em] text-signal">{label}</p>
              <p className="mt-2 text-sm text-white/40">{value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-b border-white/[0.08] px-6 py-24 md:px-10 md:py-36">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 md:grid-cols-[0.65fr_1.35fr] md:gap-16">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/35">01 / Projets sélectionnés</p>
            <div>
              <h2 className="max-w-4xl text-balance font-display text-4xl leading-tight tracking-[-0.05em] text-ink md:text-6xl">Des systèmes construits autour d’un problème, pas autour d’une technologie.</h2>
              <div className="mt-14 divide-y divide-white/[0.1] border-y border-white/[0.1]">
                {projects.map((project, index) => (
                  <Link href={project.href} key={project.name} className="group grid gap-5 py-8 md:grid-cols-[70px_1fr_auto] md:items-start">
                    <span className="font-mono text-xs text-white/25">{project.number}</span>
                    <div className="min-w-0">
                      <h3 className="font-display text-2xl tracking-[-0.03em] text-ink transition-colors duration-200 group-hover:text-signal md:text-3xl">{project.name}</h3>
                      <p className="mt-2 max-w-xl text-sm leading-6 text-white/50">{project.description}</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {project.tags.map((tag) => <span key={tag} className="border border-white/[0.1] px-2 py-1 font-mono text-[0.58rem] uppercase tracking-[0.12em] text-white/35">{tag}</span>)}
                      </div>
                    </div>
                    <span className="font-mono text-xs uppercase tracking-[0.14em] text-white/35 transition-colors duration-200 group-hover:text-signal">Voir l’étude ↗</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/[0.08] px-6 py-24 md:px-10 md:py-36">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 md:grid-cols-[0.65fr_1.35fr] md:gap-16">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/35">02 / Méthode</p>
            <div>
              <h2 className="max-w-3xl text-balance font-display text-4xl leading-tight tracking-[-0.05em] text-ink md:text-6xl">Rendre le complexe lisible avant de le construire.</h2>
              <div className="mt-14 grid gap-0 border-t border-white/[0.1] md:grid-cols-2">
                {principles.map(([number, title, description]) => (
                  <div key={number} className="border-b border-white/[0.1] py-7 md:odd:pr-8 md:even:border-l md:even:pl-8">
                    <p className="font-mono text-xs text-signal">{number}</p>
                    <h3 className="mt-8 font-display text-xl text-ink">{title}</h3>
                    <p className="mt-3 max-w-xs text-sm leading-6 text-white/45">{description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:px-10 md:py-36">
        <div className="mx-auto max-w-7xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/35">03 / Prochaine étape</p>
          <div className="mt-8 flex flex-col justify-between gap-10 md:flex-row md:items-end">
            <h2 className="max-w-5xl text-balance font-display text-4xl leading-[0.95] tracking-[-0.06em] text-ink md:text-7xl">Vous construisez quelque chose de complexe ?<br /><span className="text-white/30">Donnons-lui une structure claire.</span></h2>
            <Link href="/contact" className="w-fit shrink-0 border border-signal/50 px-5 py-3 text-sm text-signal transition-colors duration-200 hover:bg-signal hover:text-canvas">Me contacter →</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
