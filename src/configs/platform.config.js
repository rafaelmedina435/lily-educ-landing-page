/**
 * La landing vive aparte de la plataforma Lily Educ. El acceso al portal
 * y el formulario de pre-matrícula siguen en la plataforma, así que esos
 * botones salen del sitio hacia esta URL.
 */
export const PLATFORM_URL = (
    import.meta.env.VITE_PLATFORM_URL ?? 'http://localhost:5173'
).replace(/\/$/, '')

export const SIGN_IN_URL = `${PLATFORM_URL}/sign-in`
export const PRE_ENROLLMENT_URL = `${PLATFORM_URL}/pre-matricula`
