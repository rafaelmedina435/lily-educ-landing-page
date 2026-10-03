import { useEffect, useRef, useState } from 'react'
import { HISTORY } from './lacolmenaData'
import { Hexagon, Reveal } from './brand'
import { Bee } from './ApplyButton'

/** La abeja se posa sobre la última celda en lugar de tapar su «Hoy». */
const LANDING_GAP = 38

/**
 * Rodeo de la abeja alrededor de cada celda: empieza a apartarse a
 * `DETOUR_REACH` px del centro de la celda y se separa hasta
 * `DETOUR_WIDTH` px de la ruta, lo justo para no tocar el año.
 */
const DETOUR_REACH = 70
const DETOUR_WIDTH = 50
const DETOUR_RAMP = 0.4

/** Altura de la pantalla (0–1) que marca hasta dónde ha volado la abeja. */
const VIEWPORT_ANCHOR = 0.55

/**
 * Celda de panal sobre la línea del tiempo. Se rellena de miel cuando la
 * abeja ya pasó por ella.
 */
const Cell = ({ label, filled, cardSide, className = 'top-0' }) => (
    <span
        data-cell
        data-card={cardSide}
        className={`absolute left-0 z-10 md:left-1/2 md:-translate-x-1/2 ${className}`}
    >
        <Hexagon
            className="relative h-16 w-14"
            style={{ backgroundColor: 'var(--lc-gold)' }}
        >
            <Hexagon
                className="absolute inset-[3px] transition-colors duration-500"
                style={{
                    backgroundColor: filled
                        ? 'var(--lc-gold)'
                        : 'var(--lc-cream)',
                }}
            />
            <span
                className="relative text-xs font-extrabold tracking-wide"
                style={{ color: 'var(--lc-green-deep)' }}
            >
                {label}
            </span>
        </Hexagon>
    </span>
)

/** Hexágono alargado: arriba y abajo rectos, los lados en punta. */
const CARD_SHAPE = {
    clipPath:
        'polygon(var(--lc-tip) 0, calc(100% - var(--lc-tip)) 0, 100% 50%, calc(100% - var(--lc-tip)) 100%, var(--lc-tip) 100%, 0 50%)',
}

/**
 * Tarjeta con forma de celda. El `clip-path` recortaría el borde y la
 * sombra, así que el borde es una capa de color debajo del relleno y la
 * sombra (`drop-shadow`) va en el contenedor, que no está recortado.
 */
const CellCard = ({ filled, children }) => (
    <div
        className="relative transition duration-500 [--lc-tip:18px] hover:-translate-y-1 sm:[--lc-tip:26px]"
        style={{
            filter: filled
                ? 'drop-shadow(0 16px 22px rgba(46,58,51,.16))'
                : 'drop-shadow(0 8px 14px rgba(46,58,51,.08))',
        }}
    >
        <div
            className="absolute inset-0 transition-colors duration-500"
            style={{
                ...CARD_SHAPE,
                backgroundColor: filled
                    ? 'rgba(245,197,24,.9)'
                    : 'rgba(46,58,51,.14)',
            }}
            aria-hidden="true"
        />
        <div
            className="relative m-[2px] bg-white px-8 py-7 sm:px-11"
            style={CARD_SHAPE}
        >
            {children}
        </div>
    </div>
)

/**
 * Sigue el scroll y mueve la abeja por la línea. La posición se escribe
 * directo en el DOM (sin re-render por cuadro); el estado solo cambia
 * cuando la abeja llega a una celda nueva.
 */
