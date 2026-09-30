import { useRef, useState } from 'react'
import { Link } from 'react-router'
import classNames from 'classnames'
import {
    PiMedalDuotone,
    PiHeartDuotone,
    PiGlobeHemisphereWestDuotone,
    PiSparkleDuotone,
    PiCpuDuotone,
    PiGraduationCapDuotone,
    PiWhatsappLogoDuotone,
    PiInstagramLogoDuotone,
    PiEnvelopeSimpleDuotone,
    PiMapPinDuotone,
    PiNavigationArrowDuotone,
    PiPhoneDuotone,
    PiClockDuotone,
    PiCheckCircleDuotone,
    PiCaretDownBold,
    PiArrowRightBold,
    PiListBold,
    PiXBold,
    PiMoneyDuotone,
    PiDeviceMobileDuotone,
    PiBankDuotone,
    PiCreditCardDuotone,
    PiPlayFill,
} from 'react-icons/pi'
import {
    SCHOOL,
    ABOUT,
    BENEFITS,
    LEVELS,
    PAYMENT_NOTES,
    PAYMENT_METHODS,
    REQUIREMENTS,
    ACTIVITIES,
    PLATFORM,
    CAMPUS,
} from './lacolmenaData'
import {
    THEME,
    Crest,
    HoneycombLayer,
    Hexagon,
    PHOTOS,
    HERO_VIDEO,
    ANNIVERSARY_VIDEO,
    Reveal,
} from './brand'
import { ContactValue, useContactAction } from './ContactAction'
import { ActivityMedia, activityHref } from './activities'
import Seo from '@/components/shared/Seo'
import { PRE_ENROLLMENT_URL, SIGN_IN_URL } from '@/configs/platform.config'

const BENEFIT_ICONS = {
    award: PiMedalDuotone,
    heart: PiHeartDuotone,
    globe: PiGlobeHemisphereWestDuotone,
    sparkles: PiSparkleDuotone,
    chip: PiCpuDuotone,
    school: PiGraduationCapDuotone,
}

const PAYMENT_ICONS = {
    cash: PiMoneyDuotone,
    phone: PiDeviceMobileDuotone,
    bank: PiBankDuotone,
    card: PiCreditCardDuotone,
}

const MAPS_LINK = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    CAMPUS.mapsQuery,
)}`

/** Un teléfono panameño marcable: +507 y solo dígitos. */
const telHref = (phone) => `tel:+507${phone.replace(/\D/g, '')}`

const CONTACT_CARDS = [
    {
        icon: PiMapPinDuotone,
        title: 'Dirección',
        external: true,
        values: [
            { text: SCHOOL.address, href: MAPS_LINK },
            { text: SCHOOL.addressLine2, href: MAPS_LINK },
        ],
    },
    {
        icon: PiPhoneDuotone,
        title: 'Teléfonos',
        values: SCHOOL.phones.map((phone) => ({
            text: phone,
            href: telHref(phone),
        })),
    },
    {
        icon: PiEnvelopeSimpleDuotone,
        title: 'Correo',
        values: [{ text: SCHOOL.email, href: `mailto:${SCHOOL.email}` }],
    },
    {
        icon: PiInstagramLogoDuotone,
        title: 'Instagram',
        external: true,
        values: [
            {
                text: `@${SCHOOL.instagram}`,
                href: `https://instagram.com/${SCHOOL.instagram}`,
            },
        ],
    },
]

const NAV = [
    { href: '#nosotros', label: 'Nosotros' },
    { href: '#niveles', label: 'Niveles' },
    { href: '#vida', label: 'Vida escolar' },
    { href: '#admision', label: 'Admisión' },
    { href: '#contacto', label: 'Contacto' },
]

/** Datos estructurados: ayudan a Google a mostrar la ficha del colegio. */
const JSON_LD = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: SCHOOL.name,
    alternateName: SCHOOL.shortName,
    slogan: SCHOOL.motto,
    foundingDate: String(SCHOOL.foundedYear),
    description: ABOUT,
    email: SCHOOL.email,
    telephone: SCHOOL.phones.map((phone) => `+507 ${phone}`),
    logo: '/img/lacolmena/logo-la-colmena.png',
    image: '/img/lacolmena/sede.jpg',
    sameAs: [`https://instagram.com/${SCHOOL.instagram}`],
    address: {
        '@type': 'PostalAddress',
        streetAddress: SCHOOL.address,
        addressLocality: SCHOOL.city,
        addressRegion: SCHOOL.province,
        addressCountry: 'PA',
    },
    openingHours: 'Mo-Fr 07:30-14:00',
}

/**
 * Celdas del bento de vida escolar, en el orden de `ACTIVITIES`: la
 * primera (la banda) ocupa 2×2 y la última se estira a lo ancho para
 * cerrar la cuadrícula de 4 columnas. Las celdas de 1×1 miden 15rem en
 * escritorio: ahí no cabe el resumen, solo el título y «Ver más».
 */
const ACTIVITY_TILES = [
    { span: 'sm:col-span-2 lg:row-span-2', size: 'large' },
    { span: '', size: 'small' },
    { span: '', size: 'small' },
    { span: 'sm:col-span-2', size: 'wide' },
]

