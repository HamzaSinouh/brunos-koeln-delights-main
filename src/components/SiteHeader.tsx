import { Link } from "@tanstack/react-router";
import { useState } from "react";

const nav = [
  { to: "/", label: "Start" },
  { to: "/speisekarte", label: "Speisekarte" },
  { to: "/ueber-uns", label: "Über uns" },
  { to: "/rezensionen", label: "Rezensionen" },
  { to: "/kontakt", label: "Kontakt" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="group flex flex-col leading-none" onClick={() => setOpen(false)}>
          <span className="font-display text-2xl tracking-wide text-primary">Bei Bruno</span>
          <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
            Köln · Mülheim
          </span>
        </Link>
        <nav className="hidden gap-8 md:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              className="text-sm tracking-wide text-foreground/80 transition-colors hover:text-accent"
              activeProps={{ className: "text-accent" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <a
          href="tel:+4922162021 67"
          className="hidden rounded-full border border-accent px-4 py-2 text-xs uppercase tracking-[0.2em] text-accent transition-colors hover:bg-accent hover:text-accent-foreground md:inline-block"
        >
          0221 6202167
        </a>
        <button
          type="button"
          aria-label="Menü"
          className="md:hidden"
          onClick={() => setOpen((o) => !o)}
        >
          <span className="block h-0.5 w-6 bg-foreground" />
          <span className="mt-1.5 block h-0.5 w-6 bg-foreground" />
          <span className="mt-1.5 block h-0.5 w-6 bg-foreground" />
        </button>
      </div>
      {open && (
        <div className="border-t border-border/60 bg-background md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col px-6 py-4">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="py-3 text-sm tracking-wide text-foreground/80"
                activeProps={{ className: "text-accent" }}
              >
                {n.label}
              </Link>
            ))}
            <a
              href="tel:+492216202167"
              className="mt-2 rounded-full border border-accent px-4 py-2 text-center text-xs uppercase tracking-[0.2em] text-accent"
            >
              0221 6202167
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
