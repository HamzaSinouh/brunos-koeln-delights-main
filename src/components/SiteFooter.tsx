import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-3">
        <div>
          <p className="font-display text-3xl tracking-wide">Bei Bruno</p>
          <p className="mt-2 text-xs uppercase tracking-[0.25em] text-accent">
            Gaststätte · Köln Mülheim
          </p>
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-primary-foreground/75">
            Eine herzliche Adresse für gutes Essen, ein gepflegtes Glas Wein und
            entspannte Stunden im Kölner Osten.
          </p>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-[0.25em] text-accent">Besuch</h4>
          <address className="mt-4 not-italic text-sm leading-relaxed text-primary-foreground/85">
            Bachstraße 20<br />
            51063 Köln<br />
            <a href="tel:+492216202167" className="mt-2 inline-block hover:text-accent">
              0221 6202167
            </a>
          </address>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-[0.25em] text-accent">Seiten</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/speisekarte" className="hover:text-accent">Speisekarte</Link></li>
            <li><Link to="/ueber-uns" className="hover:text-accent">Über uns</Link></li>
            <li><Link to="/rezensionen" className="hover:text-accent">Rezensionen</Link></li>
            <li><Link to="/kontakt" className="hover:text-accent">Kontakt &amp; Anfahrt</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 py-6 text-xs text-primary-foreground/60 md:flex-row">
          <p>© {new Date().getFullYear()} Bei Bruno · Köln Mülheim</p>
          <p>Bachstraße 20 · 51063 Köln</p>
        </div>
      </div>
    </footer>
  );
}