/**
 * Tarjeta de actividad: foto a sangre con el título abajo. Con mouse,
 * en escritorio, al pasar por encima aparece «Ver más» (y el resumen,
 * si la celda tiene espacio); en pantallas táctiles se ven siempre.
 */
const ActivityTile = ({ activity, size }) => (
    <Link
        to={activityHref(activity)}
        className="group relative flex w-full overflow-hidden rounded-3xl focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-[var(--lc-gold)]"
    >
        <ActivityMedia
            activity={activity}
            className="transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div
            className="absolute inset-0 transition-opacity duration-500 desk:opacity-80 desk:group-hover:opacity-100"
            style={{
                background:
                    'linear-gradient(to top, rgba(34,43,38,.95) 0%, rgba(34,43,38,.55) 45%, rgba(34,43,38,.1) 100%)',
            }}
        />

        <div
            className={classNames(
                'relative mt-auto w-full',
                size === 'small' ? 'p-6' : 'p-6 sm:p-7',
            )}
        >
            <span
                className="inline-block rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-[0.15em]"
                style={{
                    backgroundColor: 'rgba(245,197,24,.18)',
                    color: 'var(--lc-gold-soft)',
                }}
            >
                {activity.tag}
            </span>
            <h3
                className={classNames(
                    'mt-3 font-bold leading-snug text-white',
                    size === 'large' ? 'text-2xl sm:text-3xl' : 'text-xl',
                )}
            >
                {activity.title}
            </h3>

            {/* Resumen y botón: plegados hasta el hover en escritorio */}
            <div className="grid transition-[grid-template-rows,opacity] duration-500 ease-out desk:grid-rows-[0fr] desk:opacity-0 desk:group-hover:grid-rows-[1fr] desk:group-hover:opacity-100 desk:group-focus-visible:grid-rows-[1fr] desk:group-focus-visible:opacity-100">
                <div className="overflow-hidden">
                    <p
                        className={classNames(
                            'mt-2 line-clamp-3 text-sm leading-relaxed text-white/75',
                            size === 'large' && 'max-w-md',
                            size === 'wide' && 'max-w-lg',
                            size === 'small' && 'lg:hidden',
                        )}
                    >
                        {activity.summary}
                    </p>
                    <span
                        className="mt-4 inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-bold"
                        style={{
                            backgroundColor: 'var(--lc-gold)',
                            color: 'var(--lc-green-deep)',
                        }}
                    >
                        Ver más
                        <PiArrowRightBold className="transition-transform group-hover:translate-x-1" />
                    </span>
                </div>
            </div>
        </div>
    </Link>
)

const SectionTitle = ({ eyebrow, title, description, light }) => (
    <div className="mx-auto mb-12 max-w-2xl text-center">
        {eyebrow && (
            <p
                className="mb-3 text-sm font-bold uppercase tracking-[0.2em]"
                style={{ color: 'var(--lc-gold)' }}
            >
                {eyebrow}
            </p>
        )}
        <h2
            className="text-3xl font-bold sm:text-4xl"
            style={{ color: light ? '#fff' : 'var(--lc-green)' }}
        >
            {title}
        </h2>
        {description && (
            <p
                className="mt-4 text-base leading-relaxed"
                style={{ color: light ? 'rgba(255,255,255,.75)' : '#5b665e' }}
            >
                {description}
            </p>
        )}
    </div>
)

/**
 * Video institucional con sonido. No descarga nada hasta que se pulsa
 * reproducir (preload="none"); antes solo se ve el póster con el botón.
 */
const AnniversaryVideo = () => {
    const videoRef = useRef(null)
    const [started, setStarted] = useState(false)

    const play = () => {
        setStarted(true)
        videoRef.current?.play()
    }

    return (
        <div className="relative overflow-hidden rounded-3xl bg-black shadow-2xl">
            <video
                ref={videoRef}
                className="aspect-video w-full"
                controls={started}
                preload="none"
                playsInline
                poster={ANNIVERSARY_VIDEO.poster}
            >
                <source src={ANNIVERSARY_VIDEO.webm} type="video/webm" />
                <source src={ANNIVERSARY_VIDEO.mp4} type="video/mp4" />
            </video>

            {!started && (
                <button
                    type="button"
                    onClick={play}
                    className="group absolute inset-0 flex flex-col items-center justify-center gap-4 text-white"
                    style={{
                        background:
                            'linear-gradient(180deg, rgba(34,43,38,.15) 0%, rgba(34,43,38,.7) 100%)',
                    }}
                    aria-label={`Reproducir video: ${SCHOOL.name}, 20 años`}
                >
                    <span
                        className="flex h-16 w-16 items-center justify-center rounded-full shadow-xl transition group-hover:scale-110 sm:h-20 sm:w-20"
                        style={{
                            backgroundColor: 'var(--lc-gold)',
                            color: 'var(--lc-green-deep)',
                        }}
                    >
                        <PiPlayFill className="ml-1 text-2xl sm:text-3xl" />
                    </span>
                    <span className="absolute bottom-7 left-7 right-7 hidden text-left sm:block">
                        <span
                            className="block text-xs font-bold uppercase tracking-[0.2em]"
                            style={{ color: 'var(--lc-gold-soft)' }}
                        >
                            {SCHOOL.foundedYear} – {SCHOOL.foundedYear + 20}
                        </span>
                        <span className="mt-1 block text-2xl font-bold">
                            20 años sembrando el néctar de la sabiduría
                        </span>
                        <span className="mt-1 block text-sm text-white/70">
                            Video · 2:22
                        </span>
                    </span>
                </button>
            )}
        </div>
    )
}

