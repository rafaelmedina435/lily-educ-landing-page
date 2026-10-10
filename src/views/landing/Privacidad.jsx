import { Link } from 'react-router'
import {
    PiShieldCheckDuotone,
    PiIdentificationCardDuotone,
    PiTargetDuotone,
    PiCheckSquareDuotone,
    PiCloudDuotone,
    PiHourglassDuotone,
    PiUserCheckDuotone,
    PiCookieDuotone,
    PiTrashDuotone,
    PiSparkleDuotone,
    PiArrowRightBold,
} from 'react-icons/pi'
import { THEME, Hexagon, HoneycombLayer, Reveal } from './brand'
import { useLanguage } from './language'
import { SubpageHeader, SubpageFooter } from './Subpage'
import { PRE_ENROLLMENT_PATH } from './ApplyButton'
import { ContactValue, useContactAction } from './ContactAction'
import Seo from '@/components/shared/Seo'

const ICONS = {
    shield: PiShieldCheckDuotone,
    card: PiIdentificationCardDuotone,
    target: PiTargetDuotone,
    check: PiCheckSquareDuotone,
    cloud: PiCloudDuotone,
    hourglass: PiHourglassDuotone,
    user: PiUserCheckDuotone,
    cookie: PiCookieDuotone,
}

/**
 * Aviso de privacidad de la pre-matrícula. El formulario lo enlaza junto
 * a la casilla de autorización y lo abre en otra pestaña, por eso no
 * lleva el botón flotante de pre-matrícula: la familia vuelve a la
 * pestaña donde dejó el formulario a medias.
 */
const Privacidad = () => {
    const { copiado, activar } = useContactAction()
    const { t, content } = useLanguage()
    const { SCHOOL, PRIVACY } = content

    return (
        <div
            style={{ ...THEME, backgroundColor: 'var(--lc-cream)' }}
            className="min-h-screen font-sans"
        >
            <Seo
                title={t('privacy.seoTitle')}
                description={t('privacy.seoDescription')}
                canonical="/privacidad"
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
                    <div className="relative mx-auto max-w-5xl px-4 py-14 sm:py-20">
                        <p
                            className="mb-3 text-sm font-bold uppercase tracking-[0.2em]"
                            style={{ color: 'var(--lc-gold)' }}
                        >
                            {t('privacy.eyebrow')}
                        </p>
                        <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
                            {t('privacy.title')}
                        </h1>
                        <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/75">
                            {PRIVACY.intro}
                        </p>
                        <p className="mt-4 text-sm text-white/50">
                            {t('privacy.updated')}
                        </p>
                        {PRIVACY.translationNote && (
                            <p className="mt-2 text-sm italic text-white/50">
                                {PRIVACY.translationNote}
                            </p>
                        )}
                    </div>
                </section>

                <section className="relative overflow-hidden">
                    <HoneycombLayer />
                    <div className="relative mx-auto max-w-5xl px-4 py-16">
                        <div className="grid gap-5 md:grid-cols-2">
                            {PRIVACY.sections.map((block, index) => {
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

                        {/* Al final y destacado: lo que más le importa a una familia */}
                        <div
                            id="borrar"
                            className="mt-6 flex flex-wrap items-start gap-5 rounded-2xl border p-7"
                            style={{
                                borderColor: 'rgba(46,58,51,.12)',
                                backgroundColor: 'rgba(245,197,24,.14)',
                            }}
                        >
                            <Hexagon
                                className="h-12 w-12 shrink-0 text-xl"
                                style={{
                                    backgroundColor: 'var(--lc-green)',
                                    color: 'var(--lc-gold)',
                                }}
                            >
                                <PiTrashDuotone />
                            </Hexagon>
                            <div className="min-w-[240px] flex-1">
                                <h2
                                    className="text-lg font-bold"
                                    style={{ color: 'var(--lc-green)' }}
                                >
                                    {PRIVACY.erase.title}
                                </h2>
                                <p className="mt-2 text-sm leading-relaxed text-[#4c574f]">
                                    {PRIVACY.erase.description}
                                </p>
                                <div className="mt-3 flex flex-wrap items-center gap-x-1 gap-y-1 text-sm text-[#4c574f]">
                                    <span>{t('common.emailUsAt')}</span>
                                    <ContactValue
                                        value={PRIVACY.email}
                                        href={`mailto:${PRIVACY.email}?subject=${encodeURIComponent(t('privacy.emailSubject'))}`}
                                        itemKey="correo"
                                        copiado={copiado}
                                        onActivate={activar}
                                    />
                                    <span>{t('common.orCallUsAt')}</span>
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
                                {t('privacy.cta')}
                                <PiArrowRightBold />
                            </Link>
                        </div>
                    </div>
                </section>
            </main>

            <SubpageFooter />
        </div>
    )
}

export default Privacidad
