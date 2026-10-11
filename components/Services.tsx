import { services, type ServiceIcon } from "@/lib/site";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

const icons: Record<ServiceIcon, React.ReactNode> = {
  web: (
    <>
      <rect x="3" y="4" width="18" height="14" rx="2" />
      <path d="M3 8h18M8 21h8M12 18v3" />
    </>
  ),
  maintenance: <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.4-.6-.6-2.4z" />,
  seo: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-4-4M8 11l2 2 4-4" />
    </>
  ),
  ai: (
    <>
      <rect x="5" y="7" width="14" height="12" rx="3" />
      <path d="M12 3v4M9 12h.01M15 12h.01M9 16h6M2 12h3M19 12h3" />
    </>
  ),
  automation: <path d="M4 12a8 8 0 0 1 14-5.3M20 12a8 8 0 0 1-14 5.3M18 3v4h-4M6 21v-4h4" />,
  hosting: (
    <>
      <rect x="3" y="4" width="18" height="7" rx="2" />
      <rect x="3" y="13" width="18" height="7" rx="2" />
      <path d="M7 7.5h.01M7 16.5h.01" />
    </>
  ),
};

export default function Services() {
  return (
    <section id="services" className="py-16 sm:py-24 lg:py-28">
      <div className="wrap">
        <SectionHead
          eyebrow="Nos services"
          title="Une expertise complète pour chaque projet digital"
          text="Six domaines complémentaires pour couvrir tout le cycle de vie de votre présence en ligne."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Reveal
              as="article"
              key={s.title}
              className="rounded-2xl border border-line bg-surface p-7 hover:-translate-y-1 hover:border-primary/60"
            >
              <div className="mb-5 grid size-13 place-items-center rounded-xl bg-linear-135 from-primary/25 to-accent/20">
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="size-6.5 fill-none stroke-accent stroke-[1.8] [stroke-linecap:round] [stroke-linejoin:round]"
                >
                  {icons[s.icon]}
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-bold">{s.title}</h3>
              <p className="text-muted">{s.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
