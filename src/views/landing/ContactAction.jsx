import { useCallback, useState } from 'react'
import { PiCheckBold, PiCopySimpleBold } from 'react-icons/pi'

/**
 * Un puntero grueso significa dedo: el aparato puede llamar o abrir el
 * correo. En escritorio no tiene sentido lanzar `tel:`, así que allí lo
 * útil es copiar el dato al portapapeles.
 */
const puedeMarcar = () =>
    typeof window !== 'undefined' &&
    typeof window.matchMedia === 'function' &&
    window.matchMedia('(pointer: coarse)').matches

/**
 * Devuelve `activar(clave, valor, href)` y la clave del último dato
 * copiado, para poder mostrar el «Copiado» junto al que corresponde.
 */
export const useContactAction = () => {
    const [copiado, setCopiado] = useState(null)

    const activar = useCallback(async (clave, valor, href) => {
        if (puedeMarcar() && href) {
            window.location.href = href

            return
        }

        try {
            await navigator.clipboard.writeText(valor)
            setCopiado(clave)
            window.setTimeout(
                () =>
                    setCopiado((actual) => (actual === clave ? null : actual)),
                2000,
            )
        } catch {
            // Sin permiso de portapapeles (o sin HTTPS): queda el enlace
            if (href) {
                window.location.href = href
            }
        }
    }, [])

    return { copiado, activar }
}

/**
 * Un dato de contacto pulsable. En móvil marca o abre el correo; en
 * escritorio lo copia y avisa.
 */
export const ContactValue = ({
    value,
    href,
    itemKey,
    copiado,
    onActivate,
    className = '',
}) => {
    const activo = copiado === itemKey

    return (
        <button
            type="button"
            onClick={() => onActivate(itemKey, value, href)}
            title={href ? `${value} — pulsa para usar o copiar` : value}
            className={`group inline-flex items-center gap-2 rounded-lg px-2 py-1 text-sm transition hover:bg-[rgba(46,58,51,.06)] ${className}`}
        >
            <span className="text-[#4a554d]">{value}</span>
            {activo ? (
                <span
                    className="inline-flex items-center gap-1 text-xs font-bold"
                    style={{ color: 'var(--lc-green)' }}
                >
                    <PiCheckBold />
                    Copiado
                </span>
            ) : (
                <PiCopySimpleBold className="text-xs text-[#a3aca5] opacity-0 transition group-hover:opacity-100" />
            )}
        </button>
    )
}
