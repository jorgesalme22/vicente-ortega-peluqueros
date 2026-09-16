# Vicente Ortega Peluqueros — sitio web

Sitio web oficial (propuesta) para **Vicente Ortega Peluqueros**, con dos
salones en Alcalá de Henares (Madrid): Calle José María Pereda, Local 7, y
Avenida Juan de Austria, 28.

🔗 **Producción:** https://vicente-ortega-peluqueros.vercel.app

## Sobre este proyecto

Todo el contenido (direcciones, teléfonos, horarios, valoración, reseñas y
servicios) está basado en información pública verificada en Google Maps,
Facebook, Instagram, Fresha y Páginas Amarillas el **16/09/2026**. No se ha
inventado ningún dato de precio, formación del equipo ni testimonio. Los
detalles que faltan por confirmar con el negocio —incluida la relación
exacta entre los dos locales— están listados en
[`DATOS-PENDIENTES.md`](./DATOS-PENDIENTES.md).

**Nota sobre las fotografías:** el Hero y 4 de los 8 huecos de la galería
usan fotografías reales descargadas de las fichas públicas de Google Maps
de los dos salones (fachadas, escaparate y un recogido real). Se incluyeron
a petición expresa del cliente de este proyecto, que es un ejercicio
académico/de portfolio y no un encargo del negocio real, así que **no
tienen licencia de reutilización confirmada por escrito** — ver el detalle
completo y la recomendación de pedir autorización antes de cualquier uso
comercial en [`DATOS-PENDIENTES.md`](./DATOS-PENDIENTES.md). El resto de
huecos de la galería y de la sección de color siguen siendo placeholders
editoriales, listos para recibir más fotos que facilite el negocio — ver
instrucciones más abajo.

## Stack técnico

