import { reviews as reviewData, locations } from "@/lib/business";
import { StarIcon } from "./icons";

export const reviews = reviewData;

export function Stars() {
  return (
    <div className="flex items-center gap-0.5 text-copper-dark">
      {Array.from({ length: 5 }).map((_, i) => (
        <StarIcon key={i} className="size-4" />
      ))}
    </div>
  );
}

export function ReviewCard({ review }: { review: (typeof reviewData)[number] }) {
  const location = locations.find((l) => l.id === review.locationId);
  return (
    <figure className="card flex flex-col p-6">
      <Stars />
      <blockquote className="mt-4 flex-1 text-[0.95rem] leading-relaxed text-foreground">
        &ldquo;{review.text}&rdquo;
      </blockquote>
      <figcaption className="mt-5 flex items-center justify-between text-sm">
        <span className="font-semibold">{review.author}</span>
        <span className="text-foreground-soft">{review.time}</span>
      </figcaption>
      {location && (
        <p className="mt-1 text-xs text-foreground-soft">
          {location.label} · {review.source}
        </p>
      )}
    </figure>
  );
}
