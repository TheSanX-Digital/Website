"use client";

import { useEffect, useState } from "react";
import { navLinks } from "@/lib/site";
import Logo from "./Logo";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
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
    <header
      className={`sticky top-0 z-50 border-b bg-ink/75 backdrop-blur-md transition-colors ${
        scrolled ? "border-line" : "border-transparent"
      }`}
    >
      <div className="wrap flex h-[70px] items-center justify-between">
        <a href="#main" className="flex items-center gap-2.5 text-lg" aria-label="ThesanX Digital — accueil">
          <Logo className="size-8" />
          <span>
            ThesanX <strong className="text-gradient font-extrabold">Digital</strong>
          </span>
        </a>

        <button
          type="button"
          className="p-2 md:hidden"
          aria-expanded={open}
          aria-controls="nav-menu"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          onClick={() => setOpen((o) => !o)}
        >
          <span className={`my-1.5 block h-0.5 w-6 bg-fg transition ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`my-1.5 block h-0.5 w-6 bg-fg transition ${open ? "opacity-0" : ""}`} />
          <span className={`my-1.5 block h-0.5 w-6 bg-fg transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>

        <nav
          id="nav-menu"
          aria-label="Navigation principale"
          className={`${open ? "flex" : "hidden"} absolute inset-x-0 top-[70px] flex-col border-b border-line bg-ink px-4 pb-5 pt-2 md:static md:flex md:flex-row md:items-center md:gap-7 md:border-0 md:bg-transparent md:p-0`}
        >
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={close}
              className="border-b border-line py-3.5 font-medium text-muted transition-colors hover:text-fg md:border-0 md:py-0"
            >
              {l.label}
            </a>
          ))}
          <a href="#contact" onClick={close} className="btn mt-4 px-4 py-2 text-sm md:mt-0">
            Démarrer un projet
          </a>
        </nav>
      </div>
    </header>
  );
}
