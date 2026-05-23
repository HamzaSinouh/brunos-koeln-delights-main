import { createFileRoute } from "@tanstack/react-router";

type Item = { name: string; price: string; note?: string };
type Section = { title: string; items: Item[] };

const sections: Section[] = [
  {
    title: "Suppen",
    items: [
      { name: "Kraftbrühe mit Ei und Brot", price: "3,00 €" },
      { name: "Tomatencremesuppe", price: "3,00 €" },
    ],
  },
  {
    title: "Eierspeisen",
    items: [
      { name: "Strammer Max mit gemischtem Salat", price: "6,50 €" },
      { name: "3 Spiegeleier oder Rührei mit Bratkartoffeln und gemischtem Salat", price: "8,50 €" },
      { name: "Bauernomelette mit gemischtem Salat", price: "8,50 €" },
    ],
  },
  {
    title: "Vegetarisch",
    items: [
      { name: "Champignonomelette mit Pommes und gemischtem Salat", price: "8,50 €" },
    ],
  },
  {
    title: "Fischgerichte",
    items: [
      { name: "Gemischte Salatplatte mit Thunfisch, Oliven, Zwiebeln und Brot", price: "8,50 €" },
      { name: "Omelette mit Thunfisch, Pommes und Salat", price: "8,50 €" },
      { name: "Seelachsfilet natur mit Salzkartoffeln und Salat", price: "14,50 €" },
    ],
  },
  {
    title: "Fleischgerichte",
    items: [
      { name: 'Schnitzel „Wiener Art" mit Bratkartoffeln und Salat', price: "11,50 €" },
      { name: "Jägerschnitzel mit Bratkartoffeln und Salat", price: "13,50 €" },
      { name: "Madagaskar Schnitzel mit Bratkartoffeln und Salat", price: "13,50 €" },
      { name: "Cordon bleu mit Pommes und Salat", price: "13,50 €" },
      { name: "Rumpsteak mit Zwiebeln, Bratkartoffeln und Salat", price: "23,50 €" },
      { name: "Pfeffersteak mit Bratkartoffeln und Salat", price: "23,50 €" },
      { name: "Lustiger Bosniak mit Pommes und Salat", price: "23,50 €" },
    ],
  },
  {
    title: "Kleine Gerichte & Snacks",
    items: [
      { name: "Bratwurst mit Toast", price: "3,00 €" },
      { name: "Sandwich-Toast mit Käse und Schinken", price: "3,00 €" },
      { name: "Pommes mit Ketchup oder Mayonnaise", price: "3,50 €" },
      { name: "Gebackener Camembert mit Pommes und Preiselbeeren", price: "6,50 €" },
      { name: "Currywurst mit Pommes und Mayonnaise", price: "6,50 €" },
      { name: "Kotelett mit Pommes und Salat", price: "9,50 €" },
    ],
  },
  {
    title: "Dessert",
    items: [
      { name: "Vanilleeis mit Eierlikör und Sahne", price: "4,00 €" },
      { name: "Vanilleeis mit Schokosoße und Sahne", price: "4,00 €" },
      { name: "Vanilleeis mit Himbeersoße und Sahne", price: "4,00 €" },
      { name: "Vanilleeis mit Erdbeersoße und Sahne", price: "4,00 €" },
    ],
  },
];

type DrinkSection = { title: string; items: { name: string; size?: string; price: string }[] };

const drinks: DrinkSection[] = [
  {
    title: "Biere",
    items: [
      { name: "Früh Kölsch", size: "0,2 l", price: "1,80 €" },
      { name: "Früh Kölsch mit Schuss", size: "0,2 l", price: "1,80 €" },
      { name: "Malzbier", size: "0,2 l", price: "1,80 €" },
      { name: "Paulaner Weizen (naturtrüb)", size: "0,5 l", price: "4,00 €" },
      { name: "Erdinger Weizen (alkoholfrei)", size: "0,5 l", price: "4,00 €" },
      { name: "Früh Sport (alkoholfrei)", size: "0,33 l", price: "3,00 €" },
    ],
  },
  {
    title: "Alkoholfreie Getränke",
    items: [
      { name: "Coca Cola", size: "0,2 l", price: "2,00 €" },
      { name: "Fanta", size: "0,2 l", price: "2,00 €" },
      { name: "Sprite", size: "0,2 l", price: "2,00 €" },
      { name: "Mineralwasser", size: "0,2 l", price: "2,00 €" },
      { name: "Apfelschorle", size: "0,2 l", price: "2,00 €" },
      { name: "Apfelsaft", size: "0,2 l", price: "2,00 €" },
      { name: "Stilles Wasser", size: "0,2 l", price: "1,50 €" },
    ],
  },
  {
    title: "Long Drinks",
    items: [
      { name: "Bacardi Cola", size: "0,2 l", price: "3,80 €" },
      { name: "Korn Cola", size: "0,2 l", price: "2,80 €" },
      { name: "Aperol Spritz groß", size: "0,75 l", price: "6,50 €" },
    ],
  },
  {
    title: "Weine",
    items: [
      { name: "Weißwein (trocken)", size: "0,2 l", price: "3,20 €" },
      { name: "Piccolo", size: "0,2 l", price: "4,00 €" },
      { name: "Flasche Sekt", size: "0,75 l", price: "15,50 €" },
    ],
  },
  {
    title: "Warme Getränke",
    items: [
      { name: "Kaffee", price: "2,00 €" },
      { name: "Tee (verschiedene Sorten)", price: "2,00 €" },
    ],
  },
  {
    title: "Whiskey",
    items: [
      { name: "Ballantine's", size: "2 cl", price: "3,80 €" },
      { name: "Jim Beam", size: "2 cl", price: "3,80 €" },
      { name: "Jack Daniel's", size: "2 cl", price: "4,80 €" },
    ],
  },
  {
    title: "Spirituosen",
    items: [
      { name: "Korn", size: "2 cl", price: "1,80 €" },
      { name: "Obstler", size: "2 cl", price: "2,20 €" },
      { name: "Ouzo", size: "2 cl", price: "2,20 €" },
      { name: "Wodka", size: "2 cl", price: "2,20 €" },
      { name: "Malteser", size: "2 cl", price: "2,20 €" },
      { name: "Sliwowitz", size: "2 cl", price: "2,20 €" },
    ],
  },
  {
    title: "Liköre",
    items: [
      { name: "Ramazotti", size: "2 cl", price: "2,20 €" },
      { name: "Sambuca", size: "2 cl", price: "2,20 €" },
      { name: "Fernet Branca", size: "2 cl", price: "2,20 €" },
      { name: "Hasselnusslikör", size: "2 cl", price: "2,20 €" },
      { name: "Eierlikör im Schoko-Waffelbecher", size: "2 cl", price: "2,20 €" },
      { name: "Juliscka", size: "2 cl", price: "2,20 €" },
    ],
  },
];

