import { createFileRoute } from "@tanstack/react-router";
import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { getReviews } from "@/lib/reviews.functions";

const reviewsQueryOptions = queryOptions({
  queryKey: ["google-reviews"],
  queryFn: () => getReviews(),
  staleTime: 30 * 60 * 1000,
});

export const Route = createFileRoute("/rezensionen")({
  head: () => ({
    meta: [
      { title: "Rezensionen — Bei Bruno Köln Mülheim" },
      {
        name: "description",
        content:
          "Was unsere Gäste sagen: aktuelle Google-Bewertungen für die Gaststätte Bei Bruno in Köln Mülheim.",
      },
      { property: "og:title", content: "Rezensionen — Bei Bruno" },
      {
        property: "og:description",
        content: "Aktuelle Google-Bewertungen unserer Gäste.",
      },
    ],
  }),
  loader: ({ context }) => context.queryClient.ensureQueryData(reviewsQueryOptions),
  component: RezensionenPage,
});

function Stars({ value }: { value: number }) {
  const full = Math.round(value);
  return (
    <span aria-label={`${value.toFixed(1)} von 5 Sternen`} className="text-accent">
      {"★".repeat(full)}
      <span className="text-accent/30">{"★".repeat(Math.max(0, 5 - full))}</span>
    </span>
  );
}

function RezensionenPage() {
  const { data } = useSuspenseQuery(reviewsQueryOptions);

  return (
    <>
      <section className="mx-auto max-w-3xl px-6 pt-24 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-accent">Google Rezensionen</p>
        <h1 className="mt-4 font-display text-5xl text-primary md:text-6xl">
          Was unsere Gäste sagen.
        </h1>
        <div className="gold-line mx-auto mt-8 w-24" />

        {data.rating !== null && (
          <div className="mt-10 flex flex-col items-center gap-2">
            <div className="font-display text-6xl text-primary">
              {data.rating.toFixed(1)}
            </div>
            <Stars value={data.rating} />
            {data.total !== null && (
              <p className="text-sm text-muted-foreground">
                basierend auf {data.total.toLocaleString("de-DE")} Google-Bewertungen
              </p>
            )}
          </div>
        )}

        {data.error && (
          <p className="mt-8 rounded-md border border-border bg-card px-4 py-3 text-sm text-muted-foreground">
            {data.error}
          </p>
        )}
      </section>

      <section className="mx-auto mt-16 max-w-5xl px-6 pb-24">
        {data.reviews.length === 0 && !data.error ? (
          <p className="text-center text-sm text-muted-foreground">
            Aktuell sind keine Rezensionen verfügbar.
          </p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2">
            {data.reviews.map((r, i) => (
              <article
                key={i}
                className="rounded-xl border border-border bg-card p-7 transition-shadow hover:shadow-md"
              >
                <div className="flex items-center gap-3">
                  {r.profilePhoto ? (
                    <img
                      src={r.profilePhoto}
                      alt=""
                      width={40}
                      height={40}
                      loading="lazy"
                      className="h-10 w-10 rounded-full object-cover"
                    />
                  ) : (
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm text-primary-foreground">
                      {r.author.slice(0, 1)}
                    </div>
                  )}
                  <div>
                    <p className="text-sm font-medium text-foreground">{r.author}</p>
                    <p className="text-xs text-muted-foreground">{r.relativeTime}</p>
                  </div>
                </div>
                <div className="mt-4">
                  <Stars value={r.rating} />
                </div>
                <p className="mt-4 whitespace-pre-line text-sm leading-relaxed text-foreground/85">
                  {r.text}
                </p>
              </article>
            ))}
          </div>
        )}

        <p className="mt-10 text-center text-xs text-muted-foreground">
          Rezensionen werden über die Google Places API geladen.
        </p>
      </section>
    </>
  );
}
