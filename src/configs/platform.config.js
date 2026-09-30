/**
 * La landing vive aparte de la plataforma Lily Educ. El acceso al portal
 * sigue en la plataforma, así que ese botón sale del sitio hacia esta
 * URL. La pre-matrícula ya vive en la landing (/pre-matricula).
 */
export const PLATFORM_URL = (
    import.meta.env.VITE_PLATFORM_URL ?? 'http://localhost:5173'
).replace(/\/$/, '')

export const SIGN_IN_URL = `${PLATFORM_URL}/sign-in`