- [Next.js 16](https://nextjs.org/) (App Router) + React 19 + TypeScript
- Tailwind CSS v4
- Fuentes optimizadas con `next/font` (Bodoni Moda + Inter, self-hosted)
- Imagen Open Graph y favicon generados dinámicamente con `next/og`
- `sitemap.xml`, `robots.txt` y JSON-LD (`HairSalon`, uno por cada salón)
  para SEO local
- Sin dependencias de terceros más allá de Next.js/React

Se eligió Next.js (en lugar de una SPA con Vite) porque el sitio necesita
metadatos y SEO por ruta (title, description, canonical, sitemap) sin montar
un backend: el App Router de Next.js resuelve esto de forma nativa y sigue
el mismo patrón que el resto de proyectos de este repositorio de TFG.

## Desarrollo local (Visual Studio Code)

1. Abre la carpeta `vicente-ortega-peluqueros` en Visual Studio Code.
2. Abre una terminal integrada (``Ctrl+` ``) y ejecuta:

```bash
npm install
```

3. Arranca el servidor de desarrollo:

```bash
npm run dev
```

4. Abre [http://localhost:3000](http://localhost:3000) en el navegador. Los
   cambios en el código se recargan automáticamente.

### Generar la versión de producción

```bash
npm run build
npm run start
```

`npm run build` genera la build optimizada en `.next/`; `npm run start`
sirve esa build ya compilada (es la que se usaría en un despliegue real).

## Estructura del proyecto

```
vicente-ortega-peluqueros/
├── public/               # Activos estáticos (vacío por ahora)
├── src/
│   ├── app/               # Rutas (App Router), layout, metadatos,
│   │                         sitemap/robots, imagen OG e icono
│   │   ├── servicios/
│   │   ├── el-salon/
│   │   ├── galeria/
│   │   ├── opiniones/
│   │   ├── contacto/
│   │   ├── aviso-legal/
│   │   ├── privacidad/
│   │   └── cookies/
│   ├── components/        # Secciones y componentes de UI
│   └── lib/business.ts    # Única fuente de verdad de los datos del negocio
├── package.json
└── README.md
```

## Cómo actualizar los datos de contacto

Para actualizar teléfonos, direcciones, horarios de cada salón o la
valoración, edita un único archivo:
[`src/lib/business.ts`](./src/lib/business.ts). El cambio se propaga
automáticamente a todos los textos de la web, al footer, a los metadatos SEO
y al JSON-LD de Schema.org de cada salón.

## Cómo actualizar los textos de cada sección

Cada sección de la web es un componente independiente dentro de
`src/components/`:

| Sección | Archivo |
|---|---|
| Portada / hero | `Hero.tsx` |
| Servicios | `Services.tsx` (iconos) + `src/lib/business.ts` (textos) |
| Servicio destacado (color) | `FeaturedService.tsx` |
| Diferenciadores | `WhyVicenteOrtega.tsx` |
| Galería | `Gallery.tsx` |
| Opiniones | `Reviews.tsx` + `src/lib/business.ts` (reseñas) |
| Ubicaciones / mapas | `Locations.tsx` |
| Cabecera / menú | `Header.tsx`, `StickyMobileBar.tsx` |
| Pie de página | `Footer.tsx` |

Los servicios y las reseñas se definen como datos en `src/lib/business.ts`
(arrays `services` y `reviews`), así que para añadir o quitar uno basta con
editar ese archivo; no hace falta tocar los componentes.

## Cómo sustituir las fotografías

1. Pide al negocio las fotografías reales en alta resolución (fachada de
   los dos salones, interior, puestos de trabajo, cortes, color/balayage,
   equipo).
2. Colócalas en `public/images/` (crea la carpeta si no existe), por ejemplo
   `public/images/fachada-pereda.jpg`.
3. En `src/components/Hero.tsx`, `FeaturedService.tsx` y `Gallery.tsx`,
   sustituye cada bloque con fondo de textura/placeholder por una etiqueta
   `<Image src="/images/fachada-pereda.jpg" alt="Fachada del salón de Calle José María Pereda" fill className="object-cover" />`
   usando el componente `Image` de `next/image`
   (```import Image from "next/image"``` al principio del archivo) para que
   Next.js optimice el peso y el `lazy loading` automáticamente.
4. El logotipo real (si el negocio lo facilita en SVG o PNG con fondo
   transparente) puede sustituir al icono de tijeras (`ScissorsIcon`) en
   `Header.tsx` y `Footer.tsx`.

## Despliegue en GitHub

```bash
git init
git add .
git commit -m "Sitio web de Vicente Ortega Peluqueros (Alcalá de Henares)"
git branch -M main
git remote add origin https://github.com/<tu-usuario>/vicente-ortega-peluqueros.git
git push -u origin main
```

## Despliegue en Vercel

Este proyecto ya está conectado a Vercel y se despliega automáticamente en
cada `git push` a `main` (ver la URL de producción al principio de este
documento). Los pasos siguientes son para el caso de tener que volver a
conectarlo desde cero (por ejemplo, en otra cuenta):

1. Entra en [vercel.com](https://vercel.com) e inicia sesión con tu cuenta
   de GitHub.
2. Pulsa **Add New → Project** y selecciona el repositorio
   `vicente-ortega-peluqueros`.
3. Vercel detecta automáticamente que es un proyecto Next.js: no hace falta
   configurar el comando de build ni el directorio de salida.
4. Pulsa **Deploy**. En 1-2 minutos obtienes una URL pública del tipo
   `https://vicente-ortega-peluqueros.vercel.app`.
5. Cada `git push` a `main` vuelve a desplegar automáticamente.

## Conectar un dominio propio

Una vez desplegado en Vercel, en **Project → Settings → Domains** puedes
añadir un dominio propio (por ejemplo, `vicenteortegapeluqueros.es`, si
está disponible y el negocio decide comprarlo) y seguir las instrucciones
de Vercel para apuntar los DNS.

## Pendiente

Ver [`DATOS-PENDIENTES.md`](./DATOS-PENDIENTES.md) para la lista completa de
datos a confirmar con el negocio (relación exacta entre los dos locales,
horario del segundo salón, fotos reales, textos legales, etc.) antes de
presentar este sitio como la web oficial definitiva de Vicente Ortega
Peluqueros.
