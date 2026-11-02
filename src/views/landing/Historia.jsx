import { Link } from 'react-router'
import {
    PiArrowRightBold,
    PiBinocularsDuotone,
    PiBookOpenTextDuotone,
    PiCpuDuotone,
    PiHeartDuotone,
    PiSparkleDuotone,
    PiTargetDuotone,
} from 'react-icons/pi'
import { THEME, Crest, Hexagon, HoneycombLayer, Reveal } from './brand'
import { useLanguage } from './language'
import { SubpageHeader, SubpageFooter } from './Subpage'
import HistoryTimeline from './HistoryTimeline'
import ApplyButton, { PRE_ENROLLMENT_PATH } from './ApplyButton'
import Seo from '@/components/shared/Seo'

const COMMITMENT_ICONS = {
    book: PiBookOpenTextDuotone,
    chip: PiCpuDuotone,
    heart: PiHeartDuotone,
}

const SECTION_TITLE = 'text-2xl font-bold sm:text-3xl'
const SECTION_INTRO = 'mt-3 max-w-3xl text-base leading-relaxed text-[#4a554d]'
const CARD_BORDER = { borderColor: 'rgba(46,58,51,.1)' }

/**
 * Reseña histórica del colegio: resumen con cifras, línea del tiempo
 * con los hitos, misión, visión y valores, los compromisos que mantiene
 * hoy y el compromiso del colegio con el lema.
 */
