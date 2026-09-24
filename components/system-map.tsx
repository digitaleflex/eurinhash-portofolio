"use client";

import Link from "next/link";
import { useState } from "react";

const nodes = [
  { id: "intent", label: "intention", x: 80, y: 82, tone: "lime" },
  { id: "architecture", label: "architecture", x: 210, y: 145, tone: "lime" },
  { id: "product", label: "produit", x: 340, y: 82, tone: "cyan" },
  { id: "security", label: "sécurité", x: 210, y: 270, tone: "lime" },
  { id: "cloud", label: "cloud", x: 92, y: 338, tone: "cyan" },
  { id: "delivery", label: "déploiement", x: 334, y: 338, tone: "cyan" },
];

const connections = [
  ["intent", "architecture"],
  ["product", "architecture"],
  ["architecture", "security"],
  ["security", "cloud"],
  ["security", "delivery"],
];

const copy: Record<string, { title: string; text: string; href?: string }> = {
  intent: { title: "Intention", text: "Clarifier le problème, les utilisateurs et les contraintes avant de choisir une solution." },
  architecture: { title: "Architecture", text: "Transformer les contraintes en composants, flux, responsabilités et décisions explicables.", href: "/architecture" },
  product: { title: "Produit", text: "Relier l'expérience utilisateur aux règles métier et aux opérations réelles.", href: "/work" },
  security: { title: "Sécurité", text: "Concevoir les accès, données, validations et traces comme une partie du système." },
  cloud: { title: "Cloud", text: "Déployer une infrastructure observable, reproductible et proportionnée au besoin.", href: "/labs" },
  delivery: { title: "Déploiement", text: "Passer de l'architecture à une version exploitable, mesurable et améliorable." },
};

export function SystemMap() {
  const [active, setActive] = useState("architecture");
  const activeCopy = copy[active];

  return (
    <div className="system-map-panel">
      <div className="flex items-center justify-between border-b border-white/[0.08] px-5 py-4 font-mono text-[10px] uppercase tracking-[0.16em] text-white/40 md:px-6">
        <span>System map / 01</span>
        <span className="inline-flex items-center gap-2 text-signal"><i className="status-dot" /> live model</span>
      </div>

      <div className="relative aspect-square min-h-[330px] p-4 md:min-h-[430px] md:p-6">
        <svg viewBox="0 0 420 420" className="absolute inset-0 h-full w-full" role="img" aria-label="Carte interactive du processus de conception d'un système">
          {connections.map(([from, to]) => {
            const a = nodes.find((node) => node.id === from)!;
            const b = nodes.find((node) => node.id === to)!;
            return <line key={from + to} className="system-map-connection" x1={a.x} y1={a.y} x2={b.x} y2={b.y} />;
          })}
          <circle className="system-map-core" cx="210" cy="208" r="46" />
          <text className="system-map-core-label" x="210" y="205">EURIN</text>
          <text className="system-map-core-sub" x="210" y="221">SYSTEMS</text>
          {nodes.map((node) => (
            <g key={node.id} className="cursor-pointer" onClick={() => setActive(node.id)} onKeyDown={(event) => event.key === "Enter" && setActive(node.id)} tabIndex={0} role="button" aria-label={"Voir " + node.label}>
              <circle className={"system-map-node " + (active === node.id ? "is-active " : "") + node.tone} cx={node.x} cy={node.y} r={active === node.id ? 10 : 7} />
              <text className="system-map-label" x={node.x} y={node.y - 18} textAnchor="middle">{node.label}</text>
            </g>
          ))}
        </svg>

        <div className="absolute bottom-4 left-4 right-4 grid gap-4 border-t border-white/[0.08] pt-4 md:bottom-6 md:left-6 md:right-6 md:grid-cols-[1fr_auto]">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-signal">{activeCopy.title}</p>
            <p className="mt-2 max-w-md text-xs leading-5 text-white/45">{activeCopy.text}</p>
          </div>
          {activeCopy.href ? (
            <Link href={activeCopy.href} className="self-end font-mono text-[10px] uppercase tracking-[0.14em] text-white/45 transition-colors hover:text-signal">Explorer →</Link>
          ) : null}
        </div>
      </div>
    </div>
  );
}