const LaColmena = () => {
    // Arranca cerrado: con dos columnas, una tarjeta abierta deja un
    // hueco al lado hasta que el visitante decide abrirla
    const [openLevel, setOpenLevel] = useState(null)
    const [menuOpen, setMenuOpen] = useState(false)

    const { copiado, activar } = useContactAction()

    const whatsappLink = `https://wa.me/${SCHOOL.whatsapp}?text=${encodeURIComponent(
        'Hola, quisiera información sobre la matrícula en el Colegio Bilingüe La Colmena.',
    )}`

    return (
        <div
            style={{ ...THEME, backgroundColor: 'var(--lc-cream)' }}
            className="min-h-screen font-sans"
        >
            <Seo
                title={`${SCHOOL.name} — ${SCHOOL.city}, ${SCHOOL.province}`}
                description={`Colegio bilingüe en ${SCHOOL.city}, ${SCHOOL.province}. Pre-escolar, primaria, pre-media y bachiller en ciencias. Matrícula abierta ${SCHOOL.schoolYear}, pre-matrícula en línea y portal para acudientes.`}
                canonical="/"
                image={PHOTOS.sede}
                jsonLd={JSON_LD}
            />

            {/* ── Barra superior ─────────────────────────────────── */}
            <header
                className="sticky top-0 z-50 border-b backdrop-blur"
                style={{
                    backgroundColor: 'rgba(46,58,51,.94)',
                    borderColor: 'rgba(245,197,24,.25)',
                }}
            >
                <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-3">
                    <a href="#inicio" className="flex items-center gap-3">
                        <Crest className="h-11 w-auto drop-shadow" />
                        <span className="leading-tight text-white">
                            <span className="block text-[11px] uppercase tracking-[0.18em] opacity-70">
                                Colegio Bilingüe
                            </span>
                            <span className="block text-lg font-bold">
                                La Colmena
                            </span>
                        </span>
                    </a>

                    <nav className="ml-auto hidden items-center gap-6 lg:flex">
                        {NAV.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                className="text-sm font-medium text-white/80 transition hover:text-white"
                            >
                                {item.label}
                            </a>
                        ))}
                    </nav>

                    <div className="ml-auto hidden items-center gap-3 lg:ml-0 lg:flex">
                        <a
                            href={SIGN_IN_URL}
                            className="text-sm font-medium text-white/70 transition hover:text-white"
                        >
                            Portal
                        </a>
                        <a
                            href={PRE_ENROLLMENT_URL}
                            className="rounded-full px-5 py-2.5 text-sm font-bold transition hover:brightness-95"
                            style={{
                                backgroundColor: 'var(--lc-gold)',
                                color: 'var(--lc-green-deep)',
                            }}
                        >
                            Pre-matrícula en línea
                        </a>
                    </div>

                    <button
                        type="button"
                        aria-label="Abrir menú"
                        className="ml-auto p-2 text-2xl text-white lg:hidden"
                        onClick={() => setMenuOpen((open) => !open)}
                    >
                        {menuOpen ? <PiXBold /> : <PiListBold />}
                    </button>
                </div>

                {menuOpen && (
                    <div className="border-t border-white/10 px-4 pb-4 lg:hidden">
                        <nav className="flex flex-col gap-1 pt-3">
                            {NAV.map((item) => (
                                <a
                                    key={item.href}
                                    href={item.href}
                                    className="rounded-lg px-3 py-2 text-sm font-medium text-white/85 hover:bg-white/10"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    {item.label}
                                </a>
                            ))}
                            <a
                                href={SIGN_IN_URL}
                                className="rounded-lg px-3 py-2 text-sm font-medium text-white/85 hover:bg-white/10"
                                onClick={() => setMenuOpen(false)}
                            >
                                Portal
                            </a>
                            <a
                                href={PRE_ENROLLMENT_URL}
                                className="mt-2 rounded-full px-4 py-2.5 text-center text-sm font-bold"
                                style={{
                                    backgroundColor: 'var(--lc-gold)',
                                    color: 'var(--lc-green-deep)',
                                }}
                            >
                                Pre-matrícula en línea
                            </a>
                        </nav>
                    </div>
                )}
            </header>

            <main>
                {/* ── Hero ───────────────────────────────────────────── */}
                <section
                    id="inicio"
                    className="relative flex min-h-[calc(100svh-4rem)] items-center overflow-hidden"
                    style={{ backgroundColor: 'var(--lc-green)' }}
                >
                    {/* Con "reducir movimiento" activo solo queda el póster. */}
                    <video
                        className="absolute inset-0 h-full w-full object-cover motion-reduce:hidden"
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        poster={HERO_VIDEO.poster}
                        aria-hidden="true"
                    >
                        <source src={HERO_VIDEO.webm} type="video/webm" />
                        <source src={HERO_VIDEO.mp4} type="video/mp4" />
                    </video>
                    <div
                        className="absolute inset-0 hidden bg-cover bg-center motion-reduce:block"
                        style={{
                            backgroundImage: `url(${HERO_VIDEO.poster})`,
                        }}
                    />
                    <div
                        className="absolute inset-0"
                        style={{
                            background:
                                'linear-gradient(100deg, rgba(46,58,51,.92) 25%, rgba(46,58,51,.7) 60%, rgba(46,58,51,.45) 100%)',
                        }}
                    />
                    <HoneycombLayer tone="light" opacity={0.07} />
                    <div
                        className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full blur-3xl"
                        style={{ backgroundColor: 'rgba(245,197,24,.18)' }}
                    />

                    <div className="relative mx-auto grid w-full max-w-6xl items-center gap-6 px-4 py-8 text-center sm:gap-8 sm:py-14 lg:grid-cols-[1.15fr_1fr] lg:gap-10 lg:py-28 lg:text-left">
                        <div>
                            <span
                                className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-[0.15em]"
                                style={{
                                    backgroundColor: 'rgba(245,197,24,.15)',
                                    color: 'var(--lc-gold-soft)',
                                }}
                            >
                                Matrícula abierta {SCHOOL.schoolYear}
                            </span>

                            <h1 className="mt-4 text-4xl font-bold leading-[1.1] text-white sm:mt-6 sm:text-5xl lg:text-6xl">
                                {SCHOOL.motto}
                            </h1>

                            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/75 sm:mt-5 sm:text-lg lg:mx-0">
                                Colegio bilingüe en {SCHOOL.city},{' '}
                                {SCHOOL.province}. Veinte años formando
                                estudiantes con valores, criterio y dominio del
                                inglés — desde pre-escolar hasta bachillerato.
                            </p>

                            <div className="mt-7 flex flex-wrap justify-center gap-3 sm:mt-9 lg:justify-start">
                                <a
                                    href={PRE_ENROLLMENT_URL}
                                    className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-bold shadow-lg sm:px-7 sm:py-3.5 sm:text-base transition hover:brightness-95"
                                    style={{
                                        backgroundColor: 'var(--lc-gold)',
                                        color: 'var(--lc-green-deep)',
                                    }}
                                >
                                    Iniciar pre-matrícula
                                    <PiArrowRightBold />
                                </a>
                                <a
                                    href={whatsappLink}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-2 rounded-full border-2 px-5 py-3 text-sm font-bold text-white sm:px-7 sm:py-3.5 sm:text-base transition hover:bg-white/10"
                                    style={{
                                        borderColor: 'rgba(255,255,255,.3)',
                                    }}
                                >
                                    <PiWhatsappLogoDuotone className="text-xl" />
                                    Escríbenos
                                </a>
                            </div>

                            <p className="mt-5 text-sm text-white/50 sm:mt-6">
                                Fundado en {SCHOOL.foundedYear} · {SCHOOL.city},{' '}
                                {SCHOOL.province}
                            </p>
                        </div>

                        {/* En móvil y tablet el escudo va arriba y más pequeño para que todo el hero entre en pantalla. */}
                        <div className="order-first flex justify-center lg:order-last lg:justify-end">
                            <div className="relative">
                                <div
                                    className="absolute inset-0 -m-4 rounded-full blur-2xl lg:-m-8"
                                    style={{
                                        backgroundColor: 'rgba(245,197,24,.22)',
                                    }}
                                />
                                <Crest className="relative w-28 drop-shadow-2xl sm:w-40 lg:w-80" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── Cifras ─────────────────────────────────────────── */}
                <section
                    className="relative overflow-hidden border-y"
                    style={{
                        backgroundColor: '#fff',
                        borderColor: 'rgba(46,58,51,.08)',
                    }}
                >
                    <HoneycombLayer />
                    <div className="relative mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-10 lg:grid-cols-4">
                        {[
                            { value: '20', label: 'años de experiencia' },
                            { value: '4', label: 'niveles académicos' },
                            { value: '100%', label: 'programa bilingüe' },
                            { value: '2', label: 'idiomas en el aula' },
                        ].map((stat) => (
                            <div key={stat.label} className="text-center">
                                <p
                                    className="text-3xl font-bold sm:text-4xl"
                                    style={{ color: 'var(--lc-green)' }}
                                >
                                    {stat.value}
                                </p>
                                <p className="mt-1 text-sm text-[#6b766e]">
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ── Nosotros ───────────────────────────────────────── */}
                <section id="nosotros" className="relative overflow-hidden">
                    <HoneycombLayer />
                    <div className="relative mx-auto max-w-6xl px-4 py-20">
                        <SectionTitle
                            eyebrow="Sobre nosotros"
                            title="Una educación con valores, inteligente y creativa"
                        />
                        <div className="grid gap-10 lg:grid-cols-[1.25fr_1fr] lg:items-center">
                            <Reveal className="relative mx-auto w-full max-w-2xl lg:mx-0">
                                <AnniversaryVideo />

                                {/* Debajo del video, no encima, para no tapar sus controles. */}
                                <div
                                    className="relative mt-4 flex items-center gap-4 rounded-2xl p-4 shadow-lg"
                                    style={{
                                        backgroundColor: 'var(--lc-green)',
                                    }}
                                >
                                    <Crest className="w-12 shrink-0" />
                                    <div className="min-w-0">
                                        <p
                                            className="text-sm font-bold italic leading-snug"
                                            style={{ color: 'var(--lc-gold)' }}
                                        >
                                            «{SCHOOL.motto}»
                                        </p>
                                        <p className="mt-0.5 text-xs text-white/60">
                                            {SCHOOL.city}, {SCHOOL.province}
                                        </p>
                                    </div>
                                </div>
                            </Reveal>

                            <div>
                                <p className="text-lg leading-relaxed text-[#4a554d]">
                                    {ABOUT}
                                </p>
                                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                                    {[
                                        'Instalaciones modernas',
                                        'Ambiente de aprendizaje propicio',
                                        'Acompañamiento personalizado',
                                        'Plan de estudios completo',
                                    ].map((item) => (
                                        <div
                                            key={item}
                                            className="flex items-center gap-2 text-sm font-medium text-[#3d4a42]"
                                        >
                                            <PiCheckCircleDuotone
                                                className="shrink-0 text-lg"
                                                style={{
                                                    color: 'var(--lc-gold)',
                                                }}
                                            />
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>{' '}
                    </div>
                </section>

                {/* ── Beneficios ─────────────────────────────────────── */}
                <section
                    className="relative overflow-hidden"
                    style={{ backgroundColor: '#fff' }}
                >
                    <HoneycombLayer />
                    <div className="relative mx-auto max-w-6xl px-4 py-20">
                        <SectionTitle
                            eyebrow="Por qué La Colmena"
                            title="Lo que distingue a nuestros estudiantes"
                        />
                        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                            {BENEFITS.map((benefit, index) => {
                                const Icon =
                                    BENEFIT_ICONS[benefit.icon] ||
                                    PiSparkleDuotone

                                return (
                                    <Reveal
                                        key={benefit.title}
                                        delay={index * 80}
                                        className="rounded-2xl border p-7 transition hover:-translate-y-1 hover:shadow-lg"
                                        style={{
                                            borderColor: 'rgba(46,58,51,.1)',
                                            backgroundColor: 'var(--lc-cream)',
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
                                            {benefit.title}
                                        </h3>
                                        <p className="text-sm leading-relaxed text-[#67726a]">
                                            {benefit.description}
                                        </p>
                                    </Reveal>
                                )
                            })}
                        </div>
                    </div>
                </section>

                {/* ── Nuestra sede ───────────────────────────────────── */}
                <section id="sede" className="relative overflow-hidden">
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${PHOTOS.sede})` }}
                    />
                    <div
                        className="absolute inset-0"
                        style={{
                            background:
                                'linear-gradient(to right, var(--lc-green) 8%, rgba(46,58,51,.86) 55%, rgba(46,58,51,.35) 100%)',
                        }}
                    />
                    <HoneycombLayer tone="light" />
                    <div className="relative mx-auto max-w-6xl px-4 py-20">
                        <Reveal className="max-w-xl">
                            <p
                                className="mb-3 text-sm font-bold uppercase tracking-[0.2em]"
                                style={{ color: 'var(--lc-gold)' }}
                            >
                                Nuestra sede
                            </p>
                            <h2 className="text-3xl font-bold text-white sm:text-4xl">
                                {CAMPUS.title}
                            </h2>
                            <p className="mt-4 text-base leading-relaxed text-white/75">
                                {CAMPUS.description}
                            </p>

                            <address className="mt-6 flex items-start gap-3 not-italic text-white/85">
                                <PiMapPinDuotone
                                    className="mt-0.5 shrink-0 text-xl"
                                    style={{ color: 'var(--lc-gold)' }}
                                />
                                <span className="text-sm leading-relaxed">
                                    {SCHOOL.address}
                                    <br />
                                    {SCHOOL.addressLine2}
                                </span>
                            </address>

                            <div className="mt-6 flex flex-wrap gap-3">
                                {CAMPUS.highlights.map((item) => (
                                    <span
                                        key={item}
                                        className="rounded-full px-4 py-2 text-sm font-medium text-white/90"
                                        style={{
                                            backgroundColor:
                                                'rgba(255,255,255,.12)',
                                        }}
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>

                            <a
                                href={MAPS_LINK}
                                target="_blank"
                                rel="noreferrer"
                                className="mt-8 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition hover:brightness-95"
                                style={{
                                    backgroundColor: 'var(--lc-gold)',
                                    color: 'var(--lc-green-deep)',
                                }}
                            >
                                <PiNavigationArrowDuotone className="text-base" />
                                Cómo llegar
                            </a>
                        </Reveal>
                    </div>
                </section>

                {/* ── Niveles ────────────────────────────────────────── */}
                <section id="niveles" className="relative overflow-hidden">
                    <HoneycombLayer />
                    <div className="relative mx-auto max-w-6xl px-4 py-20">
                        <SectionTitle
                            eyebrow="Oferta académica"
                            title="Cuatro niveles, un mismo estándar"
                            description="Cada nivel tiene su horario y su plan de materias. Toca un nivel para ver el detalle completo."
                        />

                        {/* `items-start` evita que la tarjeta vecina se estire al expandir una */}
                        <div className="grid items-start gap-5 lg:grid-cols-2">
                            {LEVELS.map((level) => {
                                const open = openLevel === level.id

                                return (
                                    <div
                                        key={level.id}
                                        className={classNames(
                                            'overflow-hidden rounded-2xl border transition',
                                            open && 'shadow-lg',
                                        )}
                                        style={{
                                            borderColor: open
                                                ? 'var(--lc-gold)'
                                                : 'rgba(46,58,51,.12)',
                                            backgroundColor: '#fff',
                                        }}
                                    >
                                        <button
                                            type="button"
                                            className="flex w-full items-start justify-between gap-4 p-6 text-left"
                                            onClick={() =>
                                                setOpenLevel(
                                                    open ? null : level.id,
                                                )
                                            }
                                        >
                                            <div className="min-w-0 flex-1">
                                                <h3
                                                    className="text-xl font-bold"
                                                    style={{
                                                        color: 'var(--lc-green)',
                                                    }}
                                                >
                                                    {level.name}
                                                </h3>
                                                <p className="mt-0.5 text-sm text-[#6b766e]">
                                                    {level.tagline}
                                                </p>

                                                <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
                                                    <span className="flex items-center gap-1.5 text-[#4a554d]">
                                                        <PiClockDuotone
                                                            className="text-base"
                                                            style={{
                                                                color: 'var(--lc-gold)',
                                                            }}
                                                        />
                                                        {level.schedule}
                                                    </span>
                                                </div>
                                            </div>

                                            <span
                                                className="mt-1 flex shrink-0 items-center gap-1.5 whitespace-nowrap text-sm font-bold"
                                                style={{
                                                    color: 'var(--lc-green)',
                                                }}
                                            >
                                                {open
                                                    ? 'Ocultar materias'
                                                    : 'Ver materias'}
                                                <PiCaretDownBold
                                                    className={classNames(
                                                        'text-xs transition',
                                                        open && 'rotate-180',
                                                    )}
                                                />
                                            </span>
                                        </button>

                                        {open && (
                                            <div
                                                className="border-t px-6 pb-6 pt-5"
                                                style={{
                                                    borderColor:
                                                        'rgba(46,58,51,.08)',
                                                }}
                                            >
                                                <p className="mb-3 text-xs font-bold uppercase tracking-[0.15em] text-[#8a948c]">
                                                    Materias (
                                                    {level.subjects.length})
                                                </p>
                                                <div className="flex flex-wrap gap-2">
                                                    {level.subjects.map(
                                                        (subject) => (
                                                            <span
                                                                key={subject}
                                                                className="rounded-full px-3 py-1.5 text-xs font-medium"
                                                                style={{
                                                                    backgroundColor:
                                                                        'var(--lc-cream)',
                                                                    color: '#4a554d',
                                                                }}
                                                            >
                                                                {subject}
                                                            </span>
                                                        ),
                                                    )}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section>

                {/* ── Vida escolar ───────────────────────────────────── */}
                <section
                    id="vida"
                    style={{ backgroundColor: '#fff' }}
                    className="relative overflow-hidden border-y"
                >
                    <HoneycombLayer />
                    <div className="relative mx-auto max-w-6xl px-4 py-20">
                        <SectionTitle
                            eyebrow="Vida escolar"
                            title="Aprender también pasa fuera del aula"
                            description="Banda de guerra, idiomas, emprendimiento y deporte: actividades que forman en disciplina, creatividad y trabajo en equipo."
                        />

                        {/* Bento: la banda ocupa el bloque grande; el resto
                            llena las celdas. Cada tarjeta lleva a su sección
                            en /vida-escolar. */}
                        <div className="grid gap-5 sm:grid-cols-2 lg:auto-rows-[15rem] lg:grid-cols-4">
                            {ACTIVITIES.map((activity, i) => (
                                <Reveal
                                    key={activity.id}
                                    delay={i * 100}
                                    className={classNames(
                                        ACTIVITY_TILES[i].span,
                                        'flex min-h-72 lg:min-h-0',
                                    )}
                                >
                                    <ActivityTile
                                        activity={activity}
                                        size={ACTIVITY_TILES[i].size}
                                    />
                                </Reveal>
                            ))}
                        </div>

                        <div className="mt-8 text-center">
                            <Link
                                to="/vida-escolar"
                                className="inline-flex items-center gap-2 rounded-full border-2 px-6 py-3 text-sm font-bold transition hover:bg-[var(--lc-cream)]"
                                style={{
                                    borderColor: 'rgba(46,58,51,.2)',
                                    color: 'var(--lc-green)',
                                }}
                            >
                                Conocer toda la vida escolar
                                <PiArrowRightBold />
                            </Link>
                        </div>
                    </div>
                </section>

                {/* ── Plataforma: solo se menciona ───────────────────── */}
                <section
                    id="plataforma"
                    className="relative overflow-hidden py-20"
                >
                    <HoneycombLayer />
                    <div
                        className="relative mx-auto grid max-w-6xl items-center gap-8 rounded-3xl border p-8 sm:p-12 lg:grid-cols-[1fr_auto]"
                        style={{
                            borderColor: 'rgba(46,58,51,.12)',
                            backgroundColor: '#fff',
                        }}
                    >
                        <div>
                            <p
                                className="mb-3 text-sm font-bold uppercase tracking-[0.2em]"
                                style={{ color: 'var(--lc-gold)' }}
                            >
                                Plataforma
                            </p>
                            <h2
                                className="text-2xl font-bold sm:text-3xl"
                                style={{ color: 'var(--lc-green)' }}
                            >
                                {PLATFORM.title}
                            </h2>
                            <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#5b665e]">
                                {PLATFORM.description}
                            </p>
                        </div>

                        <a
                            href={SIGN_IN_URL}
                            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full px-7 py-3.5 text-base font-bold text-white transition hover:brightness-110"
                            style={{ backgroundColor: 'var(--lc-green)' }}
                        >
                            Entrar al portal
                            <PiArrowRightBold />
                        </a>
                    </div>
                </section>

                {/* ── Admisión ───────────────────────────────────────── */}
                <section
                    id="admision"
                    className="relative overflow-hidden"
                    style={{ backgroundColor: 'var(--lc-green)' }}
                >
                    <HoneycombLayer tone="light" opacity={0.07} />
                    <div className="relative mx-auto max-w-6xl px-4 py-20">
                        <SectionTitle
                            light
                            eyebrow="Admisión"
                            title="Matricularse es sencillo"
                            description="Reúne los documentos, envía tu solicitud en línea y nuestra secretaría te contacta."
                        />

                        <div className="grid gap-6 lg:grid-cols-2">
                            <div
                                className="rounded-2xl p-8"
                                style={{
                                    backgroundColor: 'rgba(255,255,255,.06)',
                                }}
                            >
                                <h3 className="mb-5 text-lg font-bold text-white">
                                    Requisitos
                                </h3>
                                <ul className="space-y-3">
                                    {REQUIREMENTS.map((item) => (
                                        <li
                                            key={item}
                                            className="flex gap-3 text-sm leading-relaxed text-white/80"
                                        >
                                            <PiCheckCircleDuotone
                                                className="mt-0.5 shrink-0 text-lg"
                                                style={{
                                                    color: 'var(--lc-gold)',
                                                }}
                                            />
                                            {item}
                                        </li>
                                    ))}
                                </ul>

                                <Link
                                    to="/reglamento"
                                    className="mt-6 inline-flex items-center gap-2 text-sm font-bold transition hover:brightness-110"
                                    style={{ color: 'var(--lc-gold)' }}
                                >
                                    Conocer el reglamento del colegio
                                    <PiArrowRightBold />
                                </Link>
                            </div>

                            <div
                                className="rounded-2xl p-8"
                                style={{
                                    backgroundColor: 'rgba(245,197,24,.12)',
                                }}
                            >
                                <h3 className="mb-5 text-lg font-bold text-white">
                                    Facilidades de pago
                                </h3>
                                <ul className="space-y-4">
                                    {PAYMENT_NOTES.map((note) => (
                                        <li
                                            key={note}
                                            className="rounded-xl px-4 py-3 text-sm leading-relaxed text-white/90"
                                            style={{
                                                backgroundColor:
                                                    'rgba(255,255,255,.07)',
                                            }}
                                        >
                                            {note}
                                        </li>
                                    ))}
                                </ul>

                                <a
                                    href={PRE_ENROLLMENT_URL}
                                    className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-base font-bold transition hover:brightness-95"
                                    style={{
                                        backgroundColor: 'var(--lc-gold)',
                                        color: 'var(--lc-green-deep)',
                                    }}
                                >
                                    Llenar formulario de pre-matrícula
                                    <PiArrowRightBold />
                                </a>
                            </div>
                        </div>

                        {/* Formas de pago */}
                        <div
                            className="mt-6 rounded-2xl p-8"
                            style={{ backgroundColor: 'rgba(255,255,255,.06)' }}
                        >
                            <h3 className="mb-2 text-lg font-bold text-white">
                                Formas de pago aceptadas
                            </h3>
                            <p className="mb-6 text-sm text-white/60">
                                Paga como te quede más cómodo. Cada pago queda
                                registrado en el portal del acudiente.
                            </p>

                            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                                {PAYMENT_METHODS.map((method) => {
                                    const Icon =
                                        PAYMENT_ICONS[method.icon] ||
                                        PiMoneyDuotone

                                    return (
                                        <div
                                            key={method.title}
                                            className="rounded-xl p-5"
                                            style={{
                                                backgroundColor:
                                                    'rgba(255,255,255,.06)',
                                            }}
                                        >
                                            <Hexagon
                                                className="mb-3 h-10 w-10 text-lg"
                                                style={{
                                                    backgroundColor:
                                                        'rgba(245,197,24,.18)',
                                                    color: 'var(--lc-gold)',
                                                }}
                                            >
                                                <Icon />
                                            </Hexagon>
                                            <p className="text-sm font-bold text-white">
                                                {method.title}
                                            </p>
                                            <p className="mt-1 text-xs leading-relaxed text-white/60">
                                                {method.description}
                                            </p>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── Contacto ───────────────────────────────────────── */}
                <section id="contacto" className="relative overflow-hidden">
                    <HoneycombLayer />
                    <div className="relative mx-auto max-w-6xl px-4 py-20">
                        <SectionTitle
                            eyebrow="Contáctanos"
                            title="Estamos para atenderte"
                            description="Toca cualquier dato: desde el celular marca o abre el correo; desde la computadora lo copia al portapapeles."
                        />

                        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                            {CONTACT_CARDS.map((card, index) => {
                                const Icon = card.icon

                                return (
                                    <Reveal
                                        key={card.title}
                                        delay={index * 70}
                                        className="flex flex-col items-center justify-center rounded-2xl border bg-white p-7 text-center transition hover:-translate-y-1 hover:shadow-lg"
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
                                            className="mb-3 text-sm font-bold uppercase tracking-wide"
                                            style={{ color: 'var(--lc-green)' }}
                                        >
                                            {card.title}
                                        </h3>

                                        <div className="flex flex-col items-center gap-0.5">
                                            {card.values.map((value) =>
                                                card.external ? (
                                                    <a
                                                        key={value.text}
                                                        href={value.href}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        className="rounded-lg px-2 py-1 text-sm text-[#4a554d] transition hover:bg-[rgba(46,58,51,.06)]"
                                                    >
                                                        {value.text}
                                                    </a>
                                                ) : (
                                                    <ContactValue
                                                        key={value.text}
                                                        value={value.text}
                                                        href={value.href}
                                                        itemKey={`${card.title}-${value.text}`}
                                                        copiado={copiado}
                                                        onActivate={activar}
                                                    />
                                                ),
                                            )}
                                        </div>
                                    </Reveal>
                                )
                            })}
                        </div>

                        <Reveal
                            className="mt-6 flex flex-col items-center gap-5 rounded-2xl px-8 py-8 text-center sm:flex-row sm:justify-between sm:text-left"
                            style={{ backgroundColor: 'rgba(245,197,24,.18)' }}
                        >
                            <div className="flex flex-col items-center gap-3 sm:flex-row">
                                <Hexagon
                                    className="h-12 w-12 shrink-0 text-xl"
                                    style={{
                                        backgroundColor: 'rgba(255,255,255,.7)',
                                        color: 'var(--lc-green)',
                                    }}
                                >
                                    <PiClockDuotone />
                                </Hexagon>
                                <div>
                                    <p
                                        className="text-sm font-bold"
                                        style={{ color: 'var(--lc-green)' }}
                                    >
                                        Horario de atención
                                    </p>
                                    <p className="text-sm text-[#5b665e]">
                                        Lunes a viernes · 7:30 a. m. — 2:00 p.
                                        m.
                                    </p>
                                </div>
                            </div>
                            <a
                                href={whatsappLink}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold text-white transition hover:brightness-110"
                                style={{ backgroundColor: '#25D366' }}
                            >
                                <PiWhatsappLogoDuotone className="text-lg" />
                                Escribir por WhatsApp
                            </a>
                        </Reveal>
                    </div>
                </section>
            </main>

            {/* ── Pie ────────────────────────────────────────────── */}
            <footer
                className="relative overflow-hidden"
                style={{ backgroundColor: 'var(--lc-green-deep)' }}
            >
                <HoneycombLayer tone="light" opacity={0.05} />
                <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-12 text-center sm:flex-row sm:text-left">
                    <Crest className="h-16 w-auto" />
                    <div className="flex-1">
                        <p className="font-bold text-white">{SCHOOL.name}</p>
                        <p className="text-sm text-white/55">
                            {SCHOOL.address} · {SCHOOL.addressLine2}
                        </p>
                        <p className="mt-1 text-sm text-white/40">
                            Año lectivo {SCHOOL.schoolYear}
                        </p>
                    </div>
                    <p
                        className="text-sm font-bold italic"
                        style={{ color: 'var(--lc-gold)' }}
                    >
                        «{SCHOOL.motto}»
                    </p>
                </div>

                <div className="border-t border-white/10">
                    <nav
                        aria-label="Enlaces del sitio"
                        className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-6 gap-y-2 px-4 py-5 text-sm sm:justify-start"
                    >
                        {NAV.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                className="text-white/55 transition hover:text-white"
                            >
                                {item.label}
                            </a>
                        ))}
                        <Link
                            to="/reglamento"
                            className="text-white/55 transition hover:text-white"
                        >
                            Reglamento
                        </Link>
                        <a
                            href={PRE_ENROLLMENT_URL}
                            className="text-white/55 transition hover:text-white"
                        >
                            Pre-matrícula en línea
                        </a>
                        <a
                            href={SIGN_IN_URL}
                            className="text-white/55 transition hover:text-white"
                        >
                            Portal del acudiente
                        </a>
                    </nav>
                </div>
            </footer>
        </div>
    )
}

export default LaColmena
