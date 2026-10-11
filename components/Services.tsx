import { services } from "@/lib/site";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

export default function Services() {
  return (
    <section id="services" className="py-24 sm:py-32">
      <div className="wrap">
        <SectionLabel index="01">Services</SectionLabel>

        <div className="mb-16 grid gap-6 lg:grid-cols-2 lg:items-end">
          <h2 className="font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl">
            Une expertise complète, <span className="text-accent">un seul interlocuteur.</span>
          </h2>
          <p className="max-w-lg text-muted lg:justify-self-end">
            Six domaines complémentaires pour accompagner votre projet digital à chaque étape de son
            cycle de vie.
          </p>
        </div>

        <ul className="border-t border-line">
          {services.map((s, i) => (
            <Reveal
              as="li"
              key={s.title}
              className="group grid gap-4 border-b border-line py-8 transition-colors hover:bg-surface sm:grid-cols-[80px_1fr] lg:grid-cols-[80px_minmax(0,1fr)_minmax(0,1.3fr)_auto] lg:items-baseline lg:gap-10 lg:px-4"
            >
              <span className="font-mono text-sm text-accent">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="font-display text-2xl font-semibold tracking-tight transition-colors group-hover:text-accent-light">
                {s.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted sm:col-start-2 lg:col-start-auto">{s.text}</p>
              <ul className="flex flex-wrap gap-2 sm:col-start-2 lg:col-start-auto lg:max-w-72 lg:justify-end">
                {s.points.map((p) => (
                  <li
                    key={p}
                    className="rounded-full border border-line px-3 py-1 font-mono text-[0.65rem] uppercase tracking-wider text-muted"
                  >
                    {p}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
