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
 * Devuelve `copiar(clave, valor)` y la clave del último dato copiado,
 * para poder mostrar el «Copiado» junto al que corresponde.
 */
export const useContactAction = () => {
    const [copiado, setCopiado] = useState(null)

    const copiar = useCallback(async (clave, valor) => {
        try {
            await navigator.clipboard.writeText(valor)
        } catch {
            return false
        }

        setCopiado(clave)
        window.setTimeout(
            () => setCopiado((actual) => (actual === clave ? null : actual)),
            2000,
        )

        return true
    }, [])

    return { copiado, activar: copiar }
}

const Copiado = () => (
    <span
        className="inline-flex items-center gap-1 text-xs font-bold"
        style={{ color: 'var(--lc-green)' }}
    >
        <PiCheckBold />
        Copiado
    </span>
)

/**
 * Un dato de contacto pulsable. Es un enlace de verdad (`tel:`,
 * `mailto:`), así el celular abre el marcador o la app de correo.
 *
 * - Sin `copyButton`: en escritorio el clic copia el dato en vez de
 *   seguir el enlace (útil para teléfonos).
 * - Con `copyButton`: el enlace siempre se abre y al lado queda un botón
 *   visible para copiar (útil para el correo).
 */
export const ContactValue = ({
    value,
    href,
    itemKey,
    copiado,
    onActivate,
    copyButton = false,
    className = '',
}) => {
    const activo = copiado === itemKey

    const alPulsarEnlace = async (event) => {
        if (copyButton || puedeMarcar()) {
            return
        }

        event.preventDefault()
        const ok = await onActivate(itemKey, value)

        // Sin permiso de portapapeles (o sin HTTPS): queda el enlace
        if (!ok && href) {
            window.location.href = href
        }
    }

    if (copyButton) {
        return (
            <span
                className={`inline-flex items-center gap-1 text-sm ${className}`}
            >
                <a
                    href={href}
                    title={`Escribir a ${value}`}
                    className="rounded-lg px-2 py-1 text-[#4a554d] underline-offset-2 transition hover:bg-[rgba(46,58,51,.06)] hover:underline"
                >
                    {value}
                </a>
                <button
                    type="button"
                    onClick={() => onActivate(itemKey, value)}
                    title="Copiar"
                    aria-label={`Copiar ${value}`}
                    className="inline-flex items-center rounded-lg p-1.5 text-[#7d877f] transition hover:bg-[rgba(46,58,51,.06)] hover:text-[#4a554d]"
                >
                    {activo ? <Copiado /> : <PiCopySimpleBold />}
                </button>
            </span>
        )
    }

    return (
        <a
            href={href}
            onClick={alPulsarEnlace}
            title={`${value} — pulsa para llamar o copiar`}
            className={`group inline-flex items-center gap-2 rounded-lg px-2 py-1 text-sm transition hover:bg-[rgba(46,58,51,.06)] ${className}`}
        >
            <span className="text-[#4a554d]">{value}</span>
            {activo ? (
                <Copiado />
            ) : (
                <PiCopySimpleBold className="text-xs text-[#a3aca5] opacity-0 transition group-hover:opacity-100" />
            )}
        </a>
    )
}
