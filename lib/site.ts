export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
export const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "";

export const siteName = "ThesanX Digital";
export const siteDescription =
  "ThesanX Digital conçoit, développe et déploie des sites web statiques et dynamiques, assure leur maintenance, leur référencement SEO, l'intégration d'IA, l'automatisation et l'hébergement.";

export const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#methode", label: "Méthode" },
  { href: "#pourquoi", label: "Pourquoi nous" },
  { href: "#contact", label: "Contact" },
];

export const services = [
  {
    title: "Création de sites web",
    text: "Conception, développement et déploiement de sites statiques et dynamiques, pensés pour vos objectifs et adaptés à tous les écrans.",
    points: ["Sites vitrines", "Sites dynamiques", "Applications web"],
  },
  {
    title: "Maintenance & évolution",
    text: "Maintenance et amélioration de vos sites existants : mises à jour, sécurité, performances et nouvelles fonctionnalités.",
    points: ["Mises à jour", "Sécurité", "Refonte"],
  },
  {
    title: "Optimisation SEO",
    text: "Optimisation technique et éditoriale pour renforcer votre visibilité en ligne et attirer un trafic qualifié.",
    points: ["Audit", "SEO technique", "Performances"],
  },
  {
    title: "Intelligence artificielle",
    text: "Intégration de solutions basées sur l'IA directement dans vos outils et votre site, au service de besoins concrets.",
    points: ["Assistants", "Analyse de contenu", "Recherche"],
  },
  {
    title: "Automatisation",
    text: "Automatisation des processus numériques : connexions entre outils, synchronisation de données et tâches récurrentes.",
    points: ["Workflows", "Intégrations", "Synchronisation"],
  },
  {
    title: "Hébergement & déploiement",
    text: "Gestion de l'hébergement et des environnements de déploiement pour un site fiable, rapide et toujours disponible.",
    points: ["Hébergement", "Domaines & SSL", "CI/CD"],
  },
];

export const steps = [
  { title: "Écoute & conception", text: "Nous analysons vos besoins, vos objectifs et votre public pour définir la solution adaptée." },
  { title: "Développement", text: "Design, intégration et développement avec des points d'étape réguliers et une préproduction pour valider." },
  { title: "Déploiement", text: "Mise en ligne sur un hébergement fiable et sécurisé, optimisée pour le SEO et la performance." },
  { title: "Suivi & amélioration", text: "Maintenance, évolutions, automatisations et nouvelles fonctionnalités IA au fil de vos besoins." },
];

export const strengths = [
  { title: "Accompagnement de bout en bout", text: "Conception, réalisation, mise en ligne et suivi." },
  { title: "Technologies modernes", text: "Sites rapides, sécurisés et adaptés à tous les écrans." },
  { title: "Visibilité intégrée", text: "Le SEO est pensé dès la conception, pas après coup." },
  { title: "Innovation utile", text: "IA et automatisation au service de gains concrets." },
  { title: "Fiabilité", text: "Hébergement, sauvegardes et environnements maîtrisés." },
];
