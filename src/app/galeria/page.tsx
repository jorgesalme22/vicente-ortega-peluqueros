import type { Metadata } from "next";
import Gallery from "@/components/Gallery";

export const metadata: Metadata = {
  title: "Galería",
  description:
    "Galería de Vicente Ortega Peluqueros en Alcalá de Henares, preparada para las fotografías reales del salón.",
  alternates: { canonical: "/galeria" },
};

export default function GaleriaPage() {
  return (
    <main id="contenido" className="flex-1 pb-16 md:pb-0">
      <section className="section-pad !pb-10">
        <div className="container-x">
          <span className="eyebrow">Galería</span>
          <h1 className="mt-3 max-w-2xl font-serif text-4xl font-semibold sm:text-5xl">
            El salón, por dentro
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-foreground-soft">
            Las fotografías de las fachadas, el escaparate y el recogido
            proceden de las fichas públicas de Google Maps de los dos
            salones. El resto son huecos editoriales, listos para recibir
            más fotografías que facilite el propio negocio.
          </p>
        </div>
      </section>

      <section className="section-pad !pt-6">
        <div className="container-x">
          <Gallery />
        </div>
      </section>
    </main>
  );
}
