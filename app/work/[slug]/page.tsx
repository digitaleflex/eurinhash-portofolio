import { notFound } from "next/navigation";
import Link from "next/link";

type Project = {
  name: string;
  type: string;
  summary: string;
  problem: string;
  areas: string[];
  decision: string;
  security: string;
  outcome: string;
  status: string;
};

const data: Record<string, Project> = {
  hashcode: {
    name: "HashCode",
    type: "Communauté / plateforme technologique",
    summary: "Un écosystème technologique qui réunit communauté, apprentissage, projets et systèmes d’apprentissage pratique.",
    problem: "Transformer une communauté technique en environnement d’apprentissage et de production partagé.",
    areas: ["Architecture produit", "Systèmes d’apprentissage", "Communauté", "Plateforme"],
    decision: "Structurer l’expérience autour d’un modèle qui relie les personnes, les projets et les compétences.",
    security: "Les permissions, la séparation des espaces et la traçabilité des actions restent au centre de la conception.",
    outcome: "Les résultats et métriques seront documentés à partir des données vérifiées du projet.",
    status: "Étude de cas en construction",
  },
  "marketplace-1m": {
    name: "Marketplace 1M",
    type: "Place de marché numérique",
    summary: "Un concept de place de marché premium, axé sur un commerce évolutif, la confiance et une expérience client soignée.",
    problem: "Construire une expérience de commerce capable de rester claire et fiable à mesure que le catalogue grandit.",
    areas: ["Architecture de place de marché", "Systèmes UX", "Commerce", "Évolutivité"],
    decision: "Prioriser une architecture modulaire, où catalogue, recherche, paiement et confiance peuvent évoluer séparément.",
    security: "Le modèle doit prévoir des contrôles d’accès adaptés aux vendeurs, acheteurs et opérations internes.",
    outcome: "Les résultats et métriques seront documentés à partir des données vérifiées du projet.",
    status: "Étude de cas en construction",
  },
  edusync: {
    name: "EduSync",
    type: "Infrastructure éducative",
    summary: "Une plateforme universitaire de gestion des emplois du temps et de coordination, conçue autour de données structurées et d’une clarté opérationnelle.",
    problem: "Réduire la complexité de la coordination universitaire et rendre les informations opérationnelles immédiatement lisibles.",
    areas: ["Next.js", "PostgreSQL", "Prisma", "Conception de workflows"],
    decision: "Partir d’un modèle de données structuré, puis aligner les interfaces et les workflows sur les mêmes règles métier.",
    security: "Les rôles utilisateurs, la confidentialité des données académiques et la traçabilité des modifications doivent être intégrés au modèle.",
    outcome: "Les résultats et métriques seront documentés à partir des données vérifiées du projet.",
    status: "Étude de cas en construction",
  },
  mecanotic-auto: {
    name: "Mecanotic Auto",
    type: "Commerce automobile digital",
    summary: "Une expérience digitale de distribution automobile pensée pour rendre le catalogue et la conversion plus lisibles.",
    problem: "Transformer un catalogue automobile riche en une expérience de découverte, de confiance et de conversion claire.",
    areas: ["Commerce", "UX", "WordPress", "WooCommerce"],
    decision: "Structurer l'expérience autour des catégories, de la recherche, de la réassurance et de parcours de contact simples.",
    security: "Limiter l'exposition des données opérationnelles et garder les interactions commerciales contrôlées par les rôles et les systèmes du site.",
    outcome: "Le système est présenté ici comme un cas de conception ; les résultats publics seront ajoutés uniquement lorsqu'ils seront vérifiés.",
    status: "Système client / documentation en cours",
  },
};

export default async function CaseStudy({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = data[slug];
  if (!project) notFound();

  return (
    <main>
      <section className="relative overflow-hidden border-b border-white/[0.1] px-6 pb-20 pt-16 md:px-10 md:pb-28 md:pt-20">
        <div className="system-grid pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl">
          <Link href="/work" className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-white/40 transition-colors duration-200 hover:text-signal">← Retour aux projets</Link>
          <div className="mt-16 grid gap-10 md:grid-cols-[1fr_0.4fr] md:items-end">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-signal">{project.type}</p>
              <h1 className="mt-6 text-balance font-display text-6xl font-medium leading-[0.9] tracking-[-0.07em] text-ink md:text-8xl">{project.name}</h1>
            </div>
            <p className="max-w-md text-pretty text-lg leading-8 text-white/50">{project.summary}</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
        <div className="grid gap-16 lg:grid-cols-[0.42fr_1fr]">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-signal">Contexte</p>
            <p className="mt-6 max-w-xs text-sm leading-6 text-white/45">{project.problem}</p>
          </div>
          <div>
            <div className="border-y border-white/[0.1] py-8">
              <p className="max-w-3xl text-2xl leading-tight tracking-[-0.03em] text-ink md:text-4xl">Transformer une intention en une structure que l’équipe peut comprendre, faire évoluer et sécuriser.</p>
            </div>
            <div className="mt-14 grid gap-3 md:grid-cols-4">
              {project.areas.map((area, index) => (
                <div key={area} className="border border-white/[0.1] p-5">
                  <span className="font-mono text-xs text-signal">0{index + 1}</span>
                  <h2 className="mt-10 text-sm leading-5 text-white/75">{area}</h2>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-24 grid gap-12 border-t border-white/[0.1] pt-12 md:grid-cols-3">
          <article>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-white/35">Décision</p>
            <h2 className="mt-5 font-display text-2xl text-ink">Une structure explicable.</h2>
            <p className="mt-4 text-sm leading-6 text-white/45">{project.decision}</p>
          </article>
          <article>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-white/35">Sécurité</p>
            <h2 className="mt-5 font-display text-2xl text-ink">La confiance intégrée.</h2>
            <p className="mt-4 text-sm leading-6 text-white/45">{project.security}</p>
          </article>
          <article>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-white/35">Résultat</p>
            <h2 className="mt-5 font-display text-2xl text-ink">À mesurer, puis à documenter.</h2>
            <p className="mt-4 text-sm leading-6 text-white/45">{project.outcome}</p>
            <p className="mt-5 font-mono text-[0.6rem] uppercase tracking-[0.14em] text-signal">{project.status}</p>
          </article>
        </div>

        <div className="mt-20 flex flex-col justify-between gap-8 border-t border-white/[0.1] pt-8 md:flex-row md:items-center">
          <p className="max-w-lg text-sm leading-6 text-white/40">Du problème au système : les prochaines étapes seront documentées à partir des informations vérifiées du projet.</p>
          <Link href="/work" className="w-fit border border-signal/50 px-5 py-3 text-sm text-signal transition-colors duration-200 hover:bg-signal hover:text-canvas">Voir les autres projets →</Link>
        </div>
      </section>
    </main>
  );
}
