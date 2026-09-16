import type { Metadata } from "next";
import { reviews, ReviewCard } from "@/components/Reviews";
import { business, locations } from "@/lib/business";

export const metadata: Metadata = {
  title: "Opiniones",
  description:
    "Opiniones reales de clientes de Vicente Ortega Peluqueros en Google Maps, citadas de forma literal.",
  alternates: { canonical: "/opiniones" },
};

export default function OpinionesPage() {
  return (
    <main id="contenido" className="flex-1 pb-16 md:pb-0">
      <section className="section-pad !pb-10">
        <div className="container-x">
          <span className="eyebrow">Opiniones</span>
          <h1 className="mt-3 max-w-2xl font-serif text-4xl font-semibold sm:text-5xl">
            Lo que cuentan los clientes
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-foreground-soft">
            Estas reseñas están citadas de forma literal desde las fichas
            públicas de Google Maps de cada salón, sin modificar ni una
            palabra.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            {locations.map((loc) => (
              <div key={loc.id} className="card px-5 py-3">
                <p className="text-sm font-semibold">{loc.label}</p>
                <p className="text-sm text-foreground-soft">
                  {loc.rating.value}/5 · {loc.rating.count} opiniones
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad !pt-6">
        <div className="container-x">
          <div className="grid gap-5 md:grid-cols-2">
            {reviews.map((r, i) => (
              <ReviewCard key={`${r.author}-${i}`} review={r} />
            ))}
          </div>
          <p className="mt-8 text-sm text-foreground-soft">
            Valoración combinada: {business.rating.value}/5 con{" "}
            {business.rating.count} opiniones entre los dos salones (Google,
            consultado el 16/09/2026).
          </p>
        </div>
      </section>
    </main>
  );
}
