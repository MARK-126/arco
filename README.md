# Arco — Frontend (Next.js)

Descripción
-----------

Este directorio (`arco/`) contiene la aplicación frontend de la plataforma Arco. Es una app construida con Next.js (App Router) y TypeScript que ofrece la interfaz pública: listados de paquetes turísticos, detalle de paquete y formulario de contacto.

Este README está orientado exclusivamente al frontend: estructura, scripts, cómo ejecutarlo y dónde encontrar los componentes más importantes.

Stack y dependencias clave
-------------------------
- Framework: Next.js (App Router)
- Lenguaje: TypeScript
- Bundler / runtime: Node.js (para desarrollo y producción)
- Carpetas principales: `app/`, `components/`, `public/`

Estructura relevante (dentro de `arco/`)
-------------------------------------
- `app/` — rutas y páginas (App Router). Contiene `layout.tsx`, `page.tsx` y subrutas como `about/`, `contact/`, `packages/`.
- `src/components/` (o `components/`) — componentes reutilizables: `header`, `footer`, `hero-section`, `packages`, `form`, etc.
- `public/` — activos públicos (imágenes, favicons, etc.).
- `next.config.*`, `tsconfig.json`, `package.json` — configuración y scripts.

Archivos destacados
-------------------
- `app/page.tsx` — entrada principal de la página.
- `app/layout.tsx` — layout global y providers.
- `src/components/*` — componentes UI (Hero, Navbar, Footer, PackageCard, FormContact, etc.).

Requisitos previos
------------------
- Node.js (v16+ recomendable)
- npm o pnpm/yarn

Cómo ejecutar en desarrollo
---------------------------

1) Instalar dependencias

```bash
cd arco
npm install
```

2) Ejecutar en modo desarrollo

```bash
npm run dev
```

La app estará disponible en http://localhost:3000 y se recargará automáticamente al editar archivos.

Scripts comunes
--------------
- `dev` — arranca Next.js en modo desarrollo.
- `build` — construye la aplicación para producción.
- `start` — inicia el servidor de producción (después de `build`).
- `lint` — corre ESLint (si está configurado en `package.json`).

Conexión con la API
-------------------

El frontend consume una API REST para obtener y enviar datos (paquetes y mensajes de contacto). Para las pruebas locales necesitás que esa API esté disponible (por ejemplo, un servidor en `http://localhost:5001`). Este README no documenta la API — la implementación del backend se encuentra en el directorio `server/` del repositorio raíz.

Buenas prácticas y notas para desarrollo
--------------------------------------
- Mantener componentes pequeños y reutilizables dentro de `src/components`.
- Usar rutas del App Router (carpeta `app/`) para nuevas páginas.
- Añadir tipos TypeScript para props y respuestas de la API.
- Si vas a cambiar endpoints o el shape de la API, actualizá también los tipos y los hooks/fetchers que consumen la API.

Contribuir
----------

- Cread una rama para cada feature: `feature/nombre-descriptivo` o `fix/descripcion`.
- Acompañad los cambios con una breve descripción en el PR. Si tocás la interfaz pública o los datos, documentalo en el README o en comentarios del PR.

Licencia
--------

- No hay licencia definida en este directorio. Si queréis publicar el proyecto con términos claros, añadid un `LICENSE` en la raíz del repo.

Contacto
-------

Si necesitás que también prepare un README separado y detallado para el backend (`server/`), o que agregue un `.env.example` y adapte la configuración para desarrollo, decíme y lo hago.

