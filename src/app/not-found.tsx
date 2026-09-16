import Link from "next/link";
import { PhoneIcon } from "@/components/icons";
import { primaryLocation, telHref } from "@/lib/business";

export default function NotFound() {
  return (
    <main id="contenido" className="flex flex-1 items-center justify-center py-24">
      <div className="container-x max-w-md text-center">
        <p className="font-serif text-6xl font-semibold text-orange-dark">404</p>
        <h1 className="mt-4 text-2xl font-semibold">Esta página no existe</h1>
        <p className="mt-3 text-foreground-soft">
          Puede que el enlace esté roto o la página se haya movido. Prueba a
          volver al inicio o llámanos si necesitas ayuda.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link href="/" className="btn btn-primary focus-ring">
            Volver al inicio
          </Link>
          <a href={telHref(primaryLocation.phoneIntl)} className="btn btn-secondary focus-ring">
            <PhoneIcon className="size-4" />
            {primaryLocation.phoneDisplay}
          </a>
        </div>
      </div>
    </main>
  );
}
