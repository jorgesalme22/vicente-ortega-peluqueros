import type { Metadata } from "next";
import Locations from "@/components/Locations";
import { business, whatsappHref } from "@/lib/business";
import { WhatsAppIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Dirección, teléfono, WhatsApp, horario y mapa de los dos salones de Vicente Ortega Peluqueros en Alcalá de Henares.",
  alternates: { canonical: "/contacto" },
};

export default function ContactoPage() {
  return (
    <main id="contenido" className="flex-1 pb-16 md:pb-0">
      <section className="section-pad !pb-10">
        <div className="container-x">
          <span className="eyebrow">Contacto</span>
          <h1 className="mt-3 max-w-2xl font-serif text-4xl font-semibold sm:text-5xl">
            Dos salones, una llamada
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-foreground-soft">
            No hay reserva online para ninguno de los dos salones, pero
            puedes llamar o escribir por WhatsApp y te dan cita.
          </p>
          <a
            href={whatsappHref(
              business.whatsapp.phoneIntl,
              "Hola, quería pedir información/cita",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary focus-ring mt-6"
          >
            <WhatsAppIcon className="size-4.5" />
            Escribir por WhatsApp
          </a>
        </div>
      </section>

      <section className="section-pad !pt-6">
        <div className="container-x">
          <Locations />
        </div>
      </section>
    </main>
  );
}
