import Link from "next/link";
import { business, locations, telHref, fullAddress } from "@/lib/business";
import { PhoneIcon, MapPinIcon, ScissorsIcon } from "./icons";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-ink text-[#efe8df]">
      <div className="container-x section-pad !py-14 grid gap-10 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <Link href="/" className="focus-ring flex items-center gap-2.5 rounded-md">
            <ScissorsIcon className="size-6 text-copper" />
            <span className="font-serif text-lg font-semibold">{business.name}</span>
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-[#c9c0b3]">
            Dos salones en Alcalá de Henares. {business.legalName}, de alta desde{" "}
            {business.registeredSince}.
          </p>
          <p className="mt-6 text-xs text-[#8f8778]">
            Aviso: este sitio se ha construido a partir de información pública
            verificada. Consulta{" "}
            <Link href="/aviso-legal" className="underline hover:text-copper">
              el aviso legal
            </Link>{" "}
            para más detalle.
          </p>
        </div>

        {locations.map((loc) => (
          <div key={loc.id}>
            <h3 className="text-sm font-semibold tracking-wide text-copper">
              {loc.label}
            </h3>
            <p className="mt-3 flex items-start gap-2 text-sm text-[#d8d1c4]">
              <MapPinIcon className="mt-0.5 size-4 shrink-0 text-[#8f8778]" />
              {fullAddress(loc)}
            </p>
            <a
              href={telHref(loc.phoneIntl)}
              className="focus-ring mt-2 flex items-center gap-2 rounded-md text-sm text-[#d8d1c4] hover:text-copper"
            >
              <PhoneIcon className="size-4 shrink-0 text-[#8f8778]" />
              {loc.phoneDisplay}
            </a>
          </div>
        ))}
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-xs text-[#8f8778] sm:flex-row">
          <p>
            © {new Date().getFullYear()} {business.name}
          </p>
          <div className="flex gap-5">
            <Link href="/aviso-legal" className="hover:text-copper">
              Aviso legal
            </Link>
            <Link href="/privacidad" className="hover:text-copper">
              Privacidad
            </Link>
            <Link href="/cookies" className="hover:text-copper">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
