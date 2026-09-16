"use client";

import { useState } from "react";
import Link from "next/link";
import { business, primaryLocation, telHref, whatsappHref } from "@/lib/business";
import { MenuIcon, CloseIcon, PhoneIcon, WhatsAppIcon, ScissorsIcon } from "./icons";

const links = [
  { href: "/servicios", label: "Servicios" },
  { href: "/el-salon", label: "El salón" },
  { href: "/galeria", label: "Galería" },
  { href: "/opiniones", label: "Opiniones" },
  { href: "/contacto", label: "Contacto" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-background/90 backdrop-blur">
      <div className="container-x flex h-16 items-center justify-between md:h-20">
        <Link
          href="/"
          className="focus-ring flex items-center gap-2.5 rounded-md"
          onClick={() => setOpen(false)}
        >
          <ScissorsIcon className="size-6 text-orange-dark" />
          <span className="font-serif text-lg font-semibold tracking-tight sm:text-xl">
            {business.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="focus-ring rounded-md text-sm font-medium text-foreground-soft transition-colors hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={whatsappHref(
              business.whatsapp.phoneIntl,
              "Hola, quería pedir información/cita",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary focus-ring"
          >
            <WhatsAppIcon className="size-4" />
            WhatsApp
          </a>
          <a
            href={telHref(primaryLocation.phoneIntl)}
            className="btn btn-primary focus-ring"
          >
            <PhoneIcon className="size-4" />
            Llamar
          </a>
        </div>

        <button
          type="button"
          className="focus-ring -mr-2 flex size-11 items-center justify-center rounded-full text-ink lg:hidden"
          aria-expanded={open}
          aria-controls="menu-movil"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <CloseIcon className="size-6" /> : <MenuIcon className="size-6" />}
        </button>
      </div>

      <div
        id="menu-movil"
        className={`overflow-hidden border-t border-line/70 bg-background transition-[max-height] duration-300 ease-in-out lg:hidden ${
          open ? "max-h-96" : "max-h-0 border-t-0"
        }`}
      >
        <nav className="container-x flex flex-col gap-1 py-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="focus-ring rounded-md px-2 py-2.5 text-base font-medium text-foreground transition-colors hover:bg-surface"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={telHref(primaryLocation.phoneIntl)}
            className="btn btn-primary focus-ring mt-3 w-full"
          >
            <PhoneIcon className="size-4" />
            Llamar: {primaryLocation.phoneDisplay}
          </a>
          <a
            href={whatsappHref(
              business.whatsapp.phoneIntl,
              "Hola, quería pedir información/cita",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary focus-ring mt-2 w-full"
          >
            <WhatsAppIcon className="size-4" />
            WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
