import Image from "next/image";
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
              <div className="flex items-center gap-1 text-orange-dark">
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
          <div className="relative aspect-[16/7] w-full overflow-hidden rounded-[1.75rem] border border-line bg-orange-dark">
            <Image
              src="/images/fachada-pereda.jpg"
              alt="Fachada del salón de Vicente Ortega Peluqueros en Calle José María Pereda, Alcalá de Henares"
              fill
              priority
              sizes="(min-width: 1024px) 1120px, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent px-6 py-4 sm:px-8 sm:py-5">
              <p className="text-xs text-white/85 sm:text-sm">
                Fachada real del salón, fotografía pública de su ficha de
                Google Maps.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
