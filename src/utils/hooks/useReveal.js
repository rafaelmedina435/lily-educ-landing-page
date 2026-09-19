import { useEffect, useRef, useState } from 'react'

/**
 * Marca un elemento como visible la primera vez que entra en pantalla.
 * Se usa para las animaciones de entrada de la landing; si el visitante
 * pidió reducir el movimiento, aparece de una vez.
 */
const useReveal = ({
    threshold = 0.15,
    rootMargin = '0px 0px -60px 0px',
} = {}) => {
    const ref = useRef(null)
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const node = ref.current

        if (!node) {
            return undefined
        }

        const reduced = window.matchMedia?.(
            '(prefers-reduced-motion: reduce)',
        )?.matches

        if (reduced || typeof IntersectionObserver === 'undefined') {
            setVisible(true)
            return undefined
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true)
                    observer.disconnect()
                }
            },
            { threshold, rootMargin },
        )

        observer.observe(node)
        return () => observer.disconnect()
    }, [threshold, rootMargin])

    return [ref, visible]
}

export default useReveal
