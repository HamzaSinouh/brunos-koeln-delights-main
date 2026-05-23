## Überblick

Eine elegante, mehrseitige Website für die Gaststätte **Bei Bruno** in Köln-Mülheim. Visueller Stil: warmes Italienisch (dunkles Holz, Gold, Creme). Google-Rezensionen werden live über die Google Places API geladen.

## Seitenstruktur (TanStack Start Routes)

```
src/routes/
  __root.tsx              -> gemeinsames Layout (Header, Footer)
  index.tsx               -> / Startseite (Hero, Highlights, Teaser)
  speisekarte.tsx         -> /speisekarte (kommt, sobald du die Karte schickst)
  ueber-uns.tsx           -> /ueber-uns (Bruno, Geschichte, Ambiente)
  rezensionen.tsx         -> /rezensionen (Live Google Reviews)
  kontakt.tsx             -> /kontakt (Adresse, Telefon, Öffnungszeiten, Karte)
  api/reviews.ts          -> Server-Route, holt Reviews aus Google Places API
```

Jede Route bekommt eigene `head()`-Metadaten (Title, Description, OG-Tags) für SEO und Social Sharing.

## Design (Warm Italienisch)

- **Farben** (oklch in `src/styles.css`):
  - Background: warmes Creme `#f5ede0`
  - Foreground/Text: dunkles Holz `#1a1410`
  - Primary: tiefes Burgunder/Braun `#3d1f15`
  - Accent: Gold `#c9a04a`
- **Typografie**: Display-Serif für Headlines (z. B. Cormorant Garamond / Playfair), klare Sans-Serif für Body (z. B. Inter)
- **Komponenten**: großzügige Abstände, dezente Goldlinien als Trenner, Hero mit Foodfotografie, sanfte Fade-in-Animationen

## Inhalte

- **Hero**: Restaurantname, Tagline („Gaststätte in Köln-Mülheim"), CTAs „Tisch reservieren" (tel:) und „Speisekarte"
- **Highlights** auf der Startseite: 3 Karten (Küche, Atmosphäre, Lage) + Teaser zu Rezensionen
- **Kontaktdaten** (Footer + Kontaktseite):
  - Bachstraße 20, 51063 Köln
  - Tel: 0221 6202167 (klickbar als `tel:`)
  - Eingebettete Google Map (iframe, kein API-Key nötig)
  - Öffnungszeiten (Platzhalter, von dir bestätigen)
- **Speisekarte**: Platzhalter-Seite bis du die Karte schickst
- **Über uns**: kurzer Platzhaltertext über die Gaststätte
- **Rezensionen**: Live aus Google Places API (siehe unten)

## Google Rezensionen (Live)

Realisierung über eine TanStack-Start-Server-Route, damit der API-Key nie im Browser landet:

1. Wir benötigen einen **Google Places API Key** mit aktivierter „Places API (New)". Den frage ich gleich über das Secret-Tool ab als `GOOGLE_PLACES_API_KEY`.
2. Außerdem brauchen wir die **Place ID** des Restaurants (finde ich automatisch über Text-Search nach „Bei Bruno Köln Mülheim" beim ersten Request und cache sie).
3. Server-Route `src/routes/api/reviews.ts` ruft `places.googleapis.com/v1/places/{placeId}?fields=rating,userRatingCount,reviews` ab, mit kurzem In-Memory-Cache (z. B. 1 Stunde), und liefert nur Name, Bewertung, Text, Sterne, relative Zeit ans Frontend (kein PII außer Anzeigename, den Google selbst ausliefert).
4. Frontend (`/rezensionen`) lädt via TanStack Query (`ensureQueryData` im Loader + `useSuspenseQuery` in der Komponente), zeigt Durchschnittsbewertung, Anzahl Bewertungen und die letzten 5 Reviews als Karten. Auf der Startseite kommt ein kleiner Teaser mit Sternebewertung.

Hinweis zur Google-API: Standardmäßig liefert Google nur 5 Reviews pro Place — das ist die offizielle API-Grenze, mehr ist über die Places API nicht möglich.

## Was ich von dir brauche

1. **Google Places API Key** — ich öffne nach deiner Freigabe das Secret-Formular. Anleitung zum Erstellen:
   - Google Cloud Console → neues Projekt → „Places API (New)" aktivieren → „APIs & Dienste" → „Anmeldedaten" → API-Key erstellen → Key auf „Places API" beschränken.
2. **Speisekarte** (PDF, Bild oder Text) — sobald du sie schickst, baue ich `/speisekarte` aus.
3. **Öffnungszeiten** und ggf. **Ruhetag** — sonst setze ich Platzhalter.
4. Optional: 2–3 **Fotos vom Restaurant/Essen**. Wenn keine vorhanden, generiere ich passende stimmungsvolle Bilder.

## Technische Details

- Framework: TanStack Start (bereits eingerichtet), TanStack Query für Daten-Fetching
- Design-Tokens werden in `src/styles.css` als oklch-Werte definiert
- Google-Schriften via `<link>` im `__root.tsx` head
- Map-Einbettung: einfaches Google Maps `<iframe>` (kein API-Key)
- Google Reviews: Server-Route + Caching, Daten via Query in Komponente

## Reihenfolge der Umsetzung

1. Design-Tokens & Schriften setzen
2. Header/Footer + Routenstruktur anlegen
3. Startseite mit Hero und Teasern
4. Über-uns, Kontakt (inkl. Map)
5. Server-Route für Google Reviews + Rezensionsseite
6. Speisekarten-Platzhalter (volle Umsetzung nach deinem Upload)
