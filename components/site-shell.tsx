import Link from "next/link";

const links = [
  ["Projets", "/work"],
  ["Architecture", "/architecture"],
  ["Laboratoires", "/labs"],
  ["Journal", "/journal"],
  ["À propos", "/about"],
];

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#080808] text-[#f4f2ed]">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.07] bg-[#080808]/80 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-10">
          <Link href="/" className="text-sm font-semibold uppercase tracking-[0.18em]">
            EH<span className="text-[#c5f441]">.</span>
          </Link>
          <nav className="hidden items-center gap-7 md:flex">
            {links.map(([label, href]) => (
              <Link key={href} href={href} className="text-xs text-white/55 transition hover:text-white">{label}</Link>
            ))}
          </nav>
          <Link href="/contact" className="border border-white/15 px-4 py-2 text-xs transition hover:border-[#c5f441]/60 hover:text-[#c5f441]">
            Parlons de votre projet
          </Link>
        </div>
      </header>
      <div className="pt-20">{children}</div>
    </div>
  );
}
