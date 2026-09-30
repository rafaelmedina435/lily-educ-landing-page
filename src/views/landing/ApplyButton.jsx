import { Link } from 'react-router'

/**
 * Destino del botón. El formulario de aplicación aún no existe, así que
 * por ahora lleva a la sección de admisión; cuando esté listo basta con
 * cambiar esta ruta.
 */
export const APPLY_HREF = '/#admision'

/** Celda de panal con tres celdas internas, en los colores de la marca. */
const HoneycombCell = () => (
    <svg viewBox="0 0 48 48" className="h-full w-full" aria-hidden="true">
        <path
            d="M24 2 L43 13 L43 35 L24 46 L5 35 L5 13 Z"
            fill="#F5C518"
            stroke="#FFD95C"
            strokeWidth="2"
            strokeLinejoin="round"
        />
        <g fill="#E0A800" stroke="#2E3A33" strokeWidth="1.2">
            <path d="M24 12 L30 15.5 L30 22.5 L24 26 L18 22.5 L18 15.5 Z" />
            <path d="M17 24 L23 27.5 L23 34.5 L17 38 L11 34.5 L11 27.5 Z" />
            <path d="M31 24 L37 27.5 L37 34.5 L31 38 L25 34.5 L25 27.5 Z" />
        </g>
        {/* Gota de miel */}
        <path
            d="M24 30 C24 30 21 33.5 21 35.5 A3 3 0 0 0 27 35.5 C27 33.5 24 30 24 30 Z"
            fill="#FFF3C4"
            opacity=".9"
        />
    </svg>
)

/** Abeja mirando hacia arriba: así, al girar en órbita, vuela de frente. */
const Bee = () => (
    <svg viewBox="0 0 24 24" className="h-full w-full" aria-hidden="true">
        <g
            className="lc-bee-wings"
            fill="#ffffff"
            fillOpacity=".9"
            stroke="#222B26"
            strokeWidth=".5"
        >
            <ellipse cx="7" cy="10" rx="5" ry="3.2" />
            <ellipse cx="17" cy="10" rx="5" ry="3.2" />
        </g>
        <ellipse
            cx="12"
            cy="13"
            rx="4.2"
            ry="6.5"
            fill="#F5C518"
            stroke="#222B26"
            strokeWidth=".8"
        />
        <path
            d="M8.1 11 H15.9 M7.9 14 H16.1 M8.6 17 H15.4"
            stroke="#222B26"
            strokeWidth="1.6"
            strokeLinecap="round"
        />
        <circle cx="12" cy="6" r="2.6" fill="#222B26" />
        <path
            d="M11 4 L9.5 1.5 M13 4 L14.5 1.5"
            stroke="#222B26"
            strokeWidth=".9"
            strokeLinecap="round"
        />
        <path d="M12 19.5 L11 21.5 H13 Z" fill="#222B26" />
    </svg>
)

/**
 * Botón flotante «Aplicar ahora». Queda fijo a media altura en el borde
 * derecho, en escritorio y en móvil; en móvil se reduce a una pestaña
 * con solo el panal, pegada al borde, para tapar lo menos posible. Una abeja ronda el panal y un
 * brillo lo recorre de vez en cuando. Con «reducir movimiento» activo
 * todo se queda quieto.
 */
const ApplyButton = () => (
    <Link
        to={APPLY_HREF}
        className="lc-apply group fixed top-1/2 right-0 z-40 flex -translate-y-1/2 items-center rounded-l-full border-2 border-r-0 py-1 pr-1.5 pl-1 font-bold transition duration-300 hover:-translate-x-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F5C518] sm:right-6 sm:gap-2.5 sm:rounded-full sm:border-r-2 sm:py-1.5 sm:pr-5 sm:pl-1.5"
        style={{
            background:
                'linear-gradient(135deg, #FFD95C 0%, #F5C518 55%, #E0A800 100%)',
            borderColor: 'var(--lc-green-deep, #222B26)',
            color: 'var(--lc-green-deep, #222B26)',
        }}
    >
        {/* Brillo que cruza el botón; recortado aquí para que la abeja sí
            pueda salirse del borde */}
        <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]">
            <span className="lc-apply-shine absolute inset-y-0 -left-1/2 w-1/2" />
        </span>

        <span
            className="relative h-10 w-10 shrink-0 rounded-full p-1"
            style={{ backgroundColor: 'var(--lc-green-deep, #222B26)' }}
        >
            <span className="lc-apply-cell block h-full w-full">
                <HoneycombCell />
            </span>
            {/* La órbita gira; la abeja va montada en su borde */}
            <span className="lc-bee-orbit pointer-events-none absolute inset-0">
                <span className="lc-bee absolute top-1/2 left-1/2 -mt-3.5 -ml-3.5 h-7 w-7">
                    <Bee />
                </span>
            </span>
        </span>

        {/* En móvil solo se ve el panal; el texto queda para lectores de
            pantalla */}
        <span className="sr-only sm:not-sr-only">
            <span className="relative flex flex-col items-center text-center leading-tight">
                <span className="text-[9px] font-bold tracking-[0.16em] uppercase opacity-75">
                    Únete a la colmena
                </span>
                <span className="text-base">Aplicar ahora</span>
            </span>
        </span>
    </Link>
)

export default ApplyButton
