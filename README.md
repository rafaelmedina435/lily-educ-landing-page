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
