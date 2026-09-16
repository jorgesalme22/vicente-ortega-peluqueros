import { business, primaryLocation, telHref, whatsappHref } from "@/lib/business";
import { PhoneIcon, WhatsAppIcon, MapPinIcon } from "./icons";

export default function StickyMobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-background/95 backdrop-blur md:hidden">
      <div className="grid grid-cols-3 gap-px bg-line">
        <a
          href={telHref(primaryLocation.phoneIntl)}
          className="focus-ring flex flex-col items-center justify-center gap-1 bg-background py-3 text-xs font-semibold text-ink"
        >
          <PhoneIcon className="size-4.5 text-orange-dark" />
          Llamar
        </a>
        <a
          href={whatsappHref(business.whatsapp.phoneIntl, "Hola, quería pedir información/cita")}
          target="_blank"
          rel="noopener noreferrer"
          className="focus-ring flex flex-col items-center justify-center gap-1 bg-background py-3 text-xs font-semibold text-ink"
        >
          <WhatsAppIcon className="size-4.5 text-orange-dark" />
          WhatsApp
        </a>
        <a
          href={primaryLocation.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="focus-ring flex flex-col items-center justify-center gap-1 bg-background py-3 text-xs font-semibold text-ink"
        >
          <MapPinIcon className="size-4.5 text-orange-dark" />
          Cómo llegar
        </a>
      </div>
    </div>
  );
}
