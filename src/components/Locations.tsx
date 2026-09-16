import { locations, fullAddress, telHref, type Location } from "@/lib/business";
import { PhoneIcon, MapPinIcon, ClockIcon, ArrowRightIcon, StarIcon } from "./icons";

function LocationCard({ location }: { location: Location }) {
  return (
    <div className="card overflow-hidden">
      <div className="aspect-[16/10] w-full">
        <iframe
          title={`Mapa de ${location.label}`}
          src={location.googleMapsEmbedSrc}
          loading="lazy"
          className="h-full w-full border-0"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <div className="p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-serif text-xl font-semibold">{location.label}</h3>
          {location.isPrimary && (
            <span className="shrink-0 rounded-full bg-copper-tint px-2.5 py-1 text-xs font-semibold text-copper-dark">
              Principal
            </span>
          )}
        </div>

        <p className="mt-3 flex items-start gap-2 text-sm text-foreground-soft">
          <MapPinIcon className="mt-0.5 size-4 shrink-0" />
          <span>
            {fullAddress(location)}
            {location.buildingNote ? ` · ${location.buildingNote}` : ""}
          </span>
        </p>

        <a
          href={telHref(location.phoneIntl)}
          className="focus-ring mt-2 flex items-center gap-2 rounded-md text-sm font-medium text-ink hover:text-copper-dark"
        >
          <PhoneIcon className="size-4 shrink-0" />
          {location.phoneDisplay}
        </a>

        <div className="mt-4 flex items-center gap-2 text-sm text-foreground-soft">
          <StarIcon className="size-4 text-copper-dark" />
          {location.rating.value}/5 · {location.rating.count} opiniones en Google
        </div>

        <details className="group mt-4">
          <summary className="focus-ring flex cursor-pointer list-none items-center gap-2 rounded-md text-sm font-medium text-ink">
            <ClockIcon className="size-4" />
            Ver horario
          </summary>
          <ul className="mt-3 space-y-1 text-sm text-foreground-soft">
            {location.hours.map((h) => (
              <li key={h.day} className="flex justify-between gap-4">
                <span>{h.day}</span>
                <span>{h.hours}</span>
              </li>
            ))}
          </ul>
          <p className="mt-2 text-xs text-foreground-soft/80">
            Fuente: {location.hoursSource}
          </p>
        </details>

        <a
          href={location.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-secondary focus-ring mt-5 w-full"
        >
          Cómo llegar
          <ArrowRightIcon className="size-4" />
        </a>
      </div>
    </div>
  );
}

export default function Locations() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {locations.map((location) => (
        <LocationCard key={location.id} location={location} />
      ))}
    </div>
  );
}