const useFlight = () => {
    const listRef = useRef(null)
    const routeRef = useRef(null)
    const trailRef = useRef(null)
    const beeRef = useRef(null)
    const headingRef = useRef(null)
    const [reached, setReached] = useState(0)

    useEffect(() => {
        const list = listRef.current

        if (!list) {
            return undefined
        }

        const cells = () => [...list.querySelectorAll('[data-cell]')]
        const reduced = window.matchMedia?.(
            '(prefers-reduced-motion: reduce)',
        )?.matches

        const center = (cell) => {
            const box = cell.getBoundingClientRect()
            return box.top + box.height / 2
        }

        // La ruta va del centro de la primera celda al de la última.
        const measure = () => {
            const rect = list.getBoundingClientRect()
            const all = cells()
            const start = center(all[0]) - rect.top
            const length = Math.max(0, center(all.at(-1)) - rect.top - start)

            for (const line of [routeRef.current, trailRef.current]) {
                line.style.top = `${start}px`
                line.style.height = `${length}px`
            }
            return { rect, start, length }
        }

        if (reduced) {
            measure()
            trailRef.current.style.transform = 'translateX(-50%) scaleY(1)'
            setReached(cells().length)
            return undefined
        }

        let frame = 0
        let last = 0

        const update = () => {
            frame = 0
            const { rect, start, length } = measure()
            const flown = Math.min(
                length,
                Math.max(
                    0,
                    window.innerHeight * VIEWPORT_ANCHOR - rect.top - start,
                ),
            )

            trailRef.current.style.transform = `translateX(-50%) scaleY(${length ? flown / length : 0})`

            // Rodea cada celda por el costado libre: en pantallas anchas el
            // contrario a su tarjeta; en el teléfono, hacia las tarjetas,
            // porque a la izquierda de la ruta no hay espacio.
            const beeY = rect.top + start + flown
            const wide = window.matchMedia('(min-width: 768px)').matches
            let detour = 0

            for (const cell of cells()) {
                const side = cell.dataset.card
                const near = 1 - Math.abs(beeY - center(cell)) / DETOUR_REACH

                if (side && near > 0) {
                    const t = Math.min(1, near / DETOUR_RAMP)
                    detour =
                        DETOUR_WIDTH *
                        t *
                        t *
                        (3 - 2 * t) *
                        (wide && side === 'right' ? -1 : 1)
                    break
                }
            }

            beeRef.current.style.transform = `translate3d(calc(-50% + ${detour}px), ${start - 20 + Math.min(flown, length - LANDING_GAP)}px, 0)`

            // De cabeza al bajar, de frente al subir.
            if (flown !== last) {
                headingRef.current.style.transform = `rotate(${flown > last ? 180 : 0}deg)`
                last = flown
            }

            setReached(
                cells().filter((cell) => center(cell) <= beeY + 1).length,
            )
        }

        const schedule = () => {
            if (!frame) {
                frame = requestAnimationFrame(update)
            }
        }

        update()
        window.addEventListener('scroll', schedule, { passive: true })
        window.addEventListener('resize', schedule)

        return () => {
            cancelAnimationFrame(frame)
            window.removeEventListener('scroll', schedule)
            window.removeEventListener('resize', schedule)
        }
    }, [])

    return { listRef, routeRef, trailRef, beeRef, headingRef, reached }
}

/**
 * Línea del tiempo vertical: una abeja baja por la línea a medida que se
 * hace scroll y va llenando las celdas de cada hito. En pantallas anchas
 * las tarjetas se alternan a los lados; en el teléfono quedan a la
 * derecha de la línea. Siempre es vertical.
 */
