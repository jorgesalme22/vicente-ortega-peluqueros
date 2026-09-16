import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/components/Services";
import { primaryLocation, telHref } from "@/lib/business";
import { PhoneIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Corte de señora y caballero, coloración, balayage, mechas, tratamientos capilares y peinado en Vicente Ortega Peluqueros, Alcalá de Henares.",
  alternates: { canonical: "/servicios" },
};

export default function ServiciosPage() {
  return (
    <main id="contenido" className="flex-1 pb-16 md:pb-0">
      <section className="section-pad !pb-10">
        <div className="container-x">
          <span className="eyebrow">Servicios</span>
          <h1 className="mt-3 max-w-2xl font-serif text-4xl font-semibold sm:text-5xl">
            Corte, color y cuidado del cabello
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-foreground-soft">
            Los precios no están publicados por el salón, así que no los
            mostramos aquí para no dar una cifra que no sea real. Llama y te
            los confirman sin compromiso.
          </p>
        </div>
      </section>

      <section className="section-pad !pt-6">
        <div className="container-x">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div key={s.slug} className="card flex flex-col p-6">
                <span className="flex size-12 items-center justify-center rounded-xl bg-copper-tint text-copper-dark">
                  <s.icon className="size-6" />
                </span>
                <h2 className="mt-4 text-lg font-semibold">{s.name}</h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-foreground-soft">
                  {s.description}
                </p>
                <a
                  href={telHref(primaryLocation.phoneIntl)}
                  className="focus-ring mt-5 inline-flex items-center gap-2 text-sm font-semibold text-copper-dark hover:underline"
                >
                  <PhoneIcon className="size-4" />
                  Consultar y reservar
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-surface">
        <div className="container-x">
          <div className="overflow-hidden rounded-[2rem] bg-ink px-8 py-14 text-center text-[#f7f3ee] sm:px-14">
            <h2 className="font-serif text-3xl font-semibold sm:text-4xl">
              ¿Tienes claro lo que quieres?
            </h2>
            <p className="mx-auto mt-3 max-w-md text-[#d8d1c4]">
              Llama al salón que te quede más cerca y te dan cita.
            </p>
            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
              <a href={telHref(primaryLocation.phoneIntl)} className="btn btn-primary focus-ring">
                <PhoneIcon className="size-4.5" />
                Llamar: {primaryLocation.phoneDisplay}
              </a>
              <Link href="/contacto" className="btn btn-on-dark focus-ring">
                Ver los dos salones
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
