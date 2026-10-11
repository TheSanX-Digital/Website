# ThesanX Digital — site vitrine

Site statique (HTML / CSS / JavaScript, sans dépendance ni étape de build) présentant les services de ThesanX Digital :
création de sites web, maintenance, SEO, intégration d'IA, automatisation et hébergement.

## Structure

```
index.html        Page unique (hero, services, méthode, pourquoi nous, contact)
css/styles.css    Styles (responsive, thème sombre)
js/main.js        Menu mobile, animations, formulaire de contact
assets/           Favicon / logo
robots.txt
```

## Lancer en local

```bash
python3 -m http.server 8000
# puis ouvrir http://localhost:8000
```

## À configurer

- `js/main.js` : renseigner `CONTACT_EMAIL` (adresse qui reçoit les demandes du formulaire).
- `index.html` : remplacer `<link rel="canonical" href="/">` par l'URL définitive du site, et ajouter un `sitemap.xml` une fois le domaine connu.

## Déploiement

Le dossier peut être publié tel quel sur n'importe quel hébergement statique (GitHub Pages, Netlify, Vercel, serveur Nginx/Apache…).
