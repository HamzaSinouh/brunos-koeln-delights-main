import { createServerFn } from "@tanstack/react-start";

type Review = {
  author: string;
  rating: number;
  text: string;
  relativeTime: string;
  profilePhoto?: string;
};

type ReviewsResponse = {
  rating: number | null;
  total: number | null;
  reviews: Review[];
  error: string | null;
};

// In-memory cache (per worker instance)
let cache: { data: ReviewsResponse; expiresAt: number } | null = null;
let cachedPlaceId: string | null = null;

const QUERY = "Bei Bruno Bachstraße 20 51063 Köln";
const GATEWAY_URL = "https://connector-gateway.lovable.dev/google_maps";

function gatewayHeaders(extra: Record<string, string> = {}) {
  const lovableKey = process.env.LOVABLE_API_KEY;
  const mapsKey = process.env.GOOGLE_MAPS_API_KEY;
  if (!lovableKey) throw new Error("LOVABLE_API_KEY is not configured");
  if (!mapsKey) throw new Error("GOOGLE_MAPS_API_KEY is not configured");
  return {
    Authorization: `Bearer ${lovableKey}`,
    "X-Connection-Api-Key": mapsKey,
    ...extra,
  };
}

async function resolvePlaceId(): Promise<string | null> {
  if (cachedPlaceId) return cachedPlaceId;
  try {
    const res = await fetch(`${GATEWAY_URL}/places/v1/places:searchText`, {
      method: "POST",
      headers: gatewayHeaders({
        "Content-Type": "application/json",
        "X-Goog-FieldMask": "places.id,places.displayName,places.formattedAddress",
      }),
      body: JSON.stringify({ textQuery: QUERY, languageCode: "de", regionCode: "DE" }),
    });
    if (!res.ok) {
      console.error("Places searchText failed", res.status, await res.text());
      return null;
    }
    const json = (await res.json()) as { places?: Array<{ id: string }> };
    const id = json.places?.[0]?.id ?? null;
    if (id) cachedPlaceId = id;
    return id;
  } catch (err) {
    console.error("resolvePlaceId error", err);
    return null;
  }
}

export const getReviews = createServerFn({ method: "GET" }).handler(
  async (): Promise<ReviewsResponse> => {
    if (cache && cache.expiresAt > Date.now()) return cache.data;

    const placeId = await resolvePlaceId();
    if (!placeId) {
      return {
        rating: null,
        total: null,
        reviews: [],
        error: "Restaurant konnte bei Google nicht gefunden werden.",
      };
    }

    try {
      const res = await fetch(
        `${GATEWAY_URL}/places/v1/places/${placeId}?languageCode=de&regionCode=DE`,
        {
          headers: gatewayHeaders({
            "X-Goog-FieldMask": "rating,userRatingCount,reviews",
          }),
        },
      );
      if (!res.ok) {
        const body = await res.text();
        console.error("Places details failed", res.status, body);
        return {
          rating: null,
          total: null,
          reviews: [],
          error: `Google API Fehler (${res.status}).`,
        };
      }
      const json = (await res.json()) as {
        rating?: number;
        userRatingCount?: number;
        reviews?: Array<{
          rating: number;
          text?: { text?: string };
          originalText?: { text?: string };
          relativePublishTimeDescription?: string;
          authorAttribution?: { displayName?: string; photoUri?: string };
        }>;
      };

      const reviews: Review[] = (json.reviews ?? []).map((r) => ({
        author: r.authorAttribution?.displayName ?? "Gast",
        rating: r.rating ?? 0,
        text: r.text?.text ?? r.originalText?.text ?? "",
        relativeTime: r.relativePublishTimeDescription ?? "",
        profilePhoto: r.authorAttribution?.photoUri,
      }));

      const data: ReviewsResponse = {
        rating: json.rating ?? null,
        total: json.userRatingCount ?? null,
        reviews,
        error: null,
      };
      cache = { data, expiresAt: Date.now() + 60 * 60 * 1000 };
      return data;
    } catch (err) {
      console.error("getReviews error", err);
      return {
        rating: null,
        total: null,
        reviews: [],
        error: "Rezensionen konnten nicht geladen werden.",
      };
    }
  },
);
