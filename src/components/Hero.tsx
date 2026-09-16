import Link from "next/link";
import { business, primaryLocation, telHref } from "@/lib/business";
import { PhoneIcon, ArrowRightIcon, StarIcon, MapPinIcon } from "./icons";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="container-x pt-14 md:pt-20">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-16">
          <div className="reveal">
            <span className="eyebrow">
              <MapPinIcon className="size-3.5" />
              Alcalá de Henares
            </span>
            <h1 className="mt-5 max-w-xl font-serif text-[2.75rem] leading-[1.05] font-semibold tracking-tight sm:text-6xl">
              Vicente Ortega Peluqueros
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-foreground-soft">
              Dos salones en Alcalá de Henares donde el mismo oficio se repite
              desde 1997: escuchar lo que pide cada cliente antes de coger las
              tijeras.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href={telHref(primaryLocation.phoneIntl)} className="btn btn-primary focus-ring">
                <PhoneIcon className="size-4" />
                Llamar al salón
              </a>
              <Link href="/servicios" className="btn btn-secondary focus-ring">
                Ver servicios
                <ArrowRightIcon className="size-4" />
              </Link>
            </div>
          </div>

          <div className="reveal flex flex-col gap-4" style={{ animationDelay: "120ms" }}>
            <div className="flex items-center gap-4 rounded-2xl border border-line bg-white/60 px-5 py-4">
              <div className="flex items-center gap-1 text-copper-dark">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} className="size-4" />
                ))}
              </div>
              <div className="h-8 w-px bg-line" />
              <p className="text-sm leading-snug text-foreground-soft">
                <span className="font-semibold text-ink">{business.rating.value} / 5</span> en
                Google · {business.rating.count} opiniones entre los dos salones
              </p>
            </div>
            <p className="text-sm text-foreground-soft">
              Sede principal:{" "}
              <span className="font-medium text-ink">{primaryLocation.street}</span>,{" "}
              {primaryLocation.city}
            </p>
          </div>
        </div>
      </div>

      <div className="reveal mt-14" style={{ animationDelay: "200ms" }}>
        <div className="container-x">
          <div className="relative overflow-hidden rounded-[1.75rem] border border-line bg-ink">
            <div
              className="aspect-[16/7] w-full opacity-90"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 12% 20%, rgba(168,93,46,0.35), transparent 40%), radial-gradient(circle at 85% 75%, rgba(176,140,79,0.28), transparent 45%), repeating-linear-gradient(115deg, rgba(247,243,238,0.05) 0px, rgba(247,243,238,0.05) 1px, transparent 1px, transparent 34px)",
              }}
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 px-6 text-center">
              <p className="font-serif text-xl font-semibold text-[#f7f3ee] sm:text-2xl">
                Espacio reservado para fotografía real del salón
              </p>
              <p className="max-w-md text-sm text-[#c9c0b3]">
                Este panel está listo para recibir fotografías del equipo, el
                local y los trabajos en cuanto el negocio las facilite.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
