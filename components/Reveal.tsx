"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  as?: "div" | "li" | "article";
  className?: string;
  children: React.ReactNode;
};

// Fait apparaître l'élément lorsqu'il entre dans la fenêtre. Le contenu reste visible
// sans JavaScript et pour les éléments déjà à l'écran au chargement.
export default function Reveal({ as: Tag = "div", className = "", children }: Props) {
  const ref = useRef<HTMLElement>(null);
  const [state, setState] = useState<"idle" | "hidden" | "shown">("idle");

  useEffect(() => {
    const el = ref.current;
    if (!el || !("IntersectionObserver" in window)) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (el.getBoundingClientRect().top < window.innerHeight) return;

    setState("hidden");
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setState("shown");
          io.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as never}
      className={`transition duration-700 ease-out ${state === "hidden" ? "translate-y-4 opacity-0" : ""} ${className}`}
    >
      {children}
    </Tag>
  );
}
