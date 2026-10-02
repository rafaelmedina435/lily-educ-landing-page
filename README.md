# Lily Educ — Landing La Colmena

Sitio público del Colegio Bilingüe La Colmena (Aguadulce, Coclé), extraído
de `lily-educ-front-end` para trabajarlo por separado.

## Páginas

| Ruta          | Vista                              |
| ------------- | ---------------------------------- |
| `/`           | `src/views/landing/LaColmena.jsx`  |
| `/reglamento` | `src/views/landing/Reglamento.jsx` |
| `/historia`   | `src/views/landing/Historia.jsx`   |
| `/la-colmena` | redirige a `/` (ruta anterior)     |

Los datos del colegio (niveles, contacto, reglamento, historia) están en
`src/views/landing/lacolmenaData.js` y las fotos en `public/img/lacolmena/`.

## Portal

El botón «Portal» lleva a Académica Net (`https://www.academicanet.com/`),
definido en `src/configs/platform.config.js`. La pre-matrícula vive en la
landing (`/pre-matricula`).

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
2. **Domain management**: agregar `lacolmena.edu.pa`, que es el dominio que ya
   declaran `index.html` (canonical), `public/robots.txt` y
   `public/sitemap.xml`.

Cada push a `main` despliega producción; las demás ramas y los pull requests
generan vistas previas, marcadas con `X-Robots-Tag: noindex` para que no las
indexen los buscadores.