const HistoryTimeline = () => {
    const { listRef, routeRef, trailRef, beeRef, headingRef, reached } =
        useFlight()
    const total = HISTORY.milestones.length

    return (
        <section>
            <div className="mb-12 grid gap-4 md:grid-cols-[1.2fr_1fr] md:items-end md:gap-12">
                <div>
                    <p
                        className="mb-3 flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.2em]"
                        style={{ color: '#b08a00' }}
                    >
                        <span
                            className="h-px w-8"
                            style={{ backgroundColor: 'currentColor' }}
                        />
                        Momentos que nos definen
                    </p>
                    <h2
                        className="text-3xl font-bold leading-tight sm:text-4xl"
                        style={{ color: 'var(--lc-green)' }}
                    >
                        El vuelo que nos trajo hasta aquí
                    </h2>
                </div>
                <p className="text-base leading-relaxed sm:text-lg text-[#5b665e]">
                    Una colmena se construye{' '}
                    <strong style={{ color: 'var(--lc-green)' }}>
                        celda a celda
                    </strong>
                    , y nuestra historia también. Cada generación ha dejado algo
                    que nos permite seguir creciendo juntos.
                </p>
            </div>

            <ol ref={listRef} className="relative">
                {/* Ruta punteada y el tramo que ya voló la abeja */}
                <span
                    ref={routeRef}
                    className="absolute left-7 -translate-x-1/2 border-l-2 border-dashed md:left-1/2"
                    style={{
                        borderColor: 'rgba(176,138,0,.45)',
                    }}
                    aria-hidden="true"
                />
                <span
                    ref={trailRef}
                    className="absolute left-7 w-[3px] origin-top rounded-full md:left-1/2"
                    style={{
                        transform: 'translateX(-50%) scaleY(0)',
                        backgroundColor: 'var(--lc-gold)',
                        boxShadow: '0 0 10px rgba(245,197,24,.55)',
                    }}
                    aria-hidden="true"
                />

                {/* Rodea las celdas (ver `useFlight`) y, por si roza una,
                    va debajo de ellas (z-10) para no tapar el año. */}
                <span
                    ref={beeRef}
                    className="pointer-events-none absolute left-7 z-[5] motion-reduce:hidden md:left-1/2"
                    style={{ top: 0, transform: 'translate3d(-50%, 0, 0)' }}
                    aria-hidden="true"
                >
                    <span className="lc-bee-sway block">
                        <span
                            ref={headingRef}
                            className="block h-10 w-10 drop-shadow-md transition-transform duration-300"
                            style={{ transform: 'rotate(180deg)' }}
                        >
                            <Bee />
                        </span>
                    </span>
                </span>

                {HISTORY.milestones.map((milestone, index) => {
                    const filled = index < reached
                    const right = index % 2 === 1

                    return (
                        <li
                            key={milestone.year}
                            className={`relative pl-20 md:pl-0 ${
                                index > 0 ? 'mt-10 md:-mt-12' : ''
                            }`}
                        >
                            {/* La celda del año queda a la altura de la punta */}
                            <Cell
                                label={milestone.year}
                                filled={filled}
                                cardSide={right ? 'right' : 'left'}
                                className="top-1/2 -translate-y-1/2"
                            />
                            <span
                                className={`absolute top-1/2 hidden w-6 border-t-2 border-dashed transition-colors duration-500 md:block ${
                                    right
                                        ? 'left-[calc(50%+1.75rem)]'
                                        : 'right-[calc(50%+1.75rem)]'
                                }`}
                                style={{
                                    borderColor: filled
                                        ? 'var(--lc-gold)'
                                        : 'rgba(176,138,0,.45)',
                                }}
                                aria-hidden="true"
                            />

                            <Reveal
                                delay={80}
                                className={`md:w-[calc(50%-3.25rem)] ${
                                    right ? 'md:ml-auto' : ''
                                }`}
                            >
                                <CellCard filled={filled}>
                                    <p
                                        className="text-xs font-extrabold uppercase tracking-[0.18em]"
                                        style={{ color: '#b08a00' }}
                                    >
                                        {milestone.kicker}
                                    </p>
                                    <h3
                                        className="mt-2 text-xl sm:text-2xl font-bold leading-snug"
                                        style={{ color: 'var(--lc-green)' }}
                                    >
                                        {milestone.title}
                                    </h3>
                                    <p className="mt-2 text-base leading-relaxed text-[#5b665e]">
                                        {milestone.description}
                                    </p>
                                    <span
                                        className="mt-4 inline-flex rounded-full px-3 py-1 text-[11px] font-extrabold uppercase tracking-[0.12em]"
                                        style={{
                                            backgroundColor:
                                                'rgba(245,197,24,.2)',
                                            color: '#806600',
                                        }}
                                    >
                                        {milestone.tag}
                                    </span>
                                </CellCard>
                            </Reveal>
                        </li>
                    )
                })}

                {/* Última celda: la historia sigue */}
                <li className="relative mt-14 pl-20 md:pl-0 md:pt-20 md:text-center">
                    <Cell label="Hoy" filled={reached > total} />
                    <Reveal className="pt-1 md:pt-0">
                        <p
                            className="text-xs font-extrabold uppercase tracking-[0.2em]"
                            style={{ color: '#b08a00' }}
                        >
                            Y el vuelo continúa
                        </p>
                        <p
                            className="mt-2 text-3xl font-bold leading-tight sm:text-4xl"
                            style={{ color: 'var(--lc-green)' }}
                        >
                            Una celda se convierte en otra.
                        </p>
                        <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed sm:text-lg text-[#5b665e]">
                            Lo que comenzó con 25 estudiantes hoy es una
                            comunidad que sigue construyendo futuro. Nuestra
                            historia todavía tiene muchas celdas por llenar.
                        </p>
                    </Reveal>
                </li>
            </ol>
        </section>
    )
}

export default HistoryTimeline
