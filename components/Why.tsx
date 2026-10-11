import { strengths } from "@/lib/site";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

export default function Why() {
  return (
    <section id="pourquoi" className="py-24 sm:py-32">
      <div className="wrap">
        <SectionLabel index="03">Pourquoi nous</SectionLabel>

        <div className="grid gap-14 lg:grid-cols-[1fr_1.2fr]">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <h2 className="font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl">
              Tout votre écosystème digital, <span className="text-accent">maîtrisé.</span>
            </h2>
            <p className="mt-6 max-w-md text-muted">
              Plutôt que de multiplier les prestataires, confiez votre projet à une équipe qui maîtrise
              l&apos;ensemble de la chaîne : du code à l&apos;hébergement, du référencement à l&apos;IA.
            </p>
          </div>

          <ul className="border-t border-line">
            {strengths.map((s, i) => (
              <Reveal as="li" key={s.title} className="flex gap-6 border-b border-line py-7">
                <span className="pt-1 font-mono text-xs text-accent">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="font-display text-lg font-semibold tracking-tight">{s.title}</h3>
                  <p className="mt-1 text-sm text-muted">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
