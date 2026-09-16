import Link from "next/link";
import Hero from "@/components/Hero";
import FeaturedService from "@/components/FeaturedService";
import WhyVicenteOrtega from "@/components/WhyVicenteOrtega";
import Gallery from "@/components/Gallery";
import Locations from "@/components/Locations";
import Reveal from "@/components/Reveal";
import { services } from "@/components/Services";
import { reviews, Stars } from "@/components/Reviews";
import { business, primaryLocation, telHref, whatsappHref } from "@/lib/business";
import { PhoneIcon, WhatsAppIcon, ArrowRightIcon } from "@/components/icons";

export default function Home() {
  return (
    <main id="contenido" className="flex-1 pb-16 md:pb-0">
      <Hero />

      {/* Servicios — teaser */}
      <section className="section-pad">
        <div className="container-x">
          <Reveal>
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div className="max-w-2xl">
                <span className="eyebrow">Servicios</span>
                <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
                  Corte, color y cuidado
                </h2>
              </div>
              <Link
                href="/servicios"
                className="focus-ring shrink-0 text-sm font-semibold text-orange-dark hover:underline"
              >
                Ver todos los servicios →
              </Link>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {services.slice(0, 3).map((s, i) => (
              <Reveal key={s.slug} delay={i * 80}>
                <div className="card h-full p-6">
                  <span className="flex size-12 items-center justify-center rounded-xl bg-orange-tint text-orange-dark">
                    <s.icon className="size-6" />
                  </span>
                  <h3 className="mt-4 text-lg font-semibold">{s.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground-soft">
                    {s.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FeaturedService />

      {/* Por qué Vicente Ortega */}
      <section className="section-pad bg-surface">
        <div className="container-x">
          <Reveal>
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div className="max-w-2xl">
                <span className="eyebrow">Por qué este salón</span>
                <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
                  Un oficio que se nota
                </h2>
              </div>
              <Link
                href="/el-salon"
                className="focus-ring shrink-0 text-sm font-semibold text-orange-dark hover:underline"
              >
                Conoce el salón →
              </Link>
            </div>
          </Reveal>

          <Reveal className="mt-10" delay={100}>
            <WhyVicenteOrtega />
          </Reveal>
        </div>
      </section>

      {/* Opiniones — teaser */}
      <section className="section-pad">
        <div className="container-x">
          <Reveal>
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl">
                <span className="eyebrow">Opiniones</span>
                <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
                  Lo que dicen quienes ya han pasado por el salón
                </h2>
              </div>
              <div className="card flex shrink-0 items-center gap-4 px-6 py-4">
                <div>
                  <p className="font-serif text-3xl font-semibold leading-none">
                    {business.rating.value}
                  </p>
                  <Stars />
                </div>
                <div className="h-10 w-px bg-line" />
                <p className="text-sm text-foreground-soft">
                  {business.rating.count} reseñas
                  <br />
                  entre los dos salones
                </p>
              </div>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {reviews.slice(0, 2).map((r, i) => (
              <Reveal key={`${r.author}-${i}`} delay={i * 80}>
                <figure className="card flex h-full flex-col p-6">
                  <Stars />
                  <blockquote className="mt-4 flex-1 text-[0.95rem] leading-relaxed text-foreground">
                    &ldquo;{r.text}&rdquo;
                  </blockquote>
                  <figcaption className="mt-5 flex items-center justify-between text-sm">
                    <span className="font-semibold">{r.author}</span>
                    <span className="text-foreground-soft">{r.time}</span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>

          <div className="mt-6 text-center">
            <Link
              href="/opiniones"
              className="focus-ring text-sm font-semibold text-orange-dark hover:underline"
            >
              Ver todas las opiniones →
            </Link>
          </div>
        </div>
      </section>

      {/* Galería — teaser */}
      <section className="section-pad bg-surface">
        <div className="container-x">
          <Reveal>
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div className="max-w-2xl">
                <span className="eyebrow">Galería</span>
                <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
                  El salón, por dentro
                </h2>
              </div>
              <Link
                href="/galeria"
                className="focus-ring shrink-0 text-sm font-semibold text-orange-dark hover:underline"
              >
                Ver galería completa →
              </Link>
            </div>
          </Reveal>
          <Reveal className="mt-10" delay={100}>
            <Gallery />
          </Reveal>
        </div>
      </section>

      {/* Ubicaciones — teaser */}
      <section className="section-pad">
        <div className="container-x">
          <Reveal>
            <div className="max-w-2xl">
              <span className="eyebrow">Ubicaciones</span>
              <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
                Dos salones en Alcalá de Henares
              </h2>
            </div>
          </Reveal>
          <Reveal className="mt-10" delay={100}>
            <Locations />
          </Reveal>
        </div>
      </section>

      {/* CTA final */}
      <section className="section-pad">
        <div className="container-x">
          <Reveal>
            <div className="overflow-hidden rounded-[2rem] bg-orange-dark px-8 py-14 text-center text-white sm:px-14">
              <h2 className="font-serif text-3xl font-semibold sm:text-4xl">
                ¿Pedimos tu cita?
              </h2>
              <p className="mx-auto mt-3 max-w-md text-white/80">
                Llama o escribe por WhatsApp al salón que te quede más cerca
                y te dan hora con la mayor brevedad posible.
              </p>
              <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
                <a href={telHref(primaryLocation.phoneIntl)} className="btn btn-white focus-ring">
                  <PhoneIcon className="size-4.5" />
                  Llamar: {primaryLocation.phoneDisplay}
                </a>
                <a
                  href={whatsappHref(
                    business.whatsapp.phoneIntl,
                    "Hola, quería pedir información/cita",
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-on-dark focus-ring"
                >
                  <WhatsAppIcon className="size-4.5" />
                  WhatsApp
                </a>
                <Link href="/contacto" className="btn btn-on-dark focus-ring">
                  Ver todos los datos de contacto
                  <ArrowRightIcon className="size-4" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
