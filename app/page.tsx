const projects = [
  { label: "01", name: "HashCode", type: "Community / Platform" },
  { label: "02", name: "Marketplace 1M", type: "Digital Marketplace" },
  { label: "03", name: "Mecanotic Auto", type: "Automotive Commerce" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-ink text-paper">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-10">
        <a href="/" className="text-sm font-semibold tracking-[0.18em] uppercase">
          Eurin Hash
        </a>
        <div className="hidden gap-8 text-sm text-white/70 md:flex">
          <a href="#work" className="hover:text-white">Work</a>
          <a href="#architecture" className="hover:text-white">Architecture</a>
          <a href="#about" className="hover:text-white">About</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>
      </nav>

      <section className="mx-auto flex min-h-[78vh] max-w-7xl flex-col justify-end px-6 pb-20 pt-16 md:px-10 md:pb-28">
        <div className="max-w-5xl">
          <p className="mb-7 text-xs uppercase tracking-[0.28em] text-white/45">
            Digital Architect · Technology Entrepreneur
          </p>
          <h1 className="text-balance text-5xl font-medium leading-[0.95] tracking-[-0.05em] md:text-8xl">
            I design and build
            <span className="text-white/35"> digital systems,</span>
            <br />
            intelligent products,
            <br />
            and technology ecosystems.
          </h1>
          <div className="mt-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <p className="max-w-xl text-base leading-7 text-white/60 md:text-lg">
              A working archive of products, architectures, experiments and ideas —
              built around systems thinking, engineering discipline and useful technology.
            </p>
            <a
              href="#work"
              className="inline-flex w-fit items-center border border-white/20 px-5 py-3 text-sm transition hover:border-white/60"
            >
              Explore the work →
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="border-t border-white/10">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-[1fr_1.2fr] md:px-10 md:py-32">
          <p className="text-xs uppercase tracking-[0.28em] text-white/40">01 / About</p>
          <div>
            <h2 className="max-w-3xl text-3xl leading-tight tracking-[-0.03em] md:text-5xl">
              Technology is not a collection of tools. It is a system of decisions.
            </h2>
            <p className="mt-8 max-w-2xl text-base leading-8 text-white/55">
              I work across software engineering, cloud infrastructure, cybersecurity,
              applied AI and digital products — connecting product intent to resilient technical systems.
            </p>
          </div>
        </div>
      </section>

      <section id="work" className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
          <div className="mb-14 flex items-end justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-white/40">02 / Selected work</p>
              <h2 className="mt-5 text-3xl tracking-[-0.03em] md:text-5xl">Built systems, not just screens.</h2>
            </div>
          </div>
          <div className="divide-y divide-white/10 border-y border-white/10">
            {projects.map((project) => (
              <article key={project.label} className="grid gap-5 py-8 md:grid-cols-[80px_1fr_auto] md:items-center">
                <span className="text-sm text-white/30">{project.label}</span>
                <div>
                  <h3 className="text-xl md:text-2xl">{project.name}</h3>
                  <p className="mt-1 text-sm text-white/45">{project.type}</p>
                </div>
                <span className="text-sm text-white/40">Case study →</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="architecture" className="border-t border-white/10">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-[1fr_1.2fr] md:px-10 md:py-32">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-white/40">03 / Architecture</p>
            <h2 className="mt-5 text-3xl tracking-[-0.03em] md:text-5xl">
              Think in systems. Ship in layers.
            </h2>
          </div>
          <div className="grid gap-4">
            {[
              ["01", "Product thinking", "Start with the user problem, constraints and measurable outcome."],
              ["02", "System design", "Make boundaries, dependencies, failure modes and scale explicit."],
              ["03", "Security by design", "Treat trust, access and data protection as architecture concerns."],
              ["04", "Automation", "Remove repetitive work and make reliable paths the default."],
            ].map(([number, title, copy]) => (
              <div key={number} className="border border-white/10 p-6">
                <div className="mb-10 flex items-center justify-between text-xs text-white/35">
                  <span>{number}</span>
                  <span>0{Number(number)}</span>
                </div>
                <h3 className="text-lg">{title}</h3>
                <p className="mt-3 max-w-xl text-sm leading-6 text-white/50">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
          <p className="text-xs uppercase tracking-[0.28em] text-white/40">04 / Contact</p>
          <div className="mt-8 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <h2 className="max-w-4xl text-4xl tracking-[-0.04em] md:text-7xl">
              Building something complex?
              <span className="text-white/35"> Let&apos;s make the system make sense.</span>
            </h2>
            <a
              href="mailto:hello@eurinhash.com"
              className="shrink-0 border border-white/20 px-5 py-3 text-sm hover:border-white/60"
            >
              Get in touch →
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-xs text-white/35 md:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} Eurin Hash</span>
          <span>hub.eurinhash.com</span>
        </div>
      </footer>
    </main>
  );
}
