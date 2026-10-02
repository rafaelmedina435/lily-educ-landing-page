import { Link } from 'react-router'
import { PiArrowRightBold, PiCheckCircleDuotone } from 'react-icons/pi'
import classNames from 'classnames'
import { SCHOOL, ACTIVITIES } from './lacolmenaData'
import { THEME, HoneycombLayer, Reveal } from './brand'
import { SubpageHeader, SubpageFooter } from './Subpage'
import ApplyButton, { PRE_ENROLLMENT_PATH } from './ApplyButton'
import { ActivityMedia, activityIcon } from './activities'
import Seo from '@/components/shared/Seo'

/**
 * Detalle de las actividades de vida escolar. Cada tarjeta de la landing
 * enlaza a su sección por ancla (`/vida-escolar#banda`); las secciones
 * alternan imagen y texto.
 */
const VidaEscolar = () => (
    <div
        style={{ ...THEME, backgroundColor: 'var(--lc-cream)' }}
        className="min-h-screen font-sans"
    >
        <Seo
            title={`Vida escolar — ${SCHOOL.name}`}
            description={`Folclore, banda de guerra, clases de alemán, ferias de emprendimiento y deporte en el ${SCHOOL.name} de ${SCHOOL.city}, ${SCHOOL.province}.`}
            canonical="/vida-escolar"
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
                        Vida escolar
                    </p>
                    <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
                        Aprender también pasa fuera del aula
                    </h1>
                    <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/75">
                        Actividades que forman en disciplina, creatividad y
                        trabajo en equipo, y que dan a cada estudiante un
                        espacio para descubrir sus talentos.
                    </p>

                    {/* Atajos a cada actividad */}
                    <nav className="mt-8 flex flex-wrap gap-2.5">
                        {ACTIVITIES.map((activity) => (
                            <a
                                key={activity.id}
                                href={`#${activity.id}`}
                                className="rounded-full px-4 py-2 text-sm font-medium text-white/90 transition hover:bg-white/20"
                                style={{
                                    backgroundColor: 'rgba(255,255,255,.12)',
                                }}
                            >
                                {activity.title}
                            </a>
                        ))}
                    </nav>
                </div>
            </section>

            <div className="relative overflow-hidden">
                <HoneycombLayer />
                <div className="relative mx-auto max-w-5xl space-y-8 px-4 py-16">
                    {ACTIVITIES.map((activity, index) => {
                        const Icon = activityIcon(activity)
                        const flipped = index % 2 === 1

                        return (
                            <Reveal key={activity.id}>
                                <section
                                    id={activity.id}
                                    className="grid scroll-mt-24 overflow-hidden rounded-3xl border bg-white md:grid-cols-2"
                                    style={{
                                        borderColor: 'rgba(46,58,51,.1)',
                                    }}
                                >
                                    <div
                                        className={classNames(
                                            'relative min-h-60 overflow-hidden',
                                            flipped && 'md:order-2',
                                        )}
                                    >
                                        <ActivityMedia activity={activity} />
                                    </div>

                                    <div className="p-8 sm:p-10">
                                        <div className="flex items-center gap-3">
                                            <span
                                                className="flex h-11 w-11 items-center justify-center rounded-2xl text-xl"
                                                style={{
                                                    backgroundColor:
                                                        'var(--lc-green)',
                                                    color: 'var(--lc-gold)',
                                                }}
                                            >
                                                <Icon />
                                            </span>
                                            <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#8a948c]">
                                                {activity.tag}
                                            </span>
                                        </div>

                                        <h2
                                            className="mt-5 text-2xl font-bold sm:text-3xl"
                                            style={{ color: 'var(--lc-green)' }}
                                        >
                                            {activity.title}
                                        </h2>
                                        <p
                                            className="mt-1 text-sm font-bold italic"
                                            style={{ color: '#b08a00' }}
                                        >
                                            {activity.tagline}
                                        </p>

                                        <p className="mt-4 text-sm leading-relaxed text-[#5b665e]">
                                            {activity.description}
                                        </p>

                                        <div className="mt-6 flex flex-wrap gap-2">
                                            {activity.highlights.map((item) => (
                                                <span
                                                    key={item}
                                                    className="rounded-full px-3 py-1.5 text-xs font-medium"
                                                    style={{
                                                        backgroundColor:
                                                            'var(--lc-cream)',
                                                        color: '#4a554d',
                                                    }}
                                                >
                                                    {item}
                                                </span>
                                            ))}
                                        </div>

                                        <ul className="mt-6 space-y-2.5">
                                            {activity.notes.map((note) => (
                                                <li
                                                    key={note}
                                                    className="flex gap-3 text-sm leading-relaxed text-[#5b665e]"
                                                >
                                                    <PiCheckCircleDuotone
                                                        className="mt-0.5 shrink-0 text-lg"
                                                        style={{
                                                            color: 'var(--lc-green)',
                                                        }}
                                                    />
                                                    {note}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </section>
                            </Reveal>
                        )
                    })}

                    <div className="flex flex-wrap gap-3 pt-4">
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

export default VidaEscolar
