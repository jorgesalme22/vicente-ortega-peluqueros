import { primaryLocation, telHref } from "@/lib/business";
import { PhoneIcon, MapPinIcon } from "./icons";

export default function StickyMobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-background/95 backdrop-blur md:hidden">
      <div className="grid grid-cols-2 gap-px bg-line">
        <a
          href={telHref(primaryLocation.phoneIntl)}
          className="focus-ring flex items-center justify-center gap-2 bg-background py-3.5 text-sm font-semibold text-ink"
        >
          <PhoneIcon className="size-4.5 text-copper-dark" />
          Llamar
        </a>
        <a
          href={primaryLocation.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="focus-ring flex items-center justify-center gap-2 bg-background py-3.5 text-sm font-semibold text-ink"
        >
          <MapPinIcon className="size-4.5 text-copper-dark" />
          Cómo llegar
        </a>
      </div>
    </div>
  );
}
