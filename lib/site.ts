export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
export const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "";

export const siteName = "ThesanX Digital";
export const siteDescription =
  "ThesanX Digital conçoit, développe et déploie des sites web statiques et dynamiques, assure leur maintenance, leur référencement SEO, l'intégration d'IA, l'automatisation et l'hébergement.";

export const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#methode", label: "Méthode" },
  { href: "#pourquoi", label: "Pourquoi nous" },
];

export const services = [
  {
    icon: "web",
    title: "Création de sites web",
    text: "Conception, développement et déploiement de sites statiques et dynamiques : vitrines, sites institutionnels, applications web, sur-mesure et responsive.",
  },
  {
    icon: "maintenance",
    title: "Maintenance & évolution",
    text: "Maintenance corrective et évolutive de vos sites existants : mises à jour, sécurité, performances, nouvelles fonctionnalités et refonte.",
  },
  {
    icon: "seo",
    title: "Optimisation SEO",
    text: "Audit, optimisation technique et éditoriale, performances et données structurées pour renforcer votre visibilité sur les moteurs de recherche.",
  },
  {
    icon: "ai",
    title: "Intelligence artificielle",
    text: "Intégration de solutions basées sur l'IA : assistants conversationnels, génération et analyse de contenu, recherche intelligente dans vos données.",
  },
  {
    icon: "automation",
    title: "Automatisation",
    text: "Automatisation des processus numériques : workflows, connexions entre outils, synchronisation de données et tâches récurrentes pour gagner du temps.",
  },
  {
    icon: "hosting",
    title: "Hébergement & déploiement",
    text: "Gestion de l'hébergement, des noms de domaine, des certificats SSL et des environnements de déploiement (préproduction, production, CI/CD).",
  },
] as const;

export type ServiceIcon = (typeof services)[number]["icon"];

export const steps = [
  { title: "Écoute & conception", text: "Nous analysons vos besoins, vos objectifs et votre public pour définir la solution adaptée." },
  { title: "Développement", text: "Design, intégration et développement avec des points d'étape réguliers et une préproduction pour valider." },
  { title: "Déploiement", text: "Mise en ligne sur un hébergement fiable et sécurisé, optimisée pour le SEO et la performance." },
  { title: "Suivi & amélioration", text: "Maintenance, évolutions, automatisations et nouvelles fonctionnalités IA au fil de vos besoins." },
];

export const strengths = [
  { title: "Accompagnement de bout en bout", text: "conception, réalisation, mise en ligne et suivi." },
  { title: "Technologies modernes", text: "sites rapides, sécurisés et adaptés à tous les écrans." },
  { title: "Visibilité intégrée", text: "le SEO est pensé dès la conception, pas après coup." },
  { title: "Innovation utile", text: "IA et automatisation au service de gains concrets." },
  { title: "Fiabilité", text: "hébergement, sauvegardes et environnements maîtrisés." },
];
