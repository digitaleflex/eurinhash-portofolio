export default function AboutPage() {
  return <Page title="About" eyebrow="01 / About" intro="A systems-oriented technology builder working across software, cloud, security and applied AI." />;
}
function Page({title,eyebrow,intro}:{title:string;eyebrow:string;intro:string}) {
  return <main className="min-h-screen bg-ink text-paper px-6 py-10 md:px-10"><a href="/" className="text-sm text-white/50">← Home</a><section className="mx-auto max-w-6xl py-32"><p className="text-xs uppercase tracking-[.28em] text-white/40">{eyebrow}</p><h1 className="mt-6 text-6xl tracking-[-.05em] md:text-8xl">{title}</h1><p className="mt-10 max-w-2xl text-xl leading-8 text-white/55">{intro}</p></section></main>;
}