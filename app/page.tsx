import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Method from "@/components/Method";
import SectionLabel from "@/components/SectionLabel";
import Services from "@/components/Services";
import Why from "@/components/Why";

const contactSteps = [
  "Vous nous décrivez votre projet et vos objectifs.",
  "Nous étudions votre besoin et revenons vers vous.",
  "Vous recevez une proposition claire et adaptée.",
];

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <Services />
        <Method />
        <Why />
        <section id="contact" className="border-t border-line bg-surface py-24 sm:py-32">
          <div className="wrap">
            <SectionLabel index="04">Contact</SectionLabel>
            <div className="grid gap-14 lg:grid-cols-[1fr_1.3fr]">
              <div>
                <h2 className="font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl">
                  Parlons de <span className="text-accent">votre projet.</span>
                </h2>
                <ol className="mt-10 space-y-5">
                  {contactSteps.map((step, i) => (
                    <li key={step} className="flex gap-4 text-sm text-muted">
                      <span className="font-mono text-xs text-accent">{String(i + 1).padStart(2, "0")}</span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
