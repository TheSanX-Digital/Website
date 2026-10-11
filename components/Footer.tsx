import { navLinks } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-line py-10 text-sm text-muted">
      <div className="wrap flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-display text-base font-bold text-fg">
          ThesanX<span className="text-accent">.</span>{" "}
          <span className="font-mono text-[0.65rem] font-normal uppercase tracking-[0.25em] text-muted">Digital</span>
        </p>
        <ul className="flex flex-wrap gap-6">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="transition-colors hover:text-accent">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <p className="font-mono text-xs">&copy; {new Date().getFullYear()} ThesanX Digital</p>
      </div>
    </footer>
  );
}
