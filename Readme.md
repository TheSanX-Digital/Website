# ThesanX Digital — site vitrine

Site de présentation de ThesanX Digital (création de sites web, maintenance, SEO, intégration d'IA,
automatisation et hébergement), réalisé avec **Next.js 16** (App Router, TypeScript) et **Tailwind CSS 4**.
Design sombre et sobre : noir chaud, accent or, typographies Space Grotesk / Inter / JetBrains Mono.

## Structure

```
app/
  layout.tsx       Métadonnées SEO, polices, données structurées schema.org
  page.tsx         Page d'accueil (assemblage des sections + contact)
  globals.css      Thème Tailwind (couleurs, polices, boutons btn-primary / btn-secondary…)
  icon.svg         Favicon
  robots.ts        /robots.txt
  sitemap.ts       /sitemap.xml
components/        Header, Hero, Services, Method, Why, ContactForm, SectionLabel, Footer…
lib/site.ts        Contenus (services, étapes, atouts) et configuration
```

Les textes du site se modifient dans `lib/site.ts` et dans les composants.

## Développement

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # build de production
npm start          # sert le build
```

## Configuration

Copier `.env.example` en `.env.local` et renseigner :

- `NEXT_PUBLIC_SITE_URL` : URL publique du site (canonical, Open Graph, sitemap, robots).
- `NEXT_PUBLIC_CONTACT_EMAIL` : adresse qui reçoit les demandes du formulaire de contact.

## Déploiement

Déployable directement sur Vercel (import du dépôt, aucune configuration particulière), ou sur tout
hébergement Node.js via `npm run build && npm start`. Penser à définir les variables d'environnement
ci-dessus sur la plateforme d'hébergement.
