import { Link } from 'react-router'
import { PiArrowLeftBold } from 'react-icons/pi'
import { BrandMark, Crest, HoneycombLayer } from './brand'
import { LanguageSwitch, useLanguage } from './language'

/**
 * Encabezado y pie de las páginas secundarias (reglamento, vida
 * escolar, historia, privacidad): la marca y un enlace de vuelta a la
 * landing. El pie lleva el aviso de privacidad, que debe quedar a mano
 * desde cualquier página.
 */
export const SubpageHeader = () => {
    const { t } = useLanguage()

    return (
        <header
            className="sticky top-0 z-50 border-b backdrop-blur"
            style={{
                backgroundColor: 'rgba(46,58,51,.94)',
                borderColor: 'rgba(245,197,24,.25)',
            }}
        >
            <div className="mx-auto flex max-w-5xl items-center gap-3 px-4 sm:gap-4 py-3">
                <Link to="/">
                    <BrandMark />
                </Link>
                {/* En el teléfono solo la flecha, para que quepa el idioma */}
                <Link
                    to="/"
                    className="ml-auto inline-flex items-center gap-2 p-1 text-sm font-medium text-white/70 transition hover:text-white"
                >
                    <PiArrowLeftBold />
                    <span className="sr-only sm:not-sr-only">
                        {t('common.backToSite')}
                    </span>
                </Link>
                <LanguageSwitch />
            </div>
        </header>
    )
}

export const SubpageFooter = () => {
    const { t, content } = useLanguage()
    const { SCHOOL } = content

    return (
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
                    <Link
                        to="/privacidad"
                        className="mt-1 inline-block text-sm text-white/40 underline-offset-2 transition hover:text-white hover:underline"
                    >
                        {t('common.privacyNotice')}
                    </Link>
                </div>
                <p
                    className="text-sm font-bold italic"
                    style={{ color: 'var(--lc-gold)' }}
                >
                    {t('common.motto')}
                </p>
            </div>
        </footer>
    )
}
