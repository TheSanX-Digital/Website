import { services } from "@/lib/site";

export default function Hero() {
  return (
    <section className="relative flex min-h-svh flex-col overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[70%] bg-[linear-gradient(rgb(201_169_110/.04)_1px,transparent_1px),linear-gradient(90deg,rgb(201_169_110/.04)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:linear-gradient(to_bottom,black,transparent)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-1/4 left-1/3 size-[900px] rounded-full bg-[radial-gradient(circle,rgb(201_169_110/.07),transparent_60%)] blur-3xl"
      />

      <div className="wrap relative flex flex-1 flex-col pb-10 pt-32 sm:pt-40">
        <div className="flex-1">
          <p className="mb-6 font-mono text-[0.7rem] uppercase tracking-[0.35em] text-muted">
            Agence web · SEO · IA · Automatisation
          </p>

          <h1
            className="font-display font-bold uppercase leading-[0.9] tracking-[-0.04em]"
            style={{ fontSize: "clamp(3.75rem, 11vw, 9.5rem)" }}
          >
            <span className="block">ThesanX</span>
            <span className="outlined block">Digital.</span>
          </h1>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <p className="max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              Nous concevons, développons et déployons des sites web performants, puis les faisons
              évoluer : référencement, intelligence artificielle, automatisation et hébergement.{" "}
              <span className="text-fg">De la conception à leur fonctionnement optimal.</span>
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#contact" className="btn-primary">
                Parlons de votre projet
                <span aria-hidden="true">→</span>
              </a>
              <a href="#services" className="btn-secondary">
                Nos services
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t sm:flex-row sm:items-center sm:gap-6 border-line pt-6">
          <span className="font-mono text-[0.65rem] uppercase tracking-[0.25em] text-muted">
            Expertises
          </span>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs text-muted">
            {services.map((s, i) => (
              <li key={s.title}>
                <span className="mr-2 text-accent">{String(i + 1).padStart(2, "0")}</span>
                {s.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
