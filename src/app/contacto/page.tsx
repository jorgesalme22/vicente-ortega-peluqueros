import type { Metadata } from "next";
import Locations from "@/components/Locations";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Dirección, teléfono, horario y mapa de los dos salones de Vicente Ortega Peluqueros en Alcalá de Henares.",
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
            No hay reserva online ni WhatsApp confirmado para ninguno de los
            dos salones: la vía de contacto verificada es el teléfono.
          </p>
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
