import { testimonials, testimonialsSummary, units } from "@/data/brand";

export type GoogleReview = {
  authorName: string;
  rating: number;
  text: string;
  relativeTimeDescription?: string;
  source: "Google";
};

export type GoogleReviewsData = {
  rating: number;
  totalRatings: number;
  placeUrl: string;
  reviews: GoogleReview[];
  isFallback: boolean;
};

export const fallbackGoogleReviews: GoogleReviewsData = {
  rating: testimonialsSummary.rating,
  totalRatings: testimonialsSummary.total,
  placeUrl: units[0].routeUrl,
  isFallback: true,
  reviews: testimonials.slice(0, 5).map((testimonial) => ({
    authorName: testimonial.name,
    rating: testimonial.rating,
    text: testimonial.text,
    source: testimonial.source,
  })),
};

type PlacesReview = {
  author_name?: string;
  rating?: number;
  text?: string;
  relative_time_description?: string;
};

type PlacesDetailsResponse = {
  status?: string;
  result?: {
    rating?: number;
    user_ratings_total?: number;
    url?: string;
    reviews?: PlacesReview[];
  };
};

export async function getGoogleReviews(): Promise<GoogleReviewsData> {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    return fallbackGoogleReviews;
  }

  try {
    const params = new URLSearchParams({
      place_id: placeId,
      fields: "rating,user_ratings_total,reviews,url",
      language: "pt-BR",
      key: apiKey,
    });

    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?${params}`,
      {
        next: { revalidate: 60 * 60 * 6 },
      },
    );

    if (!response.ok) return fallbackGoogleReviews;

    const data = (await response.json()) as PlacesDetailsResponse;
    if (data.status !== "OK" || !data.result) return fallbackGoogleReviews;

    const reviews = (data.result.reviews ?? [])
      .filter((review) => review.text)
      .slice(0, 5)
      .map((review) => ({
        authorName: review.author_name ?? "Cliente Google",
        rating: Math.max(1, Math.min(5, Math.round(review.rating ?? 5))),
        text: review.text ?? "",
        relativeTimeDescription: review.relative_time_description,
        source: "Google" as const,
      }));

    return {
      rating: data.result.rating ?? fallbackGoogleReviews.rating,
      totalRatings:
        data.result.user_ratings_total ?? fallbackGoogleReviews.totalRatings,
      placeUrl: data.result.url ?? fallbackGoogleReviews.placeUrl,
      reviews: reviews.length > 0 ? reviews : fallbackGoogleReviews.reviews,
      isFallback: reviews.length === 0,
    };
  } catch {
    return fallbackGoogleReviews;
  }
}
