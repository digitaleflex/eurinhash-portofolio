import Link from "next/link";

const projects = [
  ["01","HashCode","Community / Technology Platform","/work/hashcode"],
  ["02","Marketplace 1M","Digital Marketplace","/work/marketplace-1m"],
  ["03","Mecanotic Auto","Automotive Commerce","/work/mecanotic-auto"],
  ["04","EduSync","Education Infrastructure","/work/edusync"],
];

export default function Home() {
  return <main>
    <section className="relative flex min-h-[calc(100vh-5rem)] items-end overflow-hidden border-b border-white/[0.08] px-6 pb-20 md:px-10 md:pb-28">
      <div className="pointer-events-none absolute right-[8%] top-[12%] h-72 w-72 rounded-full border border-[#c5f441]/10 blur-[1px]" />
      <div className="pointer-events-none absolute right-[13%] top-[19%] h-52 w-52 rounded-full border border-white/10" />
      <div className="mx-auto w-full max-w-7xl">
        <p className="mb-8 text-xs uppercase tracking-[0.3em] text-white/40">Digital Architect · Technology Entrepreneur</p>
        <h1 className="max-w-6xl text-balance text-5xl font-medium leading-[.91] tracking-[-.065em] md:text-8xl lg:text-[7.5rem]">
          I design systems
          <br />
          <span className="text-white/30">that turn ideas</span>
          <br />
          into infrastructure.
        </h1>
        <div className="mt-12 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <p className="max-w-xl text-base leading-7 text-white/50 md:text-lg">
            Software, cloud, cybersecurity and applied AI — connected through product thinking and systems engineering.
          </p>
          <Link href="/work" className="w-fit border border-white/20 px-5 py-3 text-sm hover:border-[#c5f441]/60 hover:text-[#c5f441]">Explore selected work →</Link>
        </div>
      </div>
    </section>

    <section className="border-b border-white/[0.08] px-6 md:px-10">
      <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-white/[0.08] md:grid-cols-4">
        {[
          ["SYSTEMS","Product architecture"],
          ["AI","Applied intelligence"],
          ["CLOUD","Infrastructure"],
          ["SECURITY","Trust by design"],
        ].map(([a,b])=><div key={a} className="px-5 py-8 first:pl-0 md:px-8"><p className="text-xs tracking-[.2em] text-[#c5f441]">{a}</p><p className="mt-2 text-xs text-white/35">{b}</p></div>)}
      </div>
    </section>

    <section className="border-b border-white/[0.08] px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-[.75fr_1.25fr]">
        <div><p className="text-xs uppercase tracking-[.28em] text-white/35">01 / Selected work</p></div>
        <div>
          <h2 className="max-w-4xl text-3xl leading-tight tracking-[-.04em] md:text-5xl">The portfolio is a record of systems built, decisions made and problems solved.</h2>
          <div className="mt-16 divide-y divide-white/10 border-y border-white/10">
            {projects.map(([n,name,type,href])=><Link href={href} key={name} className="group grid gap-4 py-7 md:grid-cols-[70px_1fr_auto] md:items-center">
              <span className="text-xs text-white/25">{n}</span><div><h3 className="text-xl transition group-hover:text-[#c5f441] md:text-2xl">{name}</h3><p className="mt-1 text-sm text-white/35">{type}</p></div><span className="text-sm text-white/25 transition group-hover:text-white">View →</span>
            </Link>)}
          </div>
        </div>
      </div>
    </section>

    <section className="border-b border-white/[0.08] px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-[.75fr_1.25fr]">
        <p className="text-xs uppercase tracking-[.28em] text-white/35">02 / Architecture</p>
        <div>
          <h2 className="text-3xl leading-tight tracking-[-.04em] md:text-5xl">From product intent to resilient technical systems.</h2>
          <div className="mt-14 grid gap-3 md:grid-cols-2">
            {["Product thinking","System design","Security by design","Scalability","Performance","AI integration"].map((x,i)=><div key={x} className="border border-white/10 p-6"><span className="text-xs text-white/25">0{i+1}</span><h3 className="mt-10">{x}</h3></div>)}
          </div>
        </div>
      </div>
    </section>

    <section className="px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-7xl">
        <p className="text-xs uppercase tracking-[.28em] text-white/35">03 / Next</p>
        <div className="mt-8 flex flex-col justify-between gap-10 md:flex-row md:items-end">
          <h2 className="max-w-4xl text-4xl tracking-[-.05em] md:text-7xl">Building something complex?<br/><span className="text-white/30">Let&apos;s make the system make sense.</span></h2>
          <Link href="/contact" className="w-fit shrink-0 border border-white/20 px-5 py-3 text-sm hover:border-[#c5f441]/60 hover:text-[#c5f441]">Get in touch →</Link>
        </div>
      </div>
    </section>
  </main>;
}