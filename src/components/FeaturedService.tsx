import Link from "next/link";
import { DropIcon, SparkleIcon, ArrowRightIcon } from "./icons";

export default function FeaturedService() {
  return (
    <section className="section-pad">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
          <div className="order-2 lg:order-1">
            <span className="eyebrow">
              <SparkleIcon className="size-3.5" />
              Color
            </span>
            <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight sm:text-5xl">
              Coloración y balayage
            </h2>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-foreground-soft">
              Entre los servicios que más buscan quienes escriben sobre el
              salón está el color: cobertura de canas, cambios de tono y
              balayage con degradado natural, formulados en el propio local.
            </p>
            <Link
              href="/servicios"
              className="btn btn-secondary focus-ring mt-8"
            >
              Ver todos los servicios
              <ArrowRightIcon className="size-4" />
            </Link>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] border border-line bg-gradient-to-br from-copper-tint via-[#f7f3ee] to-surface-strong">
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-8 text-center">
                <DropIcon className="size-9 text-copper-dark" />
                <p className="font-serif text-lg font-semibold text-ink">
                  Fotografía de color pendiente
                </p>
                <p className="text-sm text-foreground-soft">
                  Reservado para un antes/después real de balayage o
                  coloración realizado en el salón.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
