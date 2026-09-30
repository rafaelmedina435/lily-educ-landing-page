import { Link } from 'react-router'
import { PiArrowLeftBold } from 'react-icons/pi'
import { SCHOOL } from './lacolmenaData'
import { BrandMark, Crest, HoneycombLayer } from './brand'

/**
 * Encabezado y pie de las páginas secundarias (reglamento, vida
 * escolar): la marca y un enlace de vuelta a la landing.
 */
export const SubpageHeader = () => (
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
)

export const SubpageFooter = () => (
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
)
