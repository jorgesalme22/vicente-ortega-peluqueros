import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de cookies",
  robots: { index: false, follow: false },
  alternates: { canonical: "/cookies" },
};

export default function CookiesPage() {
  return (
    <main id="contenido" className="flex-1 pb-16 md:pb-0">
      <section className="section-pad">
        <div className="container-x max-w-2xl">
          <h1 className="font-serif text-4xl font-semibold">
            Política de cookies
          </h1>
          <p className="mt-6 leading-relaxed text-foreground-soft">
            Esta web, en su versión actual, no instala cookies propias de
            seguimiento ni de terceros más allá de las estrictamente
            necesarias para el mapa incrustado de Google Maps. Este texto es
            un espacio reservado para la política de cookies definitiva.
          </p>
        </div>
      </section>
    </main>
  );
}