const Historia = () => {
    const { t, content } = useLanguage()
    const { HISTORY, IDENTITY } = content

    const statements = [
        {
            id: 'mision',
            title: t('history.mission'),
            Icon: PiTargetDuotone,
            ...IDENTITY.mission,
        },
        {
            id: 'vision',
            title: t('history.vision'),
            Icon: PiBinocularsDuotone,
            ...IDENTITY.vision,
        },
    ]

    return (
        <div
            style={{ ...THEME, backgroundColor: 'var(--lc-cream)' }}
            className="min-h-screen font-sans"
        >
            <Seo
                title={t('history.seoTitle')}
                description={t('history.seoDescription')}
                canonical="/historia"
                locale={t('meta.locale')}
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
                                {t('history.eyebrow')}
                            </p>
                            <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
                                {t('history.title')}
                            </h1>
                            <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/75">
                                {t('history.intro')}
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
                                        {t('history.howWeBegan')}
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
                                                borderColor:
                                                    'rgba(46,58,51,.1)',
                                            }}
                                        >
                                            <p
                                                className="text-3xl font-bold sm:text-4xl"
                                                style={{
                                                    color: 'var(--lc-green)',
                                                }}
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

                        {/* ── Misión y visión ────────────────────────── */}
                        <section id="mision-vision" className="scroll-mt-24">
                            <h2
                                className={SECTION_TITLE}
                                style={{ color: 'var(--lc-green)' }}
                            >
                                {t('history.missionVision')}
                            </h2>
                            <p className={SECTION_INTRO}>{HISTORY.renewal}</p>

                            <div className="mt-8 grid gap-5 md:grid-cols-2">
                                {statements.map(
                                    (
                                        {
                                            id,
                                            title,
                                            Icon,
                                            paragraphs,
                                            tagline,
                                        },
                                        index,
                                    ) => (
                                        <Reveal
                                            key={id}
                                            delay={index * 80}
                                            className="flex flex-col rounded-2xl border bg-white p-7"
                                            style={CARD_BORDER}
                                        >
                                            <div className="mb-5 flex items-center gap-4">
                                                <Hexagon
                                                    className="h-14 w-14 shrink-0 text-2xl"
                                                    style={{
                                                        backgroundColor:
                                                            'rgba(245,197,24,.22)',
                                                        color: 'var(--lc-green)',
                                                    }}
                                                >
                                                    <Icon />
                                                </Hexagon>
                                                <h3
                                                    className="text-xl font-bold"
                                                    style={{
                                                        color: 'var(--lc-green)',
                                                    }}
                                                >
                                                    {title}
                                                </h3>
                                            </div>
                                            <div className="space-y-3">
                                                {paragraphs.map((paragraph) => (
                                                    <p
                                                        key={paragraph}
                                                        className="text-sm leading-relaxed text-[#4a554d] sm:text-base"
                                                    >
                                                        {paragraph}
                                                    </p>
                                                ))}
                                            </div>
                                            {/* Al pie, alineada entre las dos tarjetas */}
                                            <div className="mt-auto pt-6">
                                                <p
                                                    className="rounded-xl border-l-4 px-4 py-3 text-sm font-bold italic leading-relaxed sm:text-base"
                                                    style={{
                                                        borderColor:
                                                            'var(--lc-gold)',
                                                        backgroundColor:
                                                            'rgba(245,197,24,.14)',
                                                        color: 'var(--lc-green)',
                                                    }}
                                                >
                                                    {tagline}
                                                </p>
                                            </div>
                                        </Reveal>
                                    ),
                                )}
                            </div>
                        </section>

                        {/* ── Valores ────────────────────────────────── */}
                        <section id="valores" className="scroll-mt-24">
                            <h2
                                className={SECTION_TITLE}
                                style={{ color: 'var(--lc-green)' }}
                            >
                                {t('history.values')}
                            </h2>
                            <p className={SECTION_INTRO}>
                                {IDENTITY.valuesIntro}
                            </p>

                            <ol className="mt-8 grid gap-4 md:grid-cols-2">
                                {IDENTITY.values.map((value, index) => (
                                    <li key={value.title}>
                                        <Reveal
                                            // De a dos, como se ven las filas
                                            delay={(index % 2) * 80}
                                            className="flex h-full gap-4 rounded-2xl border bg-white p-5"
                                            style={CARD_BORDER}
                                        >
                                            <Hexagon
                                                className="h-11 w-11 shrink-0 text-base font-bold"
                                                style={{
                                                    backgroundColor:
                                                        'var(--lc-gold)',
                                                    color: 'var(--lc-green-deep)',
                                                }}
                                            >
                                                {index + 1}
                                            </Hexagon>
                                            <div>
                                                <h3
                                                    className="text-base font-bold"
                                                    style={{
                                                        color: 'var(--lc-green)',
                                                    }}
                                                >
                                                    {value.title}
                                                </h3>
                                                <p className="mt-1 text-sm leading-relaxed text-[#67726a]">
                                                    {value.description}
                                                </p>
                                            </div>
                                        </Reveal>
                                    </li>
                                ))}
                            </ol>
                        </section>

                        {/* ── Compromisos ────────────────────────────── */}
                        <section>
                            <h2
                                className="mb-8 text-2xl font-bold sm:text-3xl"
                                style={{ color: 'var(--lc-green)' }}
                            >
                                {t('history.drivesUs')}
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
                                                borderColor:
                                                    'rgba(46,58,51,.1)',
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
                                                style={{
                                                    color: 'var(--lc-green)',
                                                }}
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

                        {/* ── Nuestro compromiso, que remata en el lema ─ */}
                        <Reveal>
                            <section
                                className="rounded-3xl p-8 text-center sm:p-12"
                                style={{ backgroundColor: 'var(--lc-green)' }}
                            >
                                <h2
                                    className="mb-4 text-sm font-bold uppercase tracking-[0.2em]"
                                    style={{ color: 'var(--lc-gold)' }}
                                >
                                    {t('history.commitment')}
                                </h2>
                                <p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/85">
                                    {IDENTITY.commitment}
                                </p>
                                <p
                                    className="mt-5 text-lg font-bold italic"
                                    style={{ color: 'var(--lc-gold)' }}
                                >
                                    {t('common.motto')}
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
                                {t('common.startPreEnrollment')}
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
                                {t('common.requestInfo')}
                            </Link>
                        </div>
                    </div>
                </div>
            </main>

            <SubpageFooter />

            <ApplyButton />
        </div>
    )
}

export default Historia
