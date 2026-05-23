import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: "Kontakt & Anfahrt — Bei Bruno Köln Mülheim" },
      {
        name: "description",
        content:
          "Bei Bruno, Bachstraße 20, 51063 Köln. Telefon 0221 6202167. Anfahrt und Karte für Köln Mülheim.",
      },
      { property: "og:title", content: "Kontakt — Bei Bruno" },
      {
        property: "og:description",
        content: "So erreichen Sie uns in der Bachstraße 20 in Köln Mülheim.",
      },
    ],
  }),
  component: KontaktPage,
});

function KontaktPage() {
  return (
    <>
      <section className="mx-auto max-w-3xl px-6 pt-24 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-accent">Kontakt</p>
        <h1 className="mt-4 font-display text-5xl text-primary md:text-6xl">
          So finden Sie uns.
        </h1>
        <div className="gold-line mx-auto mt-8 w-24" />
      </section>

      <section className="mx-auto mt-16 grid max-w-6xl gap-12 px-6 md:grid-cols-2">
        <div className="rounded-xl border border-border bg-card p-10">
          <h2 className="font-display text-2xl text-primary">Adresse</h2>
          <div className="gold-line mt-3 w-10" />
          <address className="mt-6 not-italic text-base leading-relaxed text-foreground">
            Bei Bruno<br />
            Bachstraße 20<br />
            51063 Köln · Mülheim
          </address>

          <h3 className="mt-10 text-xs uppercase tracking-[0.25em] text-accent">Telefon</h3>
          <a
            href="tel:+492216202167"
            className="mt-3 block font-display text-3xl text-primary hover:text-accent"
          >
            0221 6202167
          </a>

          <h3 className="mt-10 text-xs uppercase tracking-[0.25em] text-accent">Öffnungszeiten</h3>
          <dl className="mt-4 space-y-2 text-base text-foreground">
            {[
              ["Montag", "11:00–22:00"],
              ["Dienstag", "Geschlossen"],
              ["Mittwoch", "11:00–22:00"],
              ["Donnerstag", "11:00–22:00"],
              ["Freitag", "11:00–00:00"],
              ["Samstag", "11:00–00:00"],
              ["Sonntag", "11:00–22:00"],
            ].map(([day, hours]) => (
              <div key={day} className="flex justify-between border-b border-border/40 pb-2">
                <dt className={day === "Dienstag" ? "text-muted-foreground" : ""}>{day}</dt>
                <dd className={day === "Dienstag" ? "text-muted-foreground" : "font-medium"}>{hours}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-4 text-xs text-accent">
            An Feiertagen (z. B. Pfingstmontag) können die Öffnungszeiten abweichen.
          </p>

          <a
            href="tel:+492216202167"
            className="mt-8 inline-block rounded-full bg-primary px-7 py-3 text-xs uppercase tracking-[0.25em] text-primary-foreground hover:bg-primary/90"
          >
            Jetzt anrufen
          </a>
        </div>

        <div className="overflow-hidden rounded-xl border border-border">
          <iframe
            title="Karte zu Bei Bruno, Bachstraße 20, Köln"
            src="https://www.google.com/maps?q=Bachstra%C3%9Fe+20,+51063+K%C3%B6ln&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-full min-h-[420px] w-full"
          />
        </div>
      </section>

      <div className="h-24" />
    </>
  );
}
