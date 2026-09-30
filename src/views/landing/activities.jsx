import {
    PiMusicNotesDuotone,
    PiTranslateDuotone,
    PiStorefrontDuotone,
    PiSoccerBallDuotone,
    PiSparkleDuotone,
} from 'react-icons/pi'
import { HoneycombLayer, PHOTOS } from './brand'

const ACTIVITY_ICONS = {
    music: PiMusicNotesDuotone,
    language: PiTranslateDuotone,
    store: PiStorefrontDuotone,
    sport: PiSoccerBallDuotone,
}

export const activityIcon = (activity) =>
    ACTIVITY_ICONS[activity.icon] || PiSparkleDuotone

/** Enlace a la sección de la actividad en la página de vida escolar. */
export const activityHref = (activity) => `/vida-escolar#${activity.id}`

/**
 * Fondo de una actividad: su foto si la tiene; si no, el verde de la
 * marca con el panal y el icono grande, para que la tarjeta no quede
 * vacía mientras llegan fotos originales.
 *
 * Ocupa todo su contenedor, que debe ser `relative overflow-hidden`.
 */
export const ActivityMedia = ({ activity, className = '' }) => {
    const Icon = activityIcon(activity)

    if (activity.photo && PHOTOS[activity.photo]) {
        return (
            <img
                src={PHOTOS[activity.photo]}
                alt={activity.photoAlt || activity.title}
                className={`absolute inset-0 h-full w-full object-cover ${className}`}
                style={{ objectPosition: activity.photoPosition }}
                loading="lazy"
            />
        )
    }

    return (
        <div
            className={`absolute inset-0 ${className}`}
            style={{
                background:
                    'radial-gradient(circle at 75% 25%, var(--lc-green-soft), var(--lc-green-deep))',
            }}
            aria-hidden="true"
        >
            <HoneycombLayer tone="light" opacity={0.08} />
            <Icon
                className="absolute -right-6 -top-6 text-[11rem] opacity-20"
                style={{ color: 'var(--lc-gold)' }}
            />
        </div>
    )
}
