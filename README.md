# SSTrategic Web

Sitio web corporativo de SSTrategic SAS, desarrollado con React, Vite y Tailwind CSS.

## Requisitos

- Node.js
- npm

## Comandos

```bash
npm install
npm run dev
npm run build
npm run preview
npm run lint
```

## Variables de entorno

El formulario usa EmailJS. Puedes configurar estas variables en un archivo `.env`:

```env
VITE_EMAILJS_SERVICE_ID=service_o56gvug
VITE_EMAILJS_TEMPLATE_ID=template_i4glevv
VITE_EMAILJS_PUBLIC_KEY=Q13StvRxQHLuivZkA
```

Si no se definen, el sitio usa los valores actuales como respaldo para no romper el envío del formulario.

El formulario también envía estos campos extra para usarlos en la plantilla de EmailJS:

- `logo_url`: URL pública del logo, por ejemplo `https://tudominio.com/logo.png`.
- `fecha_envio`: fecha legible del envío.

Para que el logo aparezca en correos o PDFs generados desde EmailJS, usa `{{logo_url}}` como `src` de la imagen en la plantilla. La imagen debe estar disponible desde una URL pública, no desde una ruta local del computador.

## Estructura

- `src/components`: secciones de la landing page.
- `src/img`: imágenes usadas por el sitio.
- `src/video`: video corporativo.
- `public`: archivos públicos como el logo.
