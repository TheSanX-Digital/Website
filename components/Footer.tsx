export default function Footer() {
  return (
    <footer className="border-t border-line py-7 text-sm text-muted">
      <div className="wrap flex flex-wrap justify-between gap-2.5">
        <p>
          <strong className="text-fg">ThesanX Digital</strong> — Sites web, SEO, IA, automatisation &amp;
          hébergement.
        </p>
        <p>&copy; {new Date().getFullYear()} ThesanX Digital. Tous droits réservés.</p>
      </div>
    </footer>
  );
}
