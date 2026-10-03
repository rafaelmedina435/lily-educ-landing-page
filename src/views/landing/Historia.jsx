import { Link } from 'react-router'
import {
    PiArrowRightBold,
    PiBookOpenTextDuotone,
    PiCpuDuotone,
    PiHeartDuotone,
    PiSparkleDuotone,
} from 'react-icons/pi'
import { SCHOOL, HISTORY } from './lacolmenaData'
import { THEME, Crest, Hexagon, HoneycombLayer, Reveal } from './brand'
import { SubpageHeader, SubpageFooter } from './Subpage'
import HistoryTimeline from './HistoryTimeline'
import ApplyButton, { PRE_ENROLLMENT_PATH } from './ApplyButton'
import Seo from '@/components/shared/Seo'

const COMMITMENT_ICONS = {
    book: PiBookOpenTextDuotone,
    chip: PiCpuDuotone,
    heart: PiHeartDuotone,
}

/**
 * Reseña histórica del colegio: resumen con cifras, línea del tiempo
 * con los hitos y los compromisos que mantiene hoy.
 */
const Historia = () => (
    <div
        style={{ ...THEME, backgroundColor: 'var(--lc-cream)' }}
        className="min-h-screen font-sans"
    >
        <Seo
            title={`Nuestra historia — ${SCHOOL.name}`}
            description={`Desde ${SCHOOL.foundedYear}, el ${SCHOOL.name} forma a la niñez y juventud de ${SCHOOL.city}, ${SCHOOL.province}. Conoce sus orígenes y sus hitos.`}
            canonical="/historia"
        />

        <SubpageHeader />

        <main>
            <section
                className="relative overflow-hidden border-b"
                style={{
                    backgroundColor: 'var(--lc-green)',
                    borderColor: 'rgba(245,197,24,.2)',
                }}
            >
                <HoneycombLayer tone="light" opacity={0.07} />
                <div className="relative mx-auto flex max-w-5xl flex-col gap-8 px-4 py-14 sm:py-20 md:flex-row md:items-center">
                    <div className="flex-1">
                        <p
                            className="mb-3 text-sm font-bold uppercase tracking-[0.2em]"
                            style={{ color: 'var(--lc-gold)' }}
                        >
                            Nuestra historia
                        </p>
                        <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
                            Desde {SCHOOL.foundedYear}, sembrando el néctar de
                            la sabiduría
                        </h1>
                        <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/75">
                            Lo que empezó con 25 estudiantes en {SCHOOL.city} es
                            hoy una comunidad educativa que acompaña a sus
                            «Colmenitas» desde Preescolar hasta Media.
                        </p>
                    </div>
                    <Crest className="hidden h-36 w-auto shrink-0 drop-shadow-lg md:block" />
                </div>
            </section>

            <div className="relative overflow-hidden">
                <HoneycombLayer />
                <div className="relative mx-auto max-w-5xl space-y-16 px-4 py-16">
                    {/* ── Cómo empezamos ─────────────────────────── */}
                    <Reveal>
                        <section className="grid gap-10 md:grid-cols-[1.4fr_1fr] md:items-center">
                            <div className="space-y-4">
                                <h2
                                    className="text-2xl font-bold sm:text-3xl"
                                    style={{ color: 'var(--lc-green)' }}
                                >
                                    Cómo empezamos
                                </h2>
                                {HISTORY.intro.map((paragraph) => (
                                    <p
                                        key={paragraph}
                                        className="text-base leading-relaxed text-[#4a554d]"
                                    >
                                        {paragraph}
                                    </p>
                                ))}
                            </div>

                            <div className="grid grid-cols-3 gap-3 md:grid-cols-1">
                                {HISTORY.stats.map((stat) => (
                                    <div
                                        key={stat.label}
                                        className="rounded-2xl border bg-white p-5 text-center"
                                        style={{
                                            borderColor: 'rgba(46,58,51,.1)',
                                        }}
                                    >
                                        <p
                                            className="text-3xl font-bold sm:text-4xl"
                                            style={{ color: 'var(--lc-green)' }}
                                        >
                                            {stat.value}
                                        </p>
                                        <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-[#6b766e] sm:text-sm">
                                            {stat.label}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </Reveal>

                    {/* ── Línea del tiempo ───────────────────────── */}
                    <HistoryTimeline />

                    {/* ── Compromisos ────────────────────────────── */}
                    <section>
                        <h2
                            className="mb-8 text-2xl font-bold sm:text-3xl"
                            style={{ color: 'var(--lc-green)' }}
                        >
                            Lo que nos mueve hoy
                        </h2>
                        <div className="grid gap-5 md:grid-cols-3">
                            {HISTORY.commitments.map((item, index) => {
                                const Icon =
                                    COMMITMENT_ICONS[item.icon] ||
                                    PiSparkleDuotone

                                return (
                                    <Reveal
                                        key={item.title}
                                        delay={index * 80}
                                        className="rounded-2xl border bg-white p-7"
                                        style={{
                                            borderColor: 'rgba(46,58,51,.1)',
                                        }}
                                    >
                                        <Hexagon
                                            className="mb-5 h-14 w-14 text-2xl"
                                            style={{
                                                backgroundColor:
                                                    'rgba(245,197,24,.22)',
                                                color: 'var(--lc-green)',
                                            }}
                                        >
                                            <Icon />
                                        </Hexagon>
                                        <h3
                                            className="mb-2 text-lg font-bold"
                                            style={{ color: 'var(--lc-green)' }}
                                        >
                                            {item.title}
                                        </h3>
                                        <p className="text-sm leading-relaxed text-[#67726a]">
                                            {item.description}
                                        </p>
                                    </Reveal>
                                )
                            })}
                        </div>
                    </section>

                    {/* ── Cierre ─────────────────────────────────── */}
                    <Reveal>
                        <section
                            className="rounded-3xl p-8 text-center sm:p-12"
                            style={{ backgroundColor: 'var(--lc-green)' }}
                        >
                            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/85">
                                {HISTORY.closing}
                            </p>
                            <p
                                className="mt-5 text-lg font-bold italic"
                                style={{ color: 'var(--lc-gold)' }}
                            >
                                «{SCHOOL.motto}»
                            </p>
                        </section>
                    </Reveal>

                    <div className="flex flex-wrap gap-3">
                        <Link
                            to={PRE_ENROLLMENT_PATH}
                            className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-base font-bold transition hover:brightness-95"
                            style={{
                                backgroundColor: 'var(--lc-gold)',
                                color: 'var(--lc-green-deep)',
                            }}
                        >
                            Iniciar pre-matrícula
                            <PiArrowRightBold />
                        </Link>
                        <Link
                            to="/#contacto"
                            className="inline-flex items-center gap-2 rounded-full border-2 px-7 py-3.5 text-base font-bold transition hover:bg-white"
                            style={{
                                borderColor: 'rgba(46,58,51,.2)',
                                color: 'var(--lc-green)',
                            }}
                        >
                            Pedir más información
                        </Link>
                    </div>
                </div>
            </div>
        </main>

        <SubpageFooter />

        <ApplyButton />
    </div>
)

export default Historia
