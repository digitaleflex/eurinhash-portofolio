import Link from "next/link";
import { PageHero } from "@/components/page-hero";

const services = [
  ["01", "Architecture numérique", "Clarifier les besoins, structurer les composants et rendre les décisions compréhensibles."],
  ["02", "Ingénierie produit", "Construire des expériences fiables qui restent utiles au-delà de la première version."],
  ["03", "Cloud & DevOps", "Mettre en place des déploiements, une observabilité et une fiabilité mesurables."],
  ["04", "IA appliquée", "Intégrer l’IA dans un workflow réel, avec des limites et une évaluation honnête."],
  ["05", "Ingénierie de la sécurité", "Réduire les risques par la conception, les permissions, la validation et la traçabilité."],
  ["06", "Stratégie technique", "Transformer une vision en une trajectoire progressive, compréhensible et défendable."],
];

export default function Services() {
  return (
    <main>
      <PageHero eyebrow="08 / Services" title="Services" description="Un accompagnement technique pour les équipes qui veulent clarifier leur architecture, renforcer leur ingénierie et passer à l’action." />
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
        <div className="border-t border-white/[0.1]">
          {services.map(([number, title, description]) => (
            <article key={number} className="grid gap-5 border-b border-white/[0.1] py-8 md:grid-cols-[80px_0.8fr_1fr]">
              <span className="font-mono text-xs text-signal">{number}</span>
              <h2 className="font-display text-2xl text-ink">{title}</h2>
              <p className="text-sm leading-6 text-white/45">{description}</p>
            </article>
          ))}
        </div>
        <Link href="/contact" className="mt-12 inline-flex border border-signal/50 px-5 py-3 text-sm text-signal transition-colors duration-200 hover:bg-signal hover:text-canvas">Parlons de votre système →</Link>
      </section>
    </main>
  );
}
