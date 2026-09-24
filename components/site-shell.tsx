import Link from "next/link";

const links = [
  ["Projets", "/work"],
  ["Architecture", "/architecture"],
  ["Laboratoires", "/labs"],
  ["Écosystème", "/ecosystem"],
  ["Communauté", "/community"],
  ["Journal", "/journal"],
  ["Services", "/services"],
  ["À propos", "/about"],
];

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-canvas text-ink">
      <a className="skip-link" href="#contenu">Aller au contenu</a>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.07] bg-canvas/90 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-10">
          <Link href="/" className="flex items-center gap-3 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-ink" aria-label="Eurin Hash — accueil">
            <span className="flex h-8 w-8 items-center justify-center border border-signal/40 text-signal">EH</span>
            <span className="hidden sm:inline">Systèmes complexes</span>
          </Link>
          <nav className="hidden items-center gap-5 lg:flex" aria-label="Navigation principale">
            {links.map(([label, href]) => (
              <Link key={href} href={href} className="text-xs text-white/55 transition-colors duration-200 hover:text-ink">
                {label}
              </Link>
            ))}
          </nav>
          <Link href="/contact" className="border border-signal/40 px-4 py-2 font-mono text-[0.65rem] uppercase tracking-[0.12em] text-signal transition-colors duration-200 hover:bg-signal hover:text-canvas">
            Parlons de votre projet
          </Link>
        </div>
      </header>
      <div id="contenu" className="pt-20">{children}</div>
    </div>
  );
}
