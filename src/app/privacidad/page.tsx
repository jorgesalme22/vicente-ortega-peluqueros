import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de privacidad",
  robots: { index: false, follow: false },
  alternates: { canonical: "/privacidad" },
};

export default function PrivacidadPage() {
  return (
    <main id="contenido" className="flex-1 pb-16 md:pb-0">
      <section className="section-pad">
        <div className="container-x max-w-2xl">
          <h1 className="font-serif text-4xl font-semibold">
            Política de privacidad
          </h1>
          <p className="mt-6 leading-relaxed text-foreground-soft">
            Este sitio no tiene formularios que recojan datos personales más
            allá del contacto telefónico directo, así que todavía no hay
            tratamiento de datos que documentar. Este texto es un espacio
            reservado para la política de privacidad definitiva, que debe
            redactarse junto con el titular del negocio (responsable del
            tratamiento, finalidad, derechos ARCO, etc.).
          </p>
        </div>
      </section>
    </main>
  );
}
