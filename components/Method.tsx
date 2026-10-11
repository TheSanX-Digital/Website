import { steps } from "@/lib/site";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

export default function Method() {
  return (
    <section id="methode" className="bg-ink-alt py-16 sm:py-24 lg:py-28">
      <div className="wrap">
        <SectionHead eyebrow="Notre méthode" title="De l'idée à la mise en ligne, et au-delà" />
        <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <Reveal as="li" key={step.title} className="rounded-2xl border border-line bg-surface p-7">
              <span className="text-gradient mb-2.5 inline-block text-2xl font-extrabold">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mb-2 text-lg font-bold">{step.title}</h3>
              <p className="text-muted">{step.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
