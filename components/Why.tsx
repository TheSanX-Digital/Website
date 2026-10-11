import { strengths } from "@/lib/site";
import Reveal from "./Reveal";
import { Eyebrow } from "./SectionHead";

export default function Why() {
  return (
    <section id="pourquoi" className="py-16 sm:py-24 lg:py-28">
      <div className="wrap grid items-center gap-14 lg:grid-cols-2">
        <div>
          <Eyebrow>Pourquoi ThesanX Digital</Eyebrow>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Un interlocuteur unique pour tout votre écosystème digital
          </h2>
          <p className="mt-4 text-muted">
            Plutôt que de multiplier les prestataires, confiez votre projet à une équipe qui maîtrise
            l&apos;ensemble de la chaîne : du code à l&apos;hébergement, du référencement à l&apos;IA.
          </p>
        </div>
        <ul className="grid gap-3.5">
          {strengths.map((s) => (
            <Reveal
              as="li"
              key={s.title}
              className="relative rounded-xl border border-line bg-surface py-4.5 pl-14 pr-5 text-muted"
            >
              <span
                aria-hidden="true"
                className="bg-brand absolute left-4.5 top-4.5 grid size-6 place-items-center rounded-full text-xs font-extrabold text-white"
              >
                ✓
              </span>
              <strong className="text-fg">{s.title}</strong> — {s.text}
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
