import { ImagePlaceholderIcon } from "./icons";

const slots = [
  { label: "Fachada", span: "sm:col-span-2 sm:row-span-2" },
  { label: "Corte", span: "" },
  { label: "Color y balayage", span: "" },
  { label: "Interior del salón", span: "" },
  { label: "Puesto de trabajo", span: "sm:row-span-2" },
  { label: "Recogido y peinado", span: "" },
  { label: "Detalle de producto", span: "" },
  { label: "Equipo", span: "sm:col-span-2" },
];

export default function Gallery() {
  return (
    <div className="grid auto-rows-[11rem] grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
      {slots.map((slot) => (
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
      ))}
    </div>
  );
}
