import { Link } from 'react-router'
import {
    PiClockDuotone,
    PiTShirtDuotone,
    PiHandshakeDuotone,
    PiNotebookDuotone,
    PiDeviceMobileDuotone,
    PiShieldCheckDuotone,
    PiChatsCircleDuotone,
    PiCompassDuotone,
    PiSparkleDuotone,
    PiArrowLeftBold,
    PiArrowRightBold,
    PiInfoDuotone,
} from 'react-icons/pi'
import { SCHOOL, REGULATIONS, REGULATIONS_INTRO } from './lacolmenaData'
import {
    THEME,
    BrandMark,
    Crest,
    Hexagon,
    HoneycombLayer,
    Reveal,
} from './brand'
import { ContactValue, useContactAction } from './ContactAction'
import Seo from '@/components/shared/Seo'
import { PRE_ENROLLMENT_URL } from '@/configs/platform.config'

const ICONS = {
    clock: PiClockDuotone,
    shirt: PiTShirtDuotone,
    handshake: PiHandshakeDuotone,
    notebook: PiNotebookDuotone,
    phone: PiDeviceMobileDuotone,
    shield: PiShieldCheckDuotone,
    chat: PiChatsCircleDuotone,
    compass: PiCompassDuotone,
}

/**
 * Reglamento interno, en vista aparte.
 *
 * El contenido es deliberadamente general: describe las normas que rigen
 * la convivencia en el colegio sin reproducir el contrato de servicios
 * educativos, que es propio de cada institución y no es público. Tampoco
 * se ofrece descarga: es una página para leer, no un documento.
 */
