import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4 text-center">
      <p className="font-display text-7xl text-primary">404</p>
      <h1 className="mt-4 font-display text-2xl text-foreground">Diese Seite gibt es nicht</h1>
      <p className="mt-2 max-w-md text-sm text-muted-foreground">
        Die gesuchte Seite konnte nicht gefunden werden.
      </p>
      <Link
        to="/"
        className="mt-6 rounded-full border border-accent px-5 py-2 text-xs uppercase tracking-[0.2em] text-accent hover:bg-accent hover:text-accent-foreground"
      >
        Zur Startseite
      </Link>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4 text-center">
      <h1 className="font-display text-2xl text-foreground">Ein Fehler ist aufgetreten</h1>
      <p className="mt-2 max-w-md text-sm text-muted-foreground">
        Bitte versuchen Sie es erneut.
      </p>
      <div className="mt-6 flex gap-3">
        <button
          onClick={() => { router.invalidate(); reset(); }}
          className="rounded-full bg-primary px-5 py-2 text-xs uppercase tracking-[0.2em] text-primary-foreground"
        >
          Erneut versuchen
        </button>
        <a
          href="/"
          className="rounded-full border border-border px-5 py-2 text-xs uppercase tracking-[0.2em]"
        >
          Startseite
        </a>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Bei Bruno — Gaststätte in Köln Mülheim" },
      {
        name: "description",
        content:
          "Bei Bruno in Köln Mülheim: herzliche Gaststätte in der Bachstraße 20. Gutes Essen, ein gepflegtes Glas Wein und exzellente Google-Bewertungen.",
      },
      { property: "og:title", content: "Bei Bruno — Gaststätte in Köln Mülheim" },
      {
        property: "og:description",
        content:
          "Herzliche Gaststätte in der Bachstraße 20, 51063 Köln. Reservierung: 0221 6202167.",
      },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "de_DE" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=Inter:wght@300;400;500;600&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col">
        <SiteHeader />
        <main className="flex-1">
          <Outlet />
        </main>
        <SiteFooter />
      </div>
    </QueryClientProvider>
  );
}
