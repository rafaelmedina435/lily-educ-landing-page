# Lily Educ — Landing La Colmena

Sitio público del Colegio Bilingüe La Colmena (Aguadulce, Coclé), extraído
de `lily-educ-front-end` para trabajarlo por separado.

## Páginas

| Ruta          | Vista                              |
| ------------- | ---------------------------------- |
| `/`           | `src/views/landing/LaColmena.jsx`  |
| `/reglamento` | `src/views/landing/Reglamento.jsx` |
| `/la-colmena` | redirige a `/` (ruta anterior)     |

Los datos del colegio (niveles, contacto, reglamento) están en
`src/views/landing/lacolmenaData.js` y las fotos en `public/img/lacolmena/`.

## Enlaces a la plataforma

«Portal» y «Pre-matrícula» siguen viviendo en la plataforma. Su URL se
configura con `VITE_PLATFORM_URL` (ver `.env.example`); por defecto
`http://localhost:5173`.

## Scripts

```bash
npm install
npm run dev       # desarrollo
npm run build     # genera build/
npm run preview   # sirve build/ localmente
```

## Despliegue en Netlify

La configuración vive en `netlify.toml`: compila con `npm run build`, publica
`build/`, manda todas las rutas a `index.html` (React Router resuelve en el
cliente) y cachea los assets con hash.

Para conectar el sitio:

1. En Netlify → **Add new site → Import an existing project** y elegir este
   repositorio. El comando de build y la carpeta a publicar los toma de
   `netlify.toml`; no hace falta escribirlos.
2. **Site configuration → Environment variables**: crear `VITE_PLATFORM_URL`
   con la URL de la plataforma (sin barra final). Sin ella los botones
   «Portal de acudientes» y «Pre-matrícula» quedan apuntando a
   `http://localhost:5173`, porque Vite incrusta el valor al compilar.
3. **Domain management**: agregar `lacolmena.edu.pa`, que es el dominio que ya
   declaran `index.html` (canonical), `public/robots.txt` y
   `public/sitemap.xml`.

Cada push a `main` despliega producción; las demás ramas y los pull requests
generan vistas previas, marcadas con `X-Robots-Tag: noindex` para que no las
indexen los buscadores.

Al cambiar `VITE_PLATFORM_URL` hay que volver a desplegar (**Deploys →
Trigger deploy**): el valor viejo quedó dentro del JavaScript compilado.
