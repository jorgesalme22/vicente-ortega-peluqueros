import Link from "next/link";
import { business, locations, telHref, fullAddress } from "@/lib/business";
import { PhoneIcon, MapPinIcon, ScissorsIcon } from "./icons";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-surface text-foreground">
      <div className="container-x section-pad !py-14 grid gap-10 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <Link href="/" className="focus-ring flex items-center gap-2.5 rounded-md">
            <ScissorsIcon className="size-6 text-orange-dark" />
            <span className="font-serif text-lg font-semibold">{business.name}</span>
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-foreground-soft">
            Dos salones en Alcalá de Henares. {business.legalName}, de alta desde{" "}
            {business.registeredSince}.
          </p>
          <p className="mt-6 text-xs text-foreground-soft/80">
            Aviso: este sitio se ha construido a partir de información pública
            verificada. Consulta{" "}
            <Link href="/aviso-legal" className="underline hover:text-orange-dark">
              el aviso legal
            </Link>{" "}
            para más detalle.
          </p>
        </div>

        {locations.map((loc) => (
          <div key={loc.id}>
            <h3 className="text-sm font-semibold tracking-wide text-orange-dark">
              {loc.label}
            </h3>
            <p className="mt-3 flex items-start gap-2 text-sm text-foreground-soft">
              <MapPinIcon className="mt-0.5 size-4 shrink-0 text-orange-dark/70" />
              {fullAddress(loc)}
            </p>
            <a
              href={telHref(loc.phoneIntl)}
              className="focus-ring mt-2 flex items-center gap-2 rounded-md text-sm text-foreground hover:text-orange-dark"
            >
              <PhoneIcon className="size-4 shrink-0 text-orange-dark/70" />
              {loc.phoneDisplay}
            </a>
          </div>
        ))}
      </div>

      <div className="border-t border-line">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-xs text-foreground-soft sm:flex-row">
          <p>
            © {new Date().getFullYear()} {business.name}
          </p>
          <div className="flex gap-5">
            <Link href="/aviso-legal" className="hover:text-orange-dark">
              Aviso legal
            </Link>
            <Link href="/privacidad" className="hover:text-orange-dark">
              Privacidad
            </Link>
            <Link href="/cookies" className="hover:text-orange-dark">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
