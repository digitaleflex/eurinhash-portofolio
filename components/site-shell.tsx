"use client";

import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useState } from "react";

const links = [
  ["Work", "/work"],
  ["Systems", "/systems"],
  ["Labs", "/labs"],
  ["Journal", "/journal"],
  ["About", "/about"],
];

export function SiteShell({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-canvas text-ink">
      <a className="skip-link" href="#contenu">Aller au contenu</a>
      <header className="site-header">
        <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between px-5 md:px-10">
          <Link href="/" onClick={() => setOpen(false)} className="flex items-center gap-3" aria-label="Eurin Hash — accueil">
            <span className="brand-mark">EH</span>
            <span className="hidden font-mono text-[10px] uppercase tracking-[0.18em] text-white/45 sm:inline">Digital Architect</span>
          </Link>
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Navigation principale">
            {links.map(([label, href]) => <Link key={href} href={href} className="nav-link">{label}</Link>)}
          </nav>
          <div className="flex items-center gap-3">
            <Link href="/contact" className="nav-cta hidden sm:inline-flex">Start a project <ArrowUpRight size={13} /></Link>
            <button type="button" className="menu-button lg:hidden" aria-label={open ? "Fermer le menu" : "Ouvrir le menu"} aria-expanded={open} onClick={() => setOpen((value) => !value)}>
              {open ? <X size={19} /> : <Menu size={19} />}
            </button>
          </div>
        </div>
        {open ? (
          <div className="mobile-nav lg:hidden">
            <div className="mx-auto max-w-7xl px-5 pb-5">
              {links.map(([label, href], index) => (
                <Link key={href} href={href} onClick={() => setOpen(false)} className="mobile-nav-link"><span>0{index + 1}</span>{label}<ArrowUpRight size={15} /></Link>
              ))}
              <Link href="/contact" onClick={() => setOpen(false)} className="mobile-nav-cta">Start a project <ArrowUpRight size={15} /></Link>
            </div>
          </div>
        ) : null}
      </header>
      <div id="contenu" className="pt-[4.5rem]">{children}</div>
      <footer className="border-t border-white/[0.08] px-5 py-8 md:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 font-mono text-[10px] uppercase tracking-[0.14em] text-white/30 md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} Eurin Hash</span>
          <div className="flex flex-wrap gap-5"><Link href="/work" className="hover:text-signal">Work</Link><Link href="/systems" className="hover:text-signal">Systems</Link><Link href="/labs" className="hover:text-signal">Labs</Link><a href="mailto:hello@eurinhash.com" className="hover:text-signal">hello@eurinhash.com</a></div>
        </div>
      </footer>
    </div>
  );
}
