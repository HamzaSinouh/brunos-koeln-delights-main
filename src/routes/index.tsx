import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-restaurant.jpg";
import dishImg from "@/assets/dish.jpg";
import interiorImg from "@/assets/interior.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bei Bruno — Gaststätte in Köln Mülheim" },
      {
        name: "description",
        content:
          "Bei Bruno: gemütliche Gaststätte in Köln Mülheim. Bachstraße 20, Reservierung unter 0221 6202167.",
      },
      { property: "og:title", content: "Bei Bruno — Gaststätte in Köln Mülheim" },
      { property: "og:image", content: heroImg },
      { name: "twitter:image", content: heroImg },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate flex min-h-[88vh] items-center overflow-hidden">
        <img
          src={heroImg}
          alt="Warmes Ambiente bei Bruno"
          width={1920}
          height={1280}
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/55 via-black/40 to-black/70" />
        <div className="mx-auto w-full max-w-6xl px-6 text-cream">
          <p className="fade-up text-xs uppercase tracking-[0.4em] text-accent">
            Köln · Mülheim · seit jeher
          </p>
          <h1 className="fade-up mt-6 max-w-3xl font-display text-5xl leading-[1.05] text-cream md:text-7xl">
            Eine Gaststätte,<br />
            wie man sie sich wünscht.
          </h1>
          <p className="fade-up mt-6 max-w-xl text-base leading-relaxed text-cream/85 md:text-lg">
            Herzlich, ehrlich und mit Liebe zum Detail. Bei Bruno servieren wir
            gutes Essen in entspannter Atmosphäre — direkt in der Bachstraße,
            mitten in Mülheim.
          </p>
          <div className="fade-up mt-10 flex flex-wrap gap-3">
            <Link
              to="/kontakt"
              className="rounded-full bg-accent px-7 py-3 text-xs uppercase tracking-[0.25em] text-accent-foreground transition-transform hover:scale-[1.02]"
            >
              Tisch reservieren
            </Link>
            <Link
              to="/speisekarte"
              className="rounded-full border border-cream/40 px-7 py-3 text-xs uppercase tracking-[0.25em] text-cream hover:border-accent hover:text-accent"
            >
              Speisekarte ansehen
            </Link>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="mx-auto max-w-4xl px-6 py-24 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-accent">Willkommen</p>
        <h2 className="mt-4 font-display text-4xl text-primary md:text-5xl">
          Schön, dass Sie da sind.
        </h2>
        <div className="gold-line mx-auto mt-8 w-24" />
        <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground">
          Bei Bruno ist mehr als ein Restaurant — es ist ein Treffpunkt für
          Nachbarn, Freunde und Genießer. Bei uns finden Sie ein offenes Ohr,
          ein gutes Glas und Gerichte, die schmecken wie früher und doch
          überraschen.
        </p>
      </section>

      {/* Highlights */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="grid gap-10 md:grid-cols-3">
          {[
            {
              title: "Ehrliche Küche",
              text: "Frisch zubereitete Klassiker und Saisonales — aus guten Zutaten, mit Sorgfalt gemacht.",
            },
            {
              title: "Warme Atmosphäre",
              text: "Dunkles Holz, sanftes Licht, freundlicher Service — der perfekte Ort zum Verweilen.",
            },
            {
              title: "Mitten in Mülheim",
              text: "Bachstraße 20, gut erreichbar und gern besucht von Stammgästen und Nachbarn.",
            },
          ].map((h) => (
            <div
              key={h.title}
              className="rounded-xl border border-border bg-card p-8 transition-shadow hover:shadow-md"
            >
              <h3 className="font-display text-2xl text-primary">{h.title}</h3>
              <div className="gold-line mt-4 w-12" />
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{h.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Showcase */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-24 md:grid-cols-2">
          <img
            src={dishImg}
            alt="Hausgemachte Pasta bei Bruno"
            loading="lazy"
            width={1200}
            height={1500}
            className="aspect-[4/5] w-full rounded-lg object-cover"
          />
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-accent">Aus der Küche</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl">
              Geschmack, der bleibt.
            </h2>
            <div className="gold-line mt-6 w-16" />
            <p className="mt-6 text-base leading-relaxed text-primary-foreground/80">
              Ob Klassiker für den schnellen Hunger oder das ausgedehnte
              Abendessen mit Freunden — bei Bruno bekommen Sie ehrliches Essen,
              auf das Sie sich verlassen können.
            </p>
            <Link
              to="/speisekarte"
              className="mt-8 inline-block rounded-full border border-accent px-7 py-3 text-xs uppercase tracking-[0.25em] text-accent hover:bg-accent hover:text-accent-foreground"
            >
              Zur Speisekarte
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews teaser */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-accent">Gäste über uns</p>
            <h2 className="mt-4 font-display text-4xl text-primary md:text-5xl">
              Was unsere Gäste sagen.
            </h2>
            <div className="gold-line mt-6 w-16" />
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
              Über die Jahre haben wir viele wunderbare Rückmeldungen
              bekommen — sehen Sie selbst, was Gäste auf Google berichten.
            </p>
            <Link
              to="/rezensionen"
              className="mt-8 inline-block rounded-full bg-primary px-7 py-3 text-xs uppercase tracking-[0.25em] text-primary-foreground hover:bg-primary/90"
            >
              Rezensionen lesen
            </Link>
          </div>
          <img
            src={interiorImg}
            alt="Innenraum bei Bruno"
            loading="lazy"
            width={1400}
            height={1000}
            className="aspect-[7/5] w-full rounded-lg object-cover"
          />
        </div>
      </section>
    </>
  );
}
