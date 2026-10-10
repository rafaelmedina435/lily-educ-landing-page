import { Fragment, useMemo, useRef, useState } from 'react'
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
    PiPauseFill,
    PiSpeakerHighFill,
    PiSpeakerLowFill,
    PiSpeakerXFill,
} from 'react-icons/pi'
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
import ApplyButton, { PRE_ENROLLMENT_PATH } from './ApplyButton'
import { ActivityMedia, activityHref } from './activities'
import { LanguageSwitch, useLanguage } from './language'
import Seo from '@/components/shared/Seo'
import { SIGN_IN_URL } from '@/configs/platform.config'

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

const mapsHref = (query) =>
    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`

const instagramHref = (user) => `https://www.instagram.com/${user}/`

/** Un teléfono panameño marcable: +507 y solo dígitos. */
const telHref = (phone) => `tel:+507${phone.replace(/\D/g, '')}`

/** Tarjetas de contacto, con los títulos en el idioma activo. */
const contactCards = ({ SCHOOL, CAMPUS }, t) => {
    const mapsLink = mapsHref(CAMPUS.mapsQuery)
    const instagramLink = instagramHref(SCHOOL.instagram)

    return [
        {
            icon: PiMapPinDuotone,
            title: t('home.contact.address'),
            external: true,
            values: [
                { text: SCHOOL.address, href: mapsLink },
                { text: SCHOOL.addressLine2, href: mapsLink },
            ],
        },
        {
            icon: PiPhoneDuotone,
            title: t('home.contact.phones'),
            values: SCHOOL.phones.map((phone) => ({
                text: phone,
                href: telHref(phone),
            })),
        },
        {
            icon: PiEnvelopeSimpleDuotone,
            title: t('home.contact.email'),
            copyButton: true,
            values: [{ text: SCHOOL.email, href: `mailto:${SCHOOL.email}` }],
        },
        {
            icon: PiInstagramLogoDuotone,
            title: 'Instagram',
            external: true,
            href: instagramLink,
            values: [
                {
                    text: `@${SCHOOL.instagram}`,
                    href: instagramLink,
                },
            ],
        },
    ]
}

const navItems = (t) => [
    { href: '#nosotros', label: t('home.nav.about') },
    { href: '#niveles', label: t('home.nav.levels') },
    { href: '#vida', label: t('home.nav.schoolLife') },
    { href: '#admision', label: t('home.nav.admissions') },
    { href: '#contacto', label: t('home.nav.contact') },
]

/** Datos estructurados: ayudan a Google a mostrar la ficha del colegio. */
const jsonLd = ({ SCHOOL, ABOUT }) => ({
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
    sameAs: [instagramHref(SCHOOL.instagram)],
    address: {
        '@type': 'PostalAddress',
        streetAddress: SCHOOL.address,
        addressLocality: SCHOOL.city,
        addressRegion: SCHOOL.province,
        addressCountry: 'PA',
    },
    openingHours: 'Mo-Fr 07:30-14:00',
})

/**
 * Celdas del bento de vida escolar, en el orden de `ACTIVITIES`: la
 * primera (folclore) ocupa 2×2 y las otras cuatro llenan el resto de la
 * cuadrícula de 4 columnas. Las celdas de 1×1 miden 15rem en
 * escritorio: ahí no cabe el resumen, solo el título y «Ver más».
 */
const ACTIVITY_TILES = [
    { span: 'sm:col-span-2 lg:row-span-2', size: 'large' },
    { span: '', size: 'small' },
    { span: '', size: 'small' },
    { span: '', size: 'small' },
    { span: '', size: 'small' },
]

/**
 * Tarjeta de actividad: foto a sangre con el título abajo. Con mouse,
 * en escritorio, al pasar por encima aparece «Ver más» (y el resumen,
 * si la celda tiene espacio); en pantallas táctiles se ven siempre.
 */
