import Image from "next/image";
import { ImagePlaceholderIcon } from "./icons";

const slots = [
  {
    label: "Fachada — Calle José María Pereda",
    span: "sm:col-span-2 sm:row-span-2",
    src: "/images/fachada-pereda.jpg",
  },
  { label: "Corte", span: "" },
  { label: "Color y balayage", span: "" },
  { label: "Interior del salón", span: "" },
  {
    label: "Fachada — Avenida Juan de Austria",
    span: "sm:row-span-2",
    src: "/images/fachada-juan-de-austria.jpg",
  },
  {
    label: "Recogido y peinado",
    span: "",
    src: "/images/recogido-real.jpg",
  },
  {
    label: "Escaparate y servicios",
    span: "",
    src: "/images/escaparate-pereda.jpg",
  },
  { label: "Equipo", span: "sm:col-span-2" },
];

export default function Gallery() {
  return (
    <div className="grid auto-rows-[11rem] grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
      {slots.map((slot) =>
        slot.src ? (
          <figure
            key={slot.label}
            className={`group relative overflow-hidden rounded-2xl border border-line transition-transform duration-300 hover:-translate-y-0.5 ${slot.span}`}
          >
            <Image
              src={slot.src}
              alt={slot.label}
              fill
              sizes="(min-width: 640px) 25vw, 50vw"
              className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
            />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent px-3 py-2 text-xs font-medium text-white">
              {slot.label}
            </figcaption>
          </figure>
        ) : (
          <figure
            key={slot.label}
            className={`group relative overflow-hidden rounded-2xl border border-line bg-surface transition-transform duration-300 hover:-translate-y-0.5 ${slot.span}`}
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 px-4 text-center opacity-70 transition-opacity duration-300 group-hover:opacity-100">
              <ImagePlaceholderIcon className="size-6 text-foreground-soft" />
              <figcaption className="text-xs font-medium text-foreground-soft">
                {slot.label}
              </figcaption>
            </div>
          </figure>
        ),
      )}
    </div>
  );
}
