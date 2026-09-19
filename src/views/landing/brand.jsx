import { useId } from 'react'
import { SCHOOL } from './lacolmenaData'
import useRevealHook from '@/utils/hooks/useReveal'

/**
 * Identidad del Colegio Bilingüe La Colmena.
 * La comparten la landing y el formulario público de pre-matrícula.
 * Paleta tomada del escudo bordado y de los folletos oficiales.
 */
export const THEME = {
    '--lc-green': '#2E3A33',
    '--lc-green-soft': '#3D4A42',
    '--lc-green-deep': '#222B26',
    '--lc-gold': '#F5C518',
    '--lc-gold-soft': '#FFD95C',
    '--lc-cream': '#FBF7EC',
}

export const Crest = ({ className }) => (
    <img
        src="/img/lacolmena/logo-la-colmena.png"
        alt={`Escudo del ${SCHOOL.name}`}
        className={className}
    />
)

/**
 * Patrón de panal: la marca es una colmena.
 *
 * El id del `<pattern>` se genera por instancia. Con un id fijo, todos
 * los `url(#id)` de la página resolverían al primer patrón del documento
 * y el `currentColor` de las demás secciones se perdería: todas saldrían
 * del color de la primera.
 */
export const Honeycomb = ({ className, opacity = 0.06 }) => {
    const patternId = `lc-hex-${useId()}`

    return (
        <svg className={className} aria-hidden="true">
            <defs>
                <pattern
                    id={patternId}
                    width="56"
                    height="97"
                    patternUnits="userSpaceOnUse"
                    patternTransform="scale(0.9)"
                >
                    <path
                        d="M28 0 L56 16 L56 48 L28 64 L0 48 L0 16 Z M28 64 L56 80 L56 112 M0 80 L28 64"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                    />
                </pattern>
            </defs>
            <rect
                width="100%"
                height="100%"
                fill={`url(#${patternId})`}
                style={{ opacity }}
            />
        </svg>
    )
}

/**
 * Capa de panal para el fondo de una sección. Da a toda la página la
 * misma textura del hero: dorado sobre los fondos verdes, verde sobre
 * los claros, y siempre muy tenue para que no compita con el texto.
 *
 * La sección que la use debe ser `relative overflow-hidden` y llevar su
 * contenido dentro de un contenedor `relative`.
 */
export const HoneycombLayer = ({ tone = 'dark', opacity }) => (
    <Honeycomb
        className={`pointer-events-none absolute inset-0 h-full w-full ${
            tone === 'light' ? 'text-[#F5C518]' : 'text-[#2E3A33]'
        }`}
        opacity={opacity ?? (tone === 'light' ? 0.06 : 0.04)}
    />
)

/**
 * Contenedor hexagonal para iconos. Es la forma en que la colmena entra
 * en la página sin convertirla en papel tapiz: la celda se repite en los
 * iconos, no en el fondo.
 */
export const Hexagon = ({ children, className = '', style }) => (
    <span
        className={`flex items-center justify-center ${className}`}
        style={{
            clipPath:
                'polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%)',
            ...style,
        }}
    >
        {children}
    </span>
)

/** Marca completa: escudo + nombre, para encabezados. */
export const BrandMark = ({ crestClassName = 'h-11 w-auto', light = true }) => (
    <span className="flex items-center gap-3">
        <Crest className={crestClassName} />
        <span
            className="leading-tight"
            style={{ color: light ? '#fff' : 'var(--lc-green)' }}
        >
            <span className="block text-[11px] uppercase tracking-[0.18em] opacity-70">
                Colegio Bilingüe
            </span>
            <span className="block text-lg font-bold">La Colmena</span>
        </span>
    </span>
)

/** Fotos del colegio. Reemplazables por originales sin tocar el código. */
export const PHOTOS = {
    sede: '/img/lacolmena/sede.jpg',
    sedeDuotono: '/img/lacolmena/sede-duotono.jpg',
    estudiante: '/img/lacolmena/estudiante.jpg',
    uniforme: '/img/lacolmena/uniforme.jpg',
}

/** Envoltura que anima la entrada de una sección al hacer scroll. */
export const Reveal = ({ children, delay = 0, className = '', style }) => {
    const [ref, visible] = useRevealHook()

    return (
        <div
            ref={ref}
            className={className}
            style={{
                ...style,
                opacity: visible ? 1 : 0,
                transform: visible ? 'none' : 'translateY(26px)',
                transition: `opacity .7s ease ${delay}ms, transform .7s cubic-bezier(.22,.8,.3,1) ${delay}ms`,
            }}
        >
            {children}
        </div>
    )
}
