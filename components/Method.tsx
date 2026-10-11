import { steps } from "@/lib/site";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

export default function Method() {
  return (
    <section id="methode" className="border-y border-line bg-surface py-24 sm:py-32">
      <div className="wrap">
        <SectionLabel index="02">Méthode</SectionLabel>

        <h2 className="mb-16 max-w-2xl font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl">
          De l&apos;idée à la mise en ligne, <span className="text-accent">et au-delà.</span>
        </h2>

        <ol className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <Reveal as="li" key={step.title} className="bg-surface p-8">
              <div className="mb-10 flex items-center justify-between">
                <span className="font-mono text-xs text-accent">Étape {String(i + 1).padStart(2, "0")}</span>
                <span className="size-1.5 rounded-full bg-accent/60" />
              </div>
              <h3 className="mb-3 font-display text-xl font-semibold tracking-tight">{step.title}</h3>
              <p className="text-sm leading-relaxed text-muted">{step.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
