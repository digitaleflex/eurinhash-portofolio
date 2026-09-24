import Link from "next/link";

const projects = [
  ["01","HashCode","Communauté / plateforme technologique","/work/hashcode"],
  ["02","Marketplace 1M","Place de marché numérique","/work/marketplace-1m"],
  ["03","Mecanotic Auto","Commerce automobile","/work/mecanotic-auto"],
  ["04","EduSync","Infrastructure éducative","/work/edusync"],
];

export default function Home() {
  return <main>
    <section className="relative flex min-h-[calc(100vh-5rem)] items-end overflow-hidden border-b border-white/[0.08] px-6 pb-20 md:px-10 md:pb-28">
      <div className="pointer-events-none absolute right-[8%] top-[12%] h-72 w-72 rounded-full border border-[#c5f441]/10 blur-[1px]" />
      <div className="pointer-events-none absolute right-[13%] top-[19%] h-52 w-52 rounded-full border border-white/10" />
      <div className="mx-auto w-full max-w-7xl">
        <p className="mb-8 text-xs uppercase tracking-[0.3em] text-white/40">Architecte digital · entrepreneur technologique</p>
        <h1 className="max-w-6xl text-balance text-5xl font-medium leading-[.91] tracking-[-.065em] md:text-8xl lg:text-[7.5rem]">
          Je conçois des systèmes
          <br />
          <span className="text-white/30">qui transforment les idées</span>
          <br />
          en infrastructures.
        </h1>
        <div className="mt-12 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <p className="max-w-xl text-base leading-7 text-white/50 md:text-lg">
            Logiciel, cloud, cybersécurité et IA appliquée — réunis par la vision produit et l’ingénierie système.
          </p>
          <Link href="/work" className="w-fit border border-white/20 px-5 py-3 text-sm hover:border-[#c5f441]/60 hover:text-[#c5f441]">Découvrir les projets →</Link>
        </div>
      </div>
    </section>

    <section className="border-b border-white/[0.08] px-6 md:px-10">
      <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-white/[0.08] md:grid-cols-4">
        {[
          ["SYSTÈMES","Architecture produit"],
          ["IA","Intelligence appliquée"],
          ["CLOUD","Infrastructure"],
          ["SÉCURITÉ","Confiance intégrée"],
        ].map(([a,b])=><div key={a} className="px-5 py-8 first:pl-0 md:px-8"><p className="text-xs tracking-[.2em] text-[#c5f441]">{a}</p><p className="mt-2 text-xs text-white/35">{b}</p></div>)}
      </div>
    </section>

    <section className="border-b border-white/[0.08] px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-[.75fr_1.25fr]">
        <div><p className="text-xs uppercase tracking-[.28em] text-white/35">01 / Projets sélectionnés</p></div>
        <div>
          <h2 className="max-w-4xl text-3xl leading-tight tracking-[-.04em] md:text-5xl">Le portfolio retrace des systèmes conçus, des décisions prises et des problèmes résolus.</h2>
          <div className="mt-16 divide-y divide-white/10 border-y border-white/10">
            {projects.map(([n,name,type,href])=><Link href={href} key={name} className="group grid gap-4 py-7 md:grid-cols-[70px_1fr_auto] md:items-center">
              <span className="text-xs text-white/25">{n}</span><div><h3 className="text-xl transition group-hover:text-[#c5f441] md:text-2xl">{name}</h3><p className="mt-1 text-sm text-white/35">{type}</p></div><span className="text-sm text-white/25 transition group-hover:text-white">Voir →</span>
            </Link>)}
          </div>
        </div>
      </div>
    </section>

    <section className="border-b border-white/[0.08] px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-[.75fr_1.25fr]">
        <p className="text-xs uppercase tracking-[.28em] text-white/35">02 / Architecture</p>
        <div>
          <h2 className="text-3xl leading-tight tracking-[-.04em] md:text-5xl">De l’intention produit aux systèmes techniques résilients.</h2>
          <div className="mt-14 grid gap-3 md:grid-cols-2">
            {["Vision produit","Conception de systèmes","Sécurité dès la conception","Évolutivité","Performance","Intégration de l’IA"].map((x,i)=><div key={x} className="border border-white/10 p-6"><span className="text-xs text-white/25">0{i+1}</span><h3 className="mt-10">{x}</h3></div>)}
          </div>
        </div>
      </div>
    </section>

    <section className="px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-7xl">
        <p className="text-xs uppercase tracking-[.28em] text-white/35">03 / Suite</p>
        <div className="mt-8 flex flex-col justify-between gap-10 md:flex-row md:items-end">
          <h2 className="max-w-4xl text-4xl tracking-[-.05em] md:text-7xl">Vous construisez quelque chose de complexe ?<br/><span className="text-white/30">Donnons du sens au système.</span></h2>
          <Link href="/contact" className="w-fit shrink-0 border border-white/20 px-5 py-3 text-sm hover:border-[#c5f441]/60 hover:text-[#c5f441]">Me contacter →</Link>
        </div>
      </div>
    </section>
  </main>;
}
