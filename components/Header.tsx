"use client";

import { useEffect, useState } from "react";
import { navLinks } from "@/lib/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const close = () => setOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`transition-colors duration-300 ${
          scrolled || open ? "border-b border-line bg-bg/90 backdrop-blur-xl" : "border-b border-transparent"
        }`}
      >
        <div className="wrap flex h-[72px] items-center justify-between">
          <a href="#main" className="font-display text-lg font-bold tracking-tight" aria-label="ThesanX Digital — accueil">
            ThesanX<span className="text-accent">.</span>
            <span className="ml-1.5 hidden font-mono text-[0.65rem] font-normal uppercase tracking-[0.25em] text-muted sm:inline">
              Digital
            </span>
          </a>

          <nav aria-label="Navigation principale" className="hidden md:block">
            <ul className="flex items-center gap-1 rounded-full border border-line bg-surface/70 px-2 py-1.5 backdrop-blur-xl">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="block rounded-full px-4 py-1.5 text-sm text-muted transition-colors hover:bg-card hover:text-fg"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <a href="#contact" className="btn-primary hidden !px-5 !py-2.5 md:inline-flex">
            Démarrer un projet
          </a>

          <button
            type="button"
            className="-mr-2 p-2 md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            onClick={() => setOpen((o) => !o)}
          >
            <span className={`block h-px w-6 bg-fg transition ${open ? "translate-y-[3.5px] rotate-45" : ""}`} />
            <span className={`mt-1.5 block h-px w-6 bg-fg transition ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
          </button>
        </div>

        <nav
          id="mobile-menu"
          aria-label="Navigation mobile"
          className={`${open ? "block" : "hidden"} wrap pb-6 md:hidden`}
        >
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={close}
              className="block border-b border-line py-4 font-display text-lg text-fg"
            >
              {l.label}
            </a>
          ))}
          <a href="#contact" onClick={close} className="btn-primary mt-6 w-full justify-center">
            Démarrer un projet
          </a>
        </nav>
      </div>
    </header>
  );
}
