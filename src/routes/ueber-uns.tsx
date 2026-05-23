import { createFileRoute } from "@tanstack/react-router";
import interiorImg from "@/assets/interior.jpg";

export const Route = createFileRoute("/ueber-uns")({
  head: () => ({
    meta: [
      { title: "Über uns — Bei Bruno Köln Mülheim" },
      {
        name: "description",
        content:
          "Lernen Sie Bei Bruno kennen — die Gaststätte in Köln Mülheim, in der Gastfreundschaft groß geschrieben wird.",
      },
      { property: "og:title", content: "Über uns — Bei Bruno" },
      { property: "og:image", content: interiorImg },
    ],
  }),
  component: UeberUnsPage,
});

function UeberUnsPage() {
  return (
    <>
      <section className="mx-auto max-w-3xl px-6 pt-24 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-accent">Über uns</p>
        <h1 className="mt-4 font-display text-5xl text-primary md:text-6xl">
          Bei Bruno.
        </h1>
        <div className="gold-line mx-auto mt-8 w-24" />
        <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground">
          Eine Gaststätte mitten in Köln Mülheim, in der Gäste seit jeher mehr
          finden als nur ein Essen: einen Ort, an dem man willkommen ist, an
          dem man sich Zeit nimmt und an dem man gern wiederkommt.
        </p>
      </section>

      <section className="mx-auto mt-20 max-w-6xl px-6">
        <img
          src={interiorImg}
          alt="Bei Bruno Innenraum"
          loading="lazy"
          width={1400}
          height={1000}
          className="aspect-[16/9] w-full rounded-lg object-cover"
        />
      </section>

      <section className="mx-auto grid max-w-5xl gap-12 px-6 py-24 md:grid-cols-2">
        <div>
          <h2 className="font-display text-3xl text-primary">Unsere Idee</h2>
          <div className="gold-line mt-4 w-12" />
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
            Bei uns geht es nicht um große Inszenierung, sondern um das, was
            zählt: gutes Essen, freundlicher Service und ein Raum, in dem man
            sich wohlfühlt. Eine echte Gaststätte eben — bodenständig,
            herzlich und mit der Liebe zum Handwerk.
          </p>
        </div>
        <div>
          <h2 className="font-display text-3xl text-primary">Unsere Gäste</h2>
          <div className="gold-line mt-4 w-12" />
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
            Stammgäste aus dem Veedel, Familien, Kollegen nach Feierabend,
            Geburtstagsrunden — bei Bruno trifft sich Köln. Die zahlreichen
            positiven Bewertungen auf Google sprechen für sich; lesen Sie
            gern selbst nach.
          </p>
        </div>
      </section>
    </>
  );
}
