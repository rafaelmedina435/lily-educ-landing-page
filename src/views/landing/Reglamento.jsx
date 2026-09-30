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
    PiArrowRightBold,
    PiInfoDuotone,
} from 'react-icons/pi'
import { SCHOOL, REGULATIONS, REGULATIONS_INTRO } from './lacolmenaData'
import { THEME, Hexagon, HoneycombLayer, Reveal } from './brand'
import { SubpageHeader, SubpageFooter } from './Subpage'
import ApplyButton, { PRE_ENROLLMENT_PATH } from './ApplyButton'
import { ContactValue, useContactAction } from './ContactAction'
import Seo from '@/components/shared/Seo'

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

            <SubpageFooter />

            <ApplyButton />
        </div>
    )
}

export default Reglamento
