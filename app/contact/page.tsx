import { PageHero } from "@/components/page-hero";

export default function Contact() {
  return (
    <main>
      <PageHero eyebrow="09 / Contact" title="Construisons quelque chose." description="Pour un produit, un partenariat technique, une mission d’architecture ou un problème intéressant qui mérite une ingénierie sérieuse." />
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-32">
        <div className="grid gap-10 border-y border-white/[0.1] py-12 md:grid-cols-[0.4fr_1fr] md:py-16">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-signal">Premier contact</p>
          <div>
            <p className="max-w-2xl text-pretty text-2xl leading-tight tracking-[-0.03em] text-ink md:text-4xl">Écrivez quelques lignes sur le problème que vous souhaitez rendre plus clair.</p>
            <a href="mailto:hello@eurinhash.com" className="mt-10 inline-flex border border-signal/50 px-5 py-3 font-mono text-sm text-signal transition-colors duration-200 hover:bg-signal hover:text-canvas">hello@eurinhash.com →</a>
          </div>
        </div>
      </section>
    </main>
  );
}
