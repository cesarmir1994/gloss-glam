# Gloss & Glam Estudio - Sitio web

Sitio web oficial de **Gloss & Glam Estudio by Tannia Ortega**, un espacio de belleza en Baños de Agua Santa, Ecuador.

Construido con Next.js 16 (App Router), TypeScript y Tailwind CSS 4.

## Desarrollo

```bash
npm install
npm run dev
```

Abre `http://localhost:3000`.

```bash
npm run build
npx serve out
```

`npm run build` genera la carpeta `out/` con el sitio estático listo para Cloudflare Pages.

## Páginas

- `/` - Inicio
- `/servicios` - Servicios
- `/galeria` - Galería con filtros y visor
- `/nosotros` - Historia, valores y estudio
- `/contacto` - WhatsApp, mapa, horarios y redes

## Cómo actualizar el contenido

| Qué cambiar | Archivo |
| --- | --- |
| Nombre, teléfono, WhatsApp, correo, dirección, horarios y redes | `content/site.ts` |
| Servicios y duración | `content/services.ts` |
| Fotos y textos de la galería | `content/gallery.ts` |
| Colores y tipografías | `app/globals.css` |

### Cambiar el número de WhatsApp

Edita `whatsapp` en `content/site.ts`. Debe ir con código de país y sin `+`, espacios ni guiones:

```ts
whatsapp: "593979260607",
```

### Cambiar fotos

1. Coloca las nuevas imágenes en `public/images/`.
2. Actualiza las rutas en `content/gallery.ts` o `content/services.ts`.
3. Usa fotos verticales (4:5) para la portada y la galería, y cuadradas para los servicios.

### Logo

El logotipo oficial está en `public/images/logo.jpeg` y se muestra en la barra de navegación y el pie de página mediante `components/BrandLogo.tsx`. La misma imagen se usa para el favicon en `app/icon.png`.

## Datos que conviene confirmar

- **Horarios:** el sitio indica atención con cita previa porque la página de Facebook no publica horarios exactos.
- **Dominio:** `content/site.ts` usa `https://glossandglamestudio.com` como marcador. Define `NEXT_PUBLIC_SITE_URL` en Cloudflare (o en un archivo `.env.local`) con el dominio real antes de compilar.
- **Instagram:** no se incluyó porque no se confirmó una cuenta oficial.

## Imágenes

Las fotos y gráficos provienen de la página pública de Facebook de Gloss & Glam Estudio y se usan para este sitio del negocio. Las imágenes nuevas de la carpeta `images/` se copiaron a `public/images/` con nombres descriptivos:

- `hero-peinado.jpg`: cabello con ondas suaves (portada y galería).
- `peinado-evento.jpg`: look de evento con vestido rojo y corona.
- `unas-cerezas.jpg`: manicura francesa con cerezas.
- `unas-elegantes.jpg`: uñas almendra con detalles dorados.
- `unas-florales.jpg`: nail art floral en rojo.
- `maquillaje-artistico.jpg`: maquillaje artístico con cristales.

## Publicación en Cloudflare Pages

El proyecto está configurado como exportación estática. `npm run build` genera la carpeta `out/`, que es la que se publica en Cloudflare Pages.

### Opción 1: conectar GitHub con Cloudflare

1. Sube el proyecto a GitHub.
2. En Cloudflare, entra a **Workers & Pages → Create → Pages → Connect to Git**.
3. Selecciona el repositorio.
4. Usa estos valores:
   - **Framework preset:** Next.js (Static HTML Export)
   - **Build command:** `npm run build`
   - **Build output directory:** `out`
   - **Variable de entorno:** `NODE_VERSION=22`
   - **Variable de entorno:** `NEXT_PUBLIC_SITE_URL=https://tudominio.com`
5. Haz clic en **Deploy**.

Cada push a `main` volverá a publicar el sitio automáticamente.

### Opción 2: publicar manualmente con Wrangler

```bash
npm run build
npx wrangler pages deploy out --project-name gloss-glam-estudio
```

La primera vez te pedirá iniciar sesión en Cloudflare. Al terminar te dará una URL `*.pages.dev`.

### Dominio propio

1. En el proyecto de Cloudflare Pages, entra a **Custom domains**.
2. Agrega tu dominio.
3. Si el dominio está en Cloudflare, el DNS se configura automáticamente. Si no, crea el CNAME que te indique Cloudflare.

> **Nota:** este proyecto está dentro de OneDrive. Para evitar conflictos de sincronización, excluye `node_modules`, `.next` y `out`, o mueve el proyecto a una carpeta local.

## SEO

- Metadatos por página y Open Graph.
- Datos estructurados `BeautySalon`.
- `sitemap.xml` y `robots.txt` automáticos.
- Imágenes servidas directamente desde `public/images/` (exportación estática).
