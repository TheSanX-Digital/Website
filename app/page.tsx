import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Method from "@/components/Method";
import SectionHead from "@/components/SectionHead";
import Services from "@/components/Services";
import Why from "@/components/Why";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <Services />
        <Method />
        <Why />
        <section id="contact" className="bg-ink-alt py-16 sm:py-24 lg:py-28">
          <div className="wrap">
            <SectionHead
              eyebrow="Contact"
              title="Parlons de votre projet"
              text="Décrivez-nous votre besoin : nous revenons vers vous rapidement avec une proposition adaptée."
            />
            <ContactForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
