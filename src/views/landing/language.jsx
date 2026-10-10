import {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useState,
} from 'react'
import classNames from 'classnames'
import * as ES from './lacolmenaData'
import * as EN from './lacolmenaData.en'

/**
 * Idioma del sitio: español o inglés. Se decide en este orden:
 *
 * 1. `?lang=en` o `?lang=es` en la URL (sirve para mandarle el enlace a
 *    una familia que no habla español).
 * 2. Lo que la persona eligió antes con el botón ES/EN.
 * 3. El idioma del dispositivo, si es español o inglés.
 * 4. Español.
 *
 * Solo se guarda lo que la persona elige (el botón o un enlace con
 * `?lang=`): el idioma detectado no, para que si cambia el de su teléfono
 * el sitio lo siga.
 *
 * El catálogo de cada idioma es un solo archivo: `lacolmenaData.js`
 * (español) y `lacolmenaData.en.js` (inglés), con las mismas
 * exportaciones. Cada componente toma de `useLanguage()`:
 * - `content`: los datos del colegio en el idioma activo.
 * - `t('clave', ...args)`: los textos de la interfaz (el `UI` del
 *   catálogo). Si la entrada es una función, recibe `args`.
 */

const LANGUAGES = ['es', 'en']
const CONTENT = { es: ES, en: EN }
const HTML_LANG = { es: 'es-PA', en: 'en' }
const STORAGE_KEY = 'lc-lang'

const supported = (code) => (LANGUAGES.includes(code) ? code : null)

const urlLanguage = () =>
    supported(new URLSearchParams(window.location.search).get('lang'))

const storedLanguage = () => {
    try {
        return supported(window.localStorage.getItem(STORAGE_KEY))
    } catch {
        // Sin almacenamiento (p. ej. navegación privada)
        return null
    }
}

const storeLanguage = (lang) => {
    try {
        window.localStorage.setItem(STORAGE_KEY, lang)
    } catch {
        // Sin almacenamiento: la elección dura lo que dure la pestaña
    }
}

/**
 * Los buscadores ven siempre la versión en español: Google renderiza las
 * páginas con un navegador en inglés (en-US) y, si se le aplicara la
 * detección, indexaría el sitio en inglés.
 */
const CRAWLER = /bot|crawl|spider|slurp|lighthouse|facebookexternalhit/i

/** El primer idioma preferido del dispositivo que el sitio tiene. */
const deviceLanguage = () => {
    if (CRAWLER.test(navigator.userAgent)) return null

    const preferred = navigator.languages?.length
        ? navigator.languages
        : [navigator.language]

    for (const tag of preferred) {
        // «es-PA», «es-419» → «es»; «en-US», «en-GB» → «en»
        const code = supported(tag?.slice(0, 2).toLowerCase())
        if (code) return code
    }

    return null
}

const initialLanguage = () =>
    urlLanguage() ?? storedLanguage() ?? deviceLanguage() ?? 'es'

const lookup = (catalog, key) =>
    key.split('.').reduce((node, part) => node?.[part], catalog)

/**
 * Si falta una traducción se muestra el texto en español, para no dejar
 * un hueco en la página, y en desarrollo se avisa en la consola.
 */
const translator =
    (lang) =>
    (key, ...args) => {
        let entry = lookup(CONTENT[lang].UI, key)

        if (entry === undefined) {
            if (import.meta.env.DEV) {
                console.warn(`Falta la traducción «${key}» (${lang})`)
            }
            entry = lookup(ES.UI, key)
        }

        return typeof entry === 'function' ? entry(...args) : entry
    }

const LanguageContext = createContext(null)

export const LanguageProvider = ({ children }) => {
    const [lang, setLang] = useState(initialLanguage)

    // Quien llega con `?lang=` lo eligió: se recuerda como el botón
    useEffect(() => {
        const fromUrl = urlLanguage()
        if (fromUrl) storeLanguage(fromUrl)
    }, [])

    useEffect(() => {
        document.documentElement.lang = HTML_LANG[lang]
    }, [lang])

    /** Elección con el botón ES/EN: se guarda para las próximas visitas. */
    const chooseLanguage = useCallback((code) => {
        storeLanguage(code)
        setLang(code)
    }, [])

    const value = useMemo(
        () => ({
            lang,
            setLang: chooseLanguage,
            content: CONTENT[lang],
            t: translator(lang),
        }),
        [lang, chooseLanguage],
    )

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    )
}

export const useLanguage = () => useContext(LanguageContext)

const OPTIONS = [
    { code: 'es', short: 'ES', name: 'Español' },
    { code: 'en', short: 'EN', name: 'English' },
]

/** Selector ES/EN para los encabezados verdes. */
export const LanguageSwitch = ({ className = '' }) => {
    const { lang, setLang, t } = useLanguage()

    return (
        <div
            role="group"
            aria-label={t('language.label')}
            className={`flex shrink-0 rounded-full p-0.5 ${className}`}
            style={{ backgroundColor: 'rgba(255,255,255,.1)' }}
        >
            {OPTIONS.map((option) => (
                <button
                    key={option.code}
                    type="button"
                    lang={option.code}
                    title={option.name}
                    aria-label={option.name}
                    aria-pressed={lang === option.code}
                    onClick={() => setLang(option.code)}
                    className={classNames(
                        'rounded-full px-2.5 py-1 text-xs font-bold tracking-wide transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white',
                        lang === option.code
                            ? 'bg-[var(--lc-gold)] text-[var(--lc-green-deep)]'
                            : 'text-white/70 hover:text-white',
                    )}
                >
                    {option.short}
                </button>
            ))}
        </div>
    )
}