export const Route = createFileRoute("/speisekarte")({
  head: () => ({
    meta: [
      { title: "Speisekarte — Bei Bruno Köln Mülheim" },
      {
        name: "description",
        content:
          "Die Speisekarte der Gaststätte Bei Bruno in Köln Mülheim: Schnitzel, Eierspeisen, Fisch, Snacks und Getränke. Bachstraße 20, 0221 6202167.",
      },
      { property: "og:title", content: "Speisekarte — Bei Bruno" },
      {
        property: "og:description",
        content: "Unsere komplette Speisekarte — Klassiker, Snacks und Getränke.",
      },
    ],
  }),
  component: SpeisekartePage,
});

function MenuList({ section }: { section: Section }) {
  return (
    <div className="break-inside-avoid">
      <h3 className="font-display text-2xl text-primary">{section.title}</h3>
      <div className="gold-line mt-3 w-10" />
      <ul className="mt-6 space-y-5">
        {section.items.map((item, i) => (
          <li key={i} className="flex items-baseline gap-4">
            <span className="flex-1 text-sm leading-snug text-foreground">{item.name}</span>
            <span className="hidden flex-1 border-b border-dotted border-border/70 sm:block" />
            <span className="whitespace-nowrap font-display text-base text-primary">
              {item.price}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function DrinksList({ section }: { section: DrinkSection }) {
  return (
    <div className="break-inside-avoid">
      <h3 className="font-display text-2xl text-primary">{section.title}</h3>
      <div className="gold-line mt-3 w-10" />
      <ul className="mt-6 space-y-4">
        {section.items.map((item, i) => (
          <li key={i} className="flex items-baseline gap-3 text-sm">
            <span className="flex-1 text-foreground">{item.name}</span>
            {item.size && (
              <span className="whitespace-nowrap text-xs text-muted-foreground">{item.size}</span>
            )}
            <span className="hidden flex-1 border-b border-dotted border-border/70 sm:block" />
            <span className="whitespace-nowrap font-display text-base text-primary">
              {item.price}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SpeisekartePage() {
  return (
    <>
      <section className="mx-auto max-w-3xl px-6 pt-24 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-accent">Speisekarte</p>
        <h1 className="mt-4 font-display text-5xl text-primary md:text-6xl">
          Unsere Karte.
        </h1>
        <div className="gold-line mx-auto mt-8 w-24" />
        <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-muted-foreground">
          Klassiker mit Liebe gemacht — von der herzhaften Suppe bis zum
          Pfeffersteak. Bei Fragen zu Allergenen sprechen Sie uns gern an.
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="grid gap-16 md:grid-cols-2">
          {sections.map((s) => (
            <MenuList key={s.title} section={s} />
          ))}
        </div>
      </section>

      <section className="border-y border-border/60 bg-card">
        <div className="mx-auto max-w-5xl px-6 py-20 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-accent">Getränkekarte</p>
          <h2 className="mt-4 font-display text-4xl text-primary md:text-5xl">
            Zum Anstoßen.
          </h2>
          <div className="gold-line mx-auto mt-6 w-20" />
        </div>
        <div className="mx-auto max-w-5xl px-6 pb-24">
          <div className="grid gap-16 md:grid-cols-2">
            {drinks.map((d) => (
              <DrinksList key={d.title} section={d} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-20 text-center">
        <p className="text-xs uppercase tracking-[0.25em] text-accent">Reservierung</p>
        <a
          href="tel:+492216202167"
          className="mt-4 block font-display text-4xl text-primary hover:text-accent"
        >
          0221 6202167
        </a>
        <p className="mt-3 text-sm text-muted-foreground">
          Bachstraße 20 · 51063 Köln · Mülheim
        </p>
        <p className="mt-8 text-xs text-muted-foreground">
          Die Inhaltsstoffe und Allergene können beim Wirt eingesehen werden.
          Preise inkl. gesetzlicher MwSt.
        </p>
      </section>
    </>
  );
}