const Reglamento = () => {
    const { copiado, activar } = useContactAction()

    return (
        <div
            style={{ ...THEME, backgroundColor: 'var(--lc-cream)' }}
            className="min-h-screen font-sans"
        >
            <Seo
                title={`Reglamento interno — ${SCHOOL.name}`}
                description={`Normas de convivencia, asistencia, uniforme y seguridad del ${SCHOOL.name} en ${SCHOOL.city}, ${SCHOOL.province}.`}
                canonical="/reglamento"
            />

            <header
                className="sticky top-0 z-50 border-b backdrop-blur"
                style={{
                    backgroundColor: 'rgba(46,58,51,.94)',
                    borderColor: 'rgba(245,197,24,.25)',
                }}
            >
                <div className="mx-auto flex max-w-5xl items-center gap-4 px-4 py-3">
                    <Link to="/">
                        <BrandMark />
                    </Link>
                    <Link
                        to="/"
                        className="ml-auto inline-flex items-center gap-2 text-sm font-medium text-white/70 transition hover:text-white"
                    >
                        <PiArrowLeftBold />
                        Volver al sitio
                    </Link>
                </div>
            </header>

            <main>
                <section
                    className="relative overflow-hidden border-b"
                    style={{
                        backgroundColor: 'var(--lc-green)',
                        borderColor: 'rgba(245,197,24,.2)',
                    }}
                >
                    <HoneycombLayer tone="light" opacity={0.07} />
                    <div className="relative mx-auto max-w-5xl px-4 py-14 sm:py-20">
                        <p
                            className="mb-3 text-sm font-bold uppercase tracking-[0.2em]"
                            style={{ color: 'var(--lc-gold)' }}
                        >
                            Reglamento interno
                        </p>
                        <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
                            Cómo convivimos en La Colmena
                        </h1>
                        <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/75">
                            {REGULATIONS_INTRO}
                        </p>
                    </div>
                </section>

                <section className="relative overflow-hidden">
                    <HoneycombLayer />
                    <div className="relative mx-auto max-w-5xl px-4 py-16">
                        <div className="grid gap-5 md:grid-cols-2">
                            {REGULATIONS.map((block, index) => {
                                const Icon =
                                    ICONS[block.icon] || PiSparkleDuotone

                                return (
                                    <Reveal
                                        key={block.id}
                                        delay={index * 60}
                                        className="rounded-2xl border bg-white p-7"
                                        style={{
                                            borderColor: 'rgba(46,58,51,.1)',
                                        }}
                                    >
                                        <div className="mb-5 flex items-center gap-4">
                                            <Hexagon
                                                className="h-12 w-12 shrink-0 text-xl"
                                                style={{
                                                    backgroundColor:
                                                        'rgba(245,197,24,.22)',
                                                    color: 'var(--lc-green)',
                                                }}
                                            >
                                                <Icon />
                                            </Hexagon>
                                            <h2
                                                className="text-lg font-bold"
                                                style={{
                                                    color: 'var(--lc-green)',
                                                }}
                                            >
                                                {block.title}
                                            </h2>
                                        </div>
                                        <ul className="space-y-3">
                                            {block.points.map((point) => (
                                                <li
                                                    key={point}
                                                    className="flex gap-3 text-sm leading-relaxed text-[#5b665e]"
                                                >
                                                    <span
                                                        className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                                                        style={{
                                                            backgroundColor:
                                                                'var(--lc-gold)',
                                                        }}
                                                    />
                                                    {point}
                                                </li>
                                            ))}
                                        </ul>
                                    </Reveal>
                                )
                            })}
                        </div>

                        <div
                            className="mt-6 flex flex-wrap items-start gap-4 rounded-2xl border p-7"
                            style={{
                                borderColor: 'rgba(46,58,51,.12)',
                                backgroundColor: 'rgba(245,197,24,.12)',
                            }}
                        >
                            <PiInfoDuotone
                                className="mt-0.5 shrink-0 text-2xl"
                                style={{ color: 'var(--lc-green)' }}
                            />
                            <div className="min-w-[240px] flex-1">
                                <p className="text-sm leading-relaxed text-[#4c574f]">
                                    Este resumen es orientativo. El reglamento
                                    interno completo y el contrato de servicios
                                    educativos se entregan y se firman en
                                    secretaría al momento de la matrícula, y son
                                    los documentos que rigen.
                                </p>
                                <div className="mt-2 flex flex-wrap items-center gap-x-1 gap-y-1 text-sm text-[#4c574f]">
                                    <span>¿Alguna duda? Escríbenos a</span>
                                    <ContactValue
                                        value={SCHOOL.email}
                                        href={`mailto:${SCHOOL.email}`}
                                        itemKey="correo"
                                        copiado={copiado}
                                        onActivate={activar}
                                    />
                                    <span>o llámanos al</span>
                                    <ContactValue
                                        value={SCHOOL.phones[0]}
                                        href={`tel:+507${SCHOOL.phones[0].replace(/\D/g, '')}`}
                                        itemKey="telefono"
                                        copiado={copiado}
                                        onActivate={activar}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="mt-10 flex flex-wrap gap-3">
                            <a
                                href={PRE_ENROLLMENT_URL}
                                className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-base font-bold transition hover:brightness-95"
                                style={{
                                    backgroundColor: 'var(--lc-gold)',
                                    color: 'var(--lc-green-deep)',
                                }}
                            >
                                Iniciar pre-matrícula
                                <PiArrowRightBold />
                            </a>
                            <Link
                                to="/#admision"
                                className="inline-flex items-center gap-2 rounded-full border-2 px-7 py-3.5 text-base font-bold transition hover:bg-white"
                                style={{
                                    borderColor: 'rgba(46,58,51,.2)',
                                    color: 'var(--lc-green)',
                                }}
                            >
                                Ver requisitos de admisión
                            </Link>
                        </div>
                    </div>
                </section>
            </main>

            <footer
                className="relative overflow-hidden"
                style={{ backgroundColor: 'var(--lc-green-deep)' }}
            >
                <HoneycombLayer tone="light" opacity={0.05} />
                <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-6 px-4 py-12 text-center sm:flex-row sm:text-left">
                    <Crest className="h-14 w-auto" />
                    <div className="flex-1">
                        <p className="font-bold text-white">{SCHOOL.name}</p>
                        <p className="text-sm text-white/55">
                            {SCHOOL.address} · {SCHOOL.addressLine2}
                        </p>
                    </div>
                    <p
                        className="text-sm font-bold italic"
                        style={{ color: 'var(--lc-gold)' }}
                    >
                        «{SCHOOL.motto}»
                    </p>
                </div>
            </footer>
        </div>
    )
}

export default Reglamento
