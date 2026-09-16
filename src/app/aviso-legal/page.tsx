import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aviso legal",
  robots: { index: false, follow: false },
  alternates: { canonical: "/aviso-legal" },
};

export default function AvisoLegalPage() {
  return (
    <main id="contenido" className="flex-1 pb-16 md:pb-0">
      <section className="section-pad">
        <div className="container-x max-w-2xl">
          <h1 className="font-serif text-4xl font-semibold">Aviso legal</h1>
          <p className="mt-6 leading-relaxed text-foreground-soft">
            Este texto es un espacio reservado. Todavía no contiene el aviso
            legal oficial de Vicente Ortega Peluqueros (razón social, CIF,
            datos registrales, condiciones de uso), porque esa información
            debe facilitarla el propio titular del negocio.
          </p>
          <p className="mt-4 leading-relaxed text-foreground-soft">
            No se ha inventado ningún dato legal para rellenar este
            apartado. En cuanto el negocio facilite su CIF y los datos de
            inscripción registral, este texto debe sustituirse por el aviso
            legal definitivo.
          </p>
        </div>
      </section>
    </main>
  );
}
