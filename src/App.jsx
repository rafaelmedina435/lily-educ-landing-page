import { useEffect } from 'react'
import {
    BrowserRouter,
    Navigate,
    Route,
    Routes,
    useLocation,
} from 'react-router'
import LaColmena from '@/views/landing/LaColmena'
import Reglamento from '@/views/landing/Reglamento'

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
            {/* Ruta que tenía la landing dentro de la plataforma */}
            <Route path="/la-colmena" element={<Navigate to="/" replace />} />
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    </BrowserRouter>
)

export default App
