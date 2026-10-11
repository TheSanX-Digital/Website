import { Eyebrow } from "./SectionHead";

const tags = ["Web", "SEO", "IA", "Automatisation", "Hébergement"];

export default function Hero() {
  return (
    <section className="bg-[radial-gradient(600px_400px_at_85%_10%,rgb(34_211_238/.15),transparent_70%),radial-gradient(700px_500px_at_10%_0%,rgb(109_93_252/.25),transparent_70%)] py-16 sm:py-24 lg:py-30">
      <div className="wrap grid items-center gap-14 lg:grid-cols-[1.15fr_1fr]">
        <div>
          <Eyebrow>Agence digitale</Eyebrow>
          <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            Votre projet digital,{" "}
            <span className="text-gradient">de la conception à son fonctionnement optimal.</span>
          </h1>
          <p className="mt-6 max-w-[56ch] text-lg text-muted">
            ThesanX Digital conçoit, développe et déploie des sites web performants, les fait évoluer,
            les rend visibles sur Google et les connecte à l&apos;intelligence artificielle et à
            l&apos;automatisation.
          </p>
          <div className="mb-7 mt-8 flex flex-wrap gap-3.5">
            <a href="#contact" className="btn">
              Parlons de votre projet
            </a>
            <a href="#services" className="btn btn-ghost">
              Découvrir nos services
            </a>
          </div>
          <ul className="flex flex-wrap gap-2" aria-label="Domaines d'expertise">
            {tags.map((t) => (
              <li key={t} className="rounded-full border border-line px-3.5 py-1 text-sm text-muted">
                {t}
              </li>
            ))}
          </ul>
        </div>

        <div aria-hidden="true" className="overflow-hidden rounded-2xl border border-line bg-surface shadow-[0_20px_50px_-20px_rgb(0_0_0/.6)]">
          <div className="flex gap-1.5 border-b border-line px-4 py-3.5">
            <i className="size-3 rounded-full bg-[#ff5f57]" />
            <i className="size-3 rounded-full bg-[#febc2e]" />
            <i className="size-3 rounded-full bg-[#28c840]" />
          </div>
          <pre className="overflow-x-auto px-6 py-5 font-mono text-[.95rem] leading-7">
            <code>
              <span className="text-purple-400">const</span> projet = <span className="text-purple-400">await</span> thesanx{"\n"}
              {["concevoir(idée)", "développer()", "optimiserSEO()", "intégrerIA()", "automatiser()", "déployer();"].map((m) => {
                const [name, rest] = m.split("(");
                return (
                  <span key={m}>
                    {"  ."}
                    <span className="text-accent">{name}</span>({rest}
                    {"\n"}
                  </span>
                );
              })}
              {"\n"}
              <span className="text-emerald-300">{"// ✔ En ligne, rapide, visible."}</span>
            </code>
          </pre>
        </div>
      </div>
    </section>
  );
}
