import { lazy, Suspense, useEffect } from 'react'
import {
    BrowserRouter,
    Navigate,
    Route,
    Routes,
    useLocation,
} from 'react-router'
import LaColmena from '@/views/landing/LaColmena'
import Reglamento from '@/views/landing/Reglamento'
import VidaEscolar from '@/views/landing/VidaEscolar'

// Aparte porque trae el DatePicker y el Select del template (react-select,
// floating-ui, dayjs), que el resto del sitio no usa
const PreMatricula = lazy(() => import('@/views/landing/PreMatricula'))

/**
 * Al refrescar se arranca arriba aunque la URL traiga un `#hash` de un
 * enlace interno (p. ej. «/#contacto»): se quita antes de que lo lea el
 * router, y se le pide al navegador que no restaure el scroll anterior.
 */
const isReload =
    performance.getEntriesByType('navigation')[0]?.type === 'reload'

if (isReload && window.location.hash) {
    window.history.scrollRestoration = 'manual'
    window.history.replaceState(
        window.history.state,
        '',
        window.location.pathname + window.location.search,
    )
}

/**
 * Al cambiar de página se arranca arriba, o en la sección del `#hash`
 * si el enlace apunta a una (p. ej. «/#admision» desde el reglamento).
 */
const ScrollOnNavigate = () => {
    const { pathname, hash } = useLocation()

    useEffect(() => {
        if (hash) {
            document.getElementById(hash.slice(1))?.scrollIntoView()
            return
        }

        window.scrollTo(0, 0)
    }, [pathname, hash])

    return null
}

const App = () => (
    <BrowserRouter>
        <ScrollOnNavigate />
        <Routes>
            <Route path="/" element={<LaColmena />} />
            <Route path="/reglamento" element={<Reglamento />} />
            <Route path="/vida-escolar" element={<VidaEscolar />} />
            <Route
                path="/pre-matricula"
                element={
                    <Suspense fallback={null}>
                        <PreMatricula />
                    </Suspense>
                }
            />
            {/* Ruta que tenía la landing dentro de la plataforma */}
            <Route path="/la-colmena" element={<Navigate to="/" replace />} />
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    </BrowserRouter>
)

export default App