const ActivityTile = ({ activity, size }) => {
    const { t } = useLanguage()

    return (
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
                            {t('home.schoolLife.learnMore')}
                            <PiArrowRightBold className="transition-transform group-hover:translate-x-1" />
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    )
}

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

/** Para partir ABOUT dejando las frases resaltadas en las posiciones impares. */
const highlightPattern = (phrases) =>
    new RegExp(
        `(${phrases
            .map((phrase) => phrase.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
            .join('|')})`,
    )

/** Segundos a «m:ss». */
const formatTime = (seconds) => {
    const total = Math.floor(seconds || 0)
    return `${Math.floor(total / 60)}:${String(total % 60).padStart(2, '0')}`
}

/**
 * Video institucional con sonido. No descarga nada hasta que se pulsa
 * reproducir (preload="none"); antes solo se ve el póster con el botón.
 *
 * Usa controles propios (play/pausa, barra de avance y volumen) en vez
 * de los del navegador, para no ofrecer pantalla completa, transmitir,
 * ventana flotante, velocidad ni descarga. También se bloquea el menú del clic
 * derecho, que trae «Guardar video como».
 */
const AnniversaryVideo = () => {
    const { t, content } = useLanguage()
    const { SCHOOL } = content
    const videoRef = useRef(null)
    const [started, setStarted] = useState(false)
    const [playing, setPlaying] = useState(false)
    const [volume, setVolume] = useState(1)
    const [muted, setMuted] = useState(false)
    const [currentTime, setCurrentTime] = useState(0)
    const [duration, setDuration] = useState(0)

    const play = () => {
        setStarted(true)
        videoRef.current?.play()
    }

    const togglePlay = () => {
        const video = videoRef.current
        if (!video) return

        if (video.paused) video.play()
        else video.pause()
    }

    const toggleMute = () => {
        const video = videoRef.current
        if (!video) return

        video.muted = !video.muted
        // Si se había bajado a cero, al reactivar vuelve a un nivel audible
        if (!video.muted && video.volume === 0) video.volume = 1
    }

    const changeVolume = (event) => {
        const video = videoRef.current
        if (!video) return

        const value = Number(event.target.value)
        video.volume = value
        video.muted = value === 0
    }

    const seek = (event) => {
        const video = videoRef.current
        if (!video) return

        video.currentTime = Number(event.target.value)
    }

    const silent = muted || volume === 0
    const VolumeIcon = silent
        ? PiSpeakerXFill
        : volume < 0.5
          ? PiSpeakerLowFill
          : PiSpeakerHighFill

    return (
        <div
            className="relative overflow-hidden rounded-3xl bg-black shadow-2xl"
            onContextMenu={(event) => event.preventDefault()}
        >
            <video
                ref={videoRef}
                className="aspect-video w-full"
                preload="none"
                playsInline
                poster={ANNIVERSARY_VIDEO.poster}
                controlsList="nodownload nofullscreen noremoteplayback noplaybackrate"
                disablePictureInPicture
                disableRemotePlayback
                onClick={started ? togglePlay : undefined}
                onPlay={() => setPlaying(true)}
                onPause={() => setPlaying(false)}
                onLoadedMetadata={(event) =>
                    setDuration(event.currentTarget.duration)
                }
                onTimeUpdate={(event) =>
                    setCurrentTime(event.currentTarget.currentTime)
                }
                onVolumeChange={(event) => {
                    setVolume(event.currentTarget.volume)
                    setMuted(event.currentTarget.muted)
                }}
            >
                <source src={ANNIVERSARY_VIDEO.webm} type="video/webm" />
                <source src={ANNIVERSARY_VIDEO.mp4} type="video/mp4" />
            </video>

            {started && (
                <div
                    className="absolute inset-x-0 bottom-0 px-4 pb-3 pt-10 text-white"
                    style={{
                        background:
                            'linear-gradient(180deg, transparent 0%, rgba(34,43,38,.8) 100%)',
                    }}
                >
                    <input
                        type="range"
                        min="0"
                        max={duration || 0}
                        step="0.1"
                        value={currentTime}
                        onChange={seek}
                        className="block w-full cursor-pointer"
                        style={{ accentColor: 'var(--lc-gold)' }}
                        aria-label={t('video.progress')}
                        aria-valuetext={t(
                            'video.position',
                            formatTime(currentTime),
                            formatTime(duration),
                        )}
                    />

                    <div className="mt-2 flex items-center gap-3">
                        <button
                            type="button"
                            onClick={togglePlay}
                            className="flex h-10 w-10 items-center justify-center rounded-full transition hover:brightness-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                            style={{
                                backgroundColor: 'var(--lc-gold)',
                                color: 'var(--lc-green-deep)',
                            }}
                            aria-label={
                                playing ? t('video.pause') : t('video.play')
                            }
                        >
                            {playing ? (
                                <PiPauseFill className="text-lg" />
                            ) : (
                                <PiPlayFill className="ml-0.5 text-lg" />
                            )}
                        </button>

                        {/* La barra de volumen se despliega al pasar el mouse o enfocar el botón */}
                        <div className="group/volume flex items-center">
                            <button
                                type="button"
                                onClick={toggleMute}
                                className="flex h-10 w-10 items-center justify-center rounded-full transition hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                                aria-label={
                                    silent ? t('video.unmute') : t('video.mute')
                                }
                            >
                                <VolumeIcon className="text-xl" />
                            </button>

                            <input
                                type="range"
                                min="0"
                                max="1"
                                step="0.05"
                                value={silent ? 0 : volume}
                                onChange={changeVolume}
                                className="w-0 cursor-pointer opacity-0 transition-all duration-300 group-hover/volume:ml-1 group-hover/volume:w-24 group-hover/volume:opacity-100 group-focus-within/volume:ml-1 group-focus-within/volume:w-24 group-focus-within/volume:opacity-100"
                                style={{ accentColor: 'var(--lc-gold)' }}
                                aria-label={t('video.volume')}
                            />
                        </div>

                        <span className="ml-auto text-sm tabular-nums text-white/80">
                            {formatTime(currentTime)} / {formatTime(duration)}
                        </span>
                    </div>
                </div>
            )}

            {!started && (
                <button
                    type="button"
                    onClick={play}
                    className="group absolute inset-0 flex flex-col items-center justify-center gap-4 text-white"
                    style={{
                        background:
                            'linear-gradient(180deg, rgba(34,43,38,.15) 0%, rgba(34,43,38,.7) 100%)',
                    }}
                    aria-label={t('video.playLabel')}
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
                            {t('video.title')}
                        </span>
                        {/* El video no lleva subtítulos: en inglés se avisa que está en español */}
                        <span className="mt-1 block text-sm text-white/70">
                            {t('video.meta')}
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

    const { t, content } = useLanguage()
    const {
        SCHOOL,
        ABOUT,
        ABOUT_HIGHLIGHTS,
        BENEFITS,
        LEVELS,
        PAYMENT_METHODS,
        REQUIREMENTS,
        ACTIVITIES,
        PLATFORM,
        CAMPUS,
    } = content
    const nav = navItems(t)
    const mapsLink = mapsHref(CAMPUS.mapsQuery)
    // Memorizado: <Seo> reescribe el <head> cada vez que cambia
    const structuredData = useMemo(() => jsonLd(content), [content])

    const whatsappLink = `https://wa.me/${SCHOOL.whatsapp}?text=${encodeURIComponent(
        t('home.whatsappMessage'),
    )}`

    return (
        <div
            style={{ ...THEME, backgroundColor: 'var(--lc-cream)' }}
            className="min-h-screen font-sans"
        >
            <Seo
                title={`${SCHOOL.name} — ${SCHOOL.city}, ${SCHOOL.province}`}
                description={t('home.seoDescription')}
                canonical="/"
                image={PHOTOS.sede}
                locale={t('meta.locale')}
                jsonLd={structuredData}
            />

            {/* ── Barra superior ─────────────────────────────────── */}
            <header
                className="sticky top-0 z-50 border-b backdrop-blur"
                style={{
                    backgroundColor: 'rgba(46,58,51,.94)',
                    borderColor: 'rgba(245,197,24,.25)',
                }}
            >
                <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 sm:gap-4 lg:px-12 xl:px-4 py-3">
                    <a href="#inicio" className="flex items-center gap-3">
                        <Crest className="h-11 w-auto drop-shadow" />
                        <span className="leading-tight text-white">
                            <span className="block whitespace-nowrap text-[11px] uppercase tracking-[0.12em] opacity-70 sm:tracking-[0.18em]">
                                Colegio Bilingüe
                            </span>
                            <span className="block whitespace-nowrap text-lg font-bold">
                                La Colmena
                            </span>
                        </span>
                    </a>

                    <nav className="ml-auto hidden items-center gap-6 xl:flex">
                        {nav.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                className="text-sm font-medium text-white/80 transition hover:text-white"
                            >
                                {item.label}
                            </a>
                        ))}
                    </nav>

                    <div className="hidden items-center gap-3 xl:flex">
                        <a
                            href={SIGN_IN_URL}
                            className="text-sm font-medium text-white/70 transition hover:text-white"
                        >
                            Portal
                        </a>
                        <Link
                            to={PRE_ENROLLMENT_PATH}
                            className="rounded-full px-5 py-2.5 text-sm font-bold transition hover:brightness-95"
                            style={{
                                backgroundColor: 'var(--lc-gold)',
                                color: 'var(--lc-green-deep)',
                            }}
                        >
                            {t('common.onlinePreEnrollment')}
                        </Link>
                    </div>

                    {/* Siempre a la vista: en escritorio cierra la barra,
                        después de la pre-matrícula; hasta 1280px va junto al
                        botón del menú, porque con el selector el menú completo
                        ya no cabe en una línea a 1024px */}
                    <LanguageSwitch className="ml-auto xl:ml-0" />

                    <button
                        type="button"
                        aria-label={t('home.openMenu')}
                        className="-ml-2 p-2 text-2xl text-white xl:hidden"
                        onClick={() => setMenuOpen((open) => !open)}
                    >
                        {menuOpen ? <PiXBold /> : <PiListBold />}
                    </button>
                </div>

                {menuOpen && (
                    <div className="border-t border-white/10 px-4 pb-4 xl:hidden">
                        <nav className="flex flex-col gap-1 pt-3">
                            {nav.map((item) => (
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
                            <Link
                                to={PRE_ENROLLMENT_PATH}
                                className="mt-2 rounded-full px-4 py-2.5 text-center text-sm font-bold"
                                style={{
                                    backgroundColor: 'var(--lc-gold)',
                                    color: 'var(--lc-green-deep)',
                                }}
                            >
                                {t('common.onlinePreEnrollment')}
                            </Link>
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

                    <div className="relative mx-auto grid w-full max-w-6xl items-center gap-6 px-4 lg:px-12 xl:px-4 py-8 text-center sm:gap-8 sm:py-14 lg:grid-cols-[1.15fr_1fr] lg:gap-10 lg:py-28 lg:text-left">
                        <div>
                            <span
                                className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-[0.15em]"
                                style={{
                                    backgroundColor: 'rgba(245,197,24,.15)',
                                    color: 'var(--lc-gold-soft)',
                                }}
                            >
                                {t('home.hero.badge')}
                            </span>

                            <h1 className="mt-4 text-4xl font-bold leading-[1.1] text-white sm:mt-6 sm:text-5xl lg:text-6xl">
                                {SCHOOL.motto}
                            </h1>

                            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/75 sm:mt-5 sm:text-lg lg:mx-0">
                                {t('home.hero.intro')}
                            </p>

                            <div className="mt-7 flex flex-wrap justify-center gap-3 sm:mt-9 lg:justify-start">
                                <Link
                                    to={PRE_ENROLLMENT_PATH}
                                    className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-bold shadow-lg sm:px-7 sm:py-3.5 sm:text-base transition hover:brightness-95"
                                    style={{
                                        backgroundColor: 'var(--lc-gold)',
                                        color: 'var(--lc-green-deep)',
                                    }}
                                >
                                    {t('common.startPreEnrollment')}
                                    <PiArrowRightBold />
                                </Link>
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
                                    {t('home.hero.whatsapp')}
                                </a>
                            </div>

                            <p className="mt-5 text-sm text-white/50 sm:mt-6">
                                {t('home.hero.founded')}
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
                    <div className="relative mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 lg:px-12 xl:px-4 py-10 lg:grid-cols-4">
                        {t('home.stats').map((stat) => (
                            <div key={stat.label} className="text-center">
                                <p
                                    className="text-3xl font-bold sm:text-4xl"
                                    style={{ color: 'var(--lc-green)' }}
                                >
                                    {stat.value}
                                </p>
                                <p className="mt-1 text-sm font-semibold uppercase tracking-wider text-[#6b766e]">
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ── Nosotros ───────────────────────────────────────── */}
                <section id="nosotros" className="relative overflow-hidden">
                    <HoneycombLayer />
                    <div className="relative mx-auto max-w-6xl px-4 lg:px-12 xl:px-4 py-20">
                        <SectionTitle
                            eyebrow={t('home.about.eyebrow')}
                            title={t('home.about.title')}
                        />
                        <div className="grid gap-10 lg:grid-cols-[1.25fr_1fr] lg:items-center">
                            <Reveal className="relative mx-auto w-full max-w-2xl lg:mx-0">
                                <AnniversaryVideo />

                                {/* Debajo del video, no encima, para no tapar sus controles. */}
                                <div
                                    className="relative mt-4 flex items-center justify-center gap-4 rounded-2xl p-4 shadow-lg sm:px-6"
                                    style={{
                                        backgroundColor: 'var(--lc-green)',
                                    }}
                                >
                                    <Crest className="w-12 shrink-0 drop-shadow sm:w-14" />
                                    <div className="min-w-0">
                                        <p
                                            className="text-base font-bold italic leading-snug sm:text-xl"
                                            style={{ color: 'var(--lc-gold)' }}
                                        >
                                            {t('common.motto')}
                                        </p>
                                        <p className="mt-0.5 text-xs tracking-wide text-white/60 sm:text-sm">
                                            {SCHOOL.city}, {SCHOOL.province}
                                        </p>
                                    </div>
                                </div>
                            </Reveal>

                            <div>
                                <p className="text-lg leading-relaxed text-[#4a554d]">
                                    {/* Las frases de ABOUT_HIGHLIGHTS van en negrita */}
                                    {ABOUT.split(
                                        highlightPattern(ABOUT_HIGHLIGHTS),
                                    ).map((part, index) =>
                                        index % 2 ? (
                                            <strong
                                                key={index}
                                                className="font-bold"
                                                style={{
                                                    color: 'var(--lc-green)',
                                                }}
                                            >
                                                {part}
                                            </strong>
                                        ) : (
                                            <Fragment key={index}>
                                                {part}
                                            </Fragment>
                                        ),
                                    )}
                                </p>
                                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                                    {t('home.about.checks').map((item) => (
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
                                <Link
                                    to="/historia"
                                    className="mt-8 inline-flex items-center gap-2 rounded-full border-2 px-6 py-3 text-sm font-bold transition hover:bg-white"
                                    style={{
                                        borderColor: 'rgba(46,58,51,.2)',
                                        color: 'var(--lc-green)',
                                    }}
                                >
                                    {t('home.about.historyLink')}
                                    <PiArrowRightBold />
                                </Link>
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
                    <div className="relative mx-auto max-w-6xl px-4 lg:px-12 xl:px-4 py-20">
                        <SectionTitle
                            eyebrow={t('home.benefits.eyebrow')}
                            title={t('home.benefits.title')}
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
                    <div className="relative mx-auto max-w-6xl px-4 lg:px-12 xl:px-4 py-20">
                        <Reveal className="max-w-xl">
                            <p
                                className="mb-3 text-sm font-bold uppercase tracking-[0.2em]"
                                style={{ color: 'var(--lc-gold)' }}
                            >
                                {t('home.campus.eyebrow')}
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
                                href={mapsLink}
                                target="_blank"
                                rel="noreferrer"
                                className="mt-8 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition hover:brightness-95"
                                style={{
                                    backgroundColor: 'var(--lc-gold)',
                                    color: 'var(--lc-green-deep)',
                                }}
                            >
                                <PiNavigationArrowDuotone className="text-base" />
                                {t('home.campus.directions')}
                            </a>
                        </Reveal>
                    </div>
                </section>

                {/* ── Niveles ────────────────────────────────────────── */}
                <section id="niveles" className="relative overflow-hidden">
                    <HoneycombLayer />
                    <div className="relative mx-auto max-w-6xl px-4 lg:px-12 xl:px-4 py-20">
                        <SectionTitle
                            eyebrow={t('home.levels.eyebrow')}
                            title={t('home.levels.title')}
                            description={t('home.levels.description')}
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
                                                    ? t(
                                                          'home.levels.hideSubjects',
                                                      )
                                                    : t(
                                                          'home.levels.showSubjects',
                                                      )}
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
                                                    {t(
                                                        'home.levels.subjectCount',
                                                        level.subjects.length,
                                                    )}
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
                    <div className="relative mx-auto max-w-6xl px-4 lg:px-12 xl:px-4 py-20">
                        <SectionTitle
                            eyebrow={t('home.schoolLife.eyebrow')}
                            title={t('home.schoolLife.title')}
                            description={t('home.schoolLife.description')}
                        />

                        {/* Bento: el folclore ocupa el bloque grande; el resto
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
                                {t('home.schoolLife.allActivities')}
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
                                {t('home.platform.eyebrow')}
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
                            {t('home.platform.cta')}
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
                    <div className="relative mx-auto max-w-6xl px-4 lg:px-12 xl:px-4 py-20">
                        <SectionTitle
                            light
                            eyebrow={t('home.admissions.eyebrow')}
                            title={t('home.admissions.title')}
                            description={t('home.admissions.description')}
                        />

                        <div
                            className="rounded-2xl p-8"
                            style={{ backgroundColor: 'rgba(255,255,255,.06)' }}
                        >
                            <h3 className="mb-5 text-lg font-bold text-white">
                                {t('home.admissions.requirements')}
                            </h3>
                            <ul className="grid gap-x-8 gap-y-3 md:grid-cols-2">
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

                            <div className="mt-7 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                                <Link
                                    to="/reglamento"
                                    className="inline-flex items-center gap-2 text-sm font-bold transition hover:brightness-110"
                                    style={{ color: 'var(--lc-gold)' }}
                                >
                                    {t('home.admissions.regulationsLink')}
                                    <PiArrowRightBold />
                                </Link>

                                <Link
                                    to={PRE_ENROLLMENT_PATH}
                                    className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-base font-bold transition hover:brightness-95"
                                    style={{
                                        backgroundColor: 'var(--lc-gold)',
                                        color: 'var(--lc-green-deep)',
                                    }}
                                >
                                    {t('home.admissions.formLink')}
                                    <PiArrowRightBold />
                                </Link>
                            </div>
                        </div>

                        {/* Formas de pago */}
                        <div
                            className="mt-6 rounded-2xl p-8"
                            style={{ backgroundColor: 'rgba(255,255,255,.06)' }}
                        >
                            <h3 className="mb-2 text-lg font-bold text-white">
                                {t('home.admissions.paymentTitle')}
                            </h3>
                            <p className="mb-6 text-sm text-white/60">
                                {t('home.admissions.paymentDescription')}
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
                    <div className="relative mx-auto max-w-6xl px-4 lg:px-12 xl:px-4 py-20">
                        <SectionTitle
                            eyebrow={t('home.contact.eyebrow')}
                            title={t('home.contact.title')}
                            description={t('home.contact.description')}
                        />

                        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                            {contactCards(content, t).map((card, index) => {
                                const Icon = card.icon

                                const contenido = (
                                    <>
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
                                                card.href ? (
                                                    <span
                                                        key={value.text}
                                                        className="rounded-lg px-2 py-1 text-sm text-[#4a554d] transition group-hover:underline"
                                                    >
                                                        {value.text}
                                                    </span>
                                                ) : card.external ? (
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
                                                        copyButton={
                                                            card.copyButton
                                                        }
                                                    />
                                                ),
                                            )}
                                        </div>
                                    </>
                                )

                                const cardClassName =
                                    'flex h-full flex-col items-center justify-center rounded-2xl border bg-white p-7 text-center transition hover:-translate-y-1 hover:shadow-lg'
                                const cardStyle = {
                                    borderColor: 'rgba(46,58,51,.1)',
                                }

                                return card.href ? (
                                    <Reveal key={card.title} delay={index * 70}>
                                        <a
                                            href={card.href}
                                            target="_blank"
                                            rel="noreferrer"
                                            aria-label={`${card.title}: ${card.values[0].text}`}
                                            className={`group ${cardClassName}`}
                                            style={cardStyle}
                                        >
                                            {contenido}
                                        </a>
                                    </Reveal>
                                ) : (
                                    <Reveal
                                        key={card.title}
                                        delay={index * 70}
                                        className={cardClassName}
                                        style={cardStyle}
                                    >
                                        {contenido}
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
                                        {t('home.contact.hours')}
                                    </p>
                                    <p className="text-sm text-[#5b665e]">
                                        {t('home.contact.hoursValue')}
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
                                {t('common.whatsappCta')}
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
                <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 lg:px-12 xl:px-4 py-12 text-center sm:flex-row sm:text-left">
                    <Crest className="h-16 w-auto" />
                    <div className="flex-1">
                        <p className="font-bold text-white">{SCHOOL.name}</p>
                        <p className="text-sm text-white/55">
                            {SCHOOL.address} · {SCHOOL.addressLine2}
                        </p>
                        <p className="mt-1 text-sm text-white/40">
                            {t('home.footer.schoolYear')}
                        </p>
                    </div>
                    <p
                        className="text-sm font-bold italic"
                        style={{ color: 'var(--lc-gold)' }}
                    >
                        {t('common.motto')}
                    </p>
                </div>

                <div className="border-t border-white/10">
                    <nav
                        aria-label={t('home.footer.linksLabel')}
                        className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-6 gap-y-2 px-4 lg:px-12 xl:px-4 py-5 text-sm sm:justify-start"
                    >
                        {nav.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                className="text-white/55 transition hover:text-white"
                            >
                                {item.label}
                            </a>
                        ))}
                        <Link
                            to="/historia"
                            className="text-white/55 transition hover:text-white"
                        >
                            {t('home.footer.history')}
                        </Link>
                        <Link
                            to="/reglamento"
                            className="text-white/55 transition hover:text-white"
                        >
                            {t('home.footer.regulations')}
                        </Link>
                        <Link
                            to={PRE_ENROLLMENT_PATH}
                            className="text-white/55 transition hover:text-white"
                        >
                            {t('common.onlinePreEnrollment')}
                        </Link>
                        <Link
                            to="/privacidad"
                            className="text-white/55 transition hover:text-white"
                        >
                            {t('home.footer.privacy')}
                        </Link>
                        <a
                            href={SIGN_IN_URL}
                            className="text-white/55 transition hover:text-white"
                        >
                            {t('home.footer.portal')}
                        </a>
                    </nav>
                </div>
            </footer>

            <ApplyButton />
        </div>
    )
}

export default LaColmena
