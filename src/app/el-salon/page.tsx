import type { Metadata } from "next";
import WhyVicenteOrtega from "@/components/WhyVicenteOrtega";
import { business } from "@/lib/business";

export const metadata: Metadata = {
  title: "El salón",
  description:
    "Vicente Ortega Peluqueros: dos salones en Alcalá de Henares, con el mismo equipo de confianza desde 1997.",
  alternates: { canonical: "/el-salon" },
};

export default function ElSalonPage() {
  return (
    <main id="contenido" className="flex-1 pb-16 md:pb-0">
      <section className="section-pad !pb-10">
        <div className="container-x">
          <span className="eyebrow">El salón</span>
          <h1 className="mt-3 max-w-2xl font-serif text-4xl font-semibold sm:text-5xl">
            Dos salones, un mismo oficio
          </h1>
          <div className="mt-6 max-w-2xl space-y-4 text-lg leading-relaxed text-foreground-soft">
            <p>
              {business.legalName} está de alta como sociedad desde el año{" "}
              {business.registeredSince}, y hoy tiene dos salones abiertos en
              Alcalá de Henares: uno en la calle José María Pereda y otro en
              la avenida Juan de Austria. Son dos direcciones, pero el mismo
              negocio.
            </p>
            <p>
              No hacemos afirmaciones sobre premios, certificaciones o
              formación del equipo que no estén publicadas por el propio
              salón: lo que sí puede verificarse es lo que sus clientes
              cuentan en Google, donde piden cita con profesionales
              concretos —Aurora, Leticia, Vanesa, Tino— en lugar de hablar de
              &ldquo;la peluquería&rdquo; en general.
            </p>
            <p>
              En el mismo local de José María Pereda funciona también{" "}
              <a
                href="https://www.instagram.com/esteticavicenteortega/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-orange-dark hover:underline"
              >
                Estética Vicente Ortega
              </a>
              , centrada en tratamientos faciales y corporales. Es un negocio
              relacionado, pero distinto del servicio de peluquería que
              recoge esta web: sus servicios no aparecen en la sección de
              Servicios de esta página para no mezclarlos con los de
              peluquería.
            </p>
          </div>

          <div className="card mt-8 max-w-2xl p-6 sm:p-8">
            <h2 className="text-lg font-semibold">
              También en el edificio: Estética Vicente Ortega
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-foreground-soft">
              Según su escaparate y su perfil de Instagram, ofrecen tratamientos
              de estética facial y corporal, sin relación con los servicios de
              peluquería de esta web:
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {[
                "Higiene facial",
                "Peeling químico",
                "Depilación láser",
                "Radiofrecuencia",
                "Cavitación",
                "Presoterapia",
                "Masajes",
                "Manicura y pedicura",
                "Diseño de cejas y pestañas",
                "Rayos UVA",
              ].map((item) => (
                <li
                  key={item}
                  className="rounded-full bg-orange-tint px-3 py-1.5 text-xs font-medium text-orange-dark"
                >
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="https://www.instagram.com/esteticavicenteortega/"
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring mt-5 inline-flex items-center gap-2 text-sm font-semibold text-orange-dark hover:underline"
            >
              Ver su Instagram @esteticavicenteortega →
            </a>
          </div>
        </div>
      </section>

      <section className="section-pad !pt-6">
        <div className="container-x">
          <WhyVicenteOrtega />
        </div>
      </section>
    </main>
  );
}
