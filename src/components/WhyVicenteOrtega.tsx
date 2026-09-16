import { business, locations } from "@/lib/business";
import { ClockIcon, MapPinIcon, StarIcon, ScissorsIcon } from "./icons";

export const reasons = [
  {
    icon: ClockIcon,
    title: `Desde ${business.registeredSince}`,
    description:
      "Casi tres décadas cortando el pelo en Alcalá de Henares, con clientas que llevan años volviendo al mismo salón.",
  },
  {
    icon: MapPinIcon,
    title: "Dos salones en la ciudad",
    description:
      "Calle José María Pereda y Avenida Juan de Austria: el mismo negocio, dos puntos donde encontrarlo.",
  },
  {
    icon: ScissorsIcon,
    title: "Profesionales que se piden por nombre",
    description:
      'En las reseñas, los clientes no hablan de "la peluquería": piden cita con Aurora, Leticia, Vanesa o Tino.',
  },
  {
    icon: StarIcon,
    title: `${business.rating.value}/5 en Google`,
    description: `Valoración sostenida entre los dos salones, con ${
      locations[0].rating.count + locations[1].rating.count
    } opiniones acumuladas.`,
  },
] as const;

export default function WhyVicenteOrtega() {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {reasons.map((r) => (
        <div key={r.title} className="flex gap-4">
          <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-white text-orange-dark shadow-sm ring-1 ring-line">
            <r.icon className="size-5" />
          </span>
          <div>
            <h3 className="font-semibold">{r.title}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-foreground-soft">
              {r.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
