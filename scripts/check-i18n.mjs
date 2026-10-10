/**
 * Revisa que los catálogos ES y EN estén completos y alineados:
 *
 * - Las mismas exportaciones y, dentro de cada una, las mismas claves,
 *   tipos, largos de lista y número de parámetros de las funciones.
 * - Los campos que no se traducen (`id`, `icon`, fotos, años, cifras…)
 *   tienen el mismo valor en los dos idiomas.
 * - Ningún texto quedó vacío.
 * - El texto en inglés no lleva tildes, eñes ni ¿¡ (tampoco en nombres
 *   propios: «Cocle», «Saenz»). Solo se libra lo que no se ve en pantalla:
 *   los valores que el formulario envía en español y la búsqueda de Maps.
 * - Cada `t('clave')` del código existe en los dos catálogos.
 *
 * Además lista, como aviso, los textos en inglés que siguen iguales al
 * español, para revisarlos a ojo.
 *
 * Uso: npm run check:i18n (sale con error si algo falta).
 */

import { readdirSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import { createServer } from 'vite'

const LANDING = 'src/views/landing'

/** Claves cuyo valor debe ser idéntico en los dos idiomas. */
const SAME_VALUE = new Set([
    'id',
    'icon',
    'photo',
    'photoPosition',
    'year',
    'value',
    'version',
    'email',
    'level',
    'grades',
    'mapsQuery',
])

/**
 * Se envían en español aunque el formulario esté en inglés: el inglés
 * solo cambia la etiqueta (`ENROLLMENT_SOURCE_LABELS`).
 */
const SENT_IN_SPANISH = new Set(['ENROLLMENT_SOURCES'])

/** Del colegio solo se traducen el lema y la segunda línea de la dirección. */
const SCHOOL_TRANSLATED = new Set([
    'motto',
    'province',
    'address',
    'addressLine2',
])

/** Lo que solo existe en inglés. */
const EN_ONLY = new Set([
    'ENROLLMENT_GRADE_LABELS',
    'ENROLLMENT_SOURCE_LABELS',
    'PRIVACY.translationNote',
])

/** Textos que en inglés se quedan igual a propósito. */
const SAME_TEXT_OK = new Set([
    'Colegio Bilingüe La Colmena',
    'Portal',
    'Instagram',
    'Facebook',
    'WhatsApp',
    'Yappy',
    'Folklore',
    'Grammar',
    'Science',
    'Social Science',
    'Oral Language',
    'Reading & Writing',
    'Listening & Speaking',
    'Listening and Speaking',
    'Reading and Writing',
    'Culture',
])

/** Tildes, eñes y signos de apertura: no van en el texto en inglés. */
const SPANISH_MARKS = /[áéíóúñ¿¡]/i

const errors = []
const warnings = []

const kind = (value) =>
    Array.isArray(value) ? 'array' : value === null ? 'null' : typeof value

const compare = (es, en, path) => {
    const last = path
        .split('.')
        .at(-1)
        .replace(/\[\d+\]$/, '')

    if (kind(es) !== kind(en)) {
        errors.push(`${path}: es ${kind(es)} en ES y ${kind(en)} en EN`)
        return
    }

    if (SENT_IN_SPANISH.has(path.replace(/\[\d+\]$/, ''))) {
        if (es !== en) errors.push(`${path}: debe seguir en español en EN`)
        return
    }

    // En UI, `email` es una etiqueta («Correo» / «Email») y sí se traduce
    const fixed =
        SAME_VALUE.has(last) && (!path.startsWith('UI.') || last === 'value')

    if (fixed || path.startsWith('SCHOOL.')) {
        const translatable = SCHOOL_TRANSLATED.has(last)
        if (!translatable && JSON.stringify(es) !== JSON.stringify(en)) {
            errors.push(`${path}: debe ser igual en los dos idiomas`)
        }
        if (!translatable) return
    }

    switch (kind(es)) {
        case 'array':
            if (es.length !== en.length) {
                errors.push(
                    `${path}: ${es.length} elementos en ES y ${en.length} en EN`,
                )
            }
            es.forEach((item, i) => compare(item, en[i], `${path}[${i}]`))
            return
        case 'object': {
            const keys = new Set([...Object.keys(es), ...Object.keys(en)])
            for (const key of keys) {
                const child = `${path}.${key}`
                if (!(key in en)) errors.push(`${child}: falta en EN`)
                else if (!(key in es)) {
                    if (!EN_ONLY.has(child))
                        errors.push(`${child}: sobra en EN`)
                } else compare(es[key], en[key], child)
            }
            return
        }
        case 'function': {
            if (es.length !== en.length) {
                errors.push(
                    `${path}: recibe ${es.length} parámetros en ES y ${en.length} en EN`,
                )
            }
            const args = Array.from({ length: es.length }, (_, i) => `«${i}»`)
            compare(es(...args), en(...args), `${path}()`)
            return
        }
        case 'string':
            if (!en.trim()) errors.push(`${path}: texto vacío en EN`)
            if (!es.trim()) errors.push(`${path}: texto vacío en ES`)
            if (en === es && !SAME_TEXT_OK.has(en)) {
                warnings.push(`${path}: igual en los dos idiomas → «${en}»`)
            }
            if (SPANISH_MARKS.test(en)) {
                errors.push(`${path}: tilde o eñe en EN → «${en}»`)
            }
    }
}

/** Todas las llamadas `t('clave'…)` con clave literal del código. */
const usedKeys = () => {
    const keys = new Map()
    for (const file of readdirSync(LANDING)) {
        if (!file.endsWith('.jsx')) continue
        const source = readFileSync(join(LANDING, file), 'utf8')
        // Las claves siempre llevan punto (`home.hero.badge`)
        for (const [, key] of source.matchAll(/\bt\(\s*'(\w+\.[\w.]+)'/g)) {
            keys.set(key, file)
        }
    }
    return keys
}

const lookup = (catalog, key) =>
    key.split('.').reduce((node, part) => node?.[part], catalog)

const server = await createServer({
    appType: 'custom',
    logLevel: 'error',
    server: { middlewareMode: true, hmr: false },
})

try {
    const ES = await server.ssrLoadModule(`/${LANDING}/lacolmenaData.js`)
    const EN = await server.ssrLoadModule(`/${LANDING}/lacolmenaData.en.js`)

    for (const name of new Set([...Object.keys(ES), ...Object.keys(EN)])) {
        if (!(name in EN)) errors.push(`${name}: falta la exportación en EN`)
        else if (!(name in ES)) {
            if (!EN_ONLY.has(name)) errors.push(`${name}: sobra en EN`)
        } else compare(ES[name], EN[name], name)
    }

    // Las etiquetas en inglés de grados y fuentes deben cubrir valores reales
    const grades = ES.ENROLLMENT_GRADES.flatMap((group) => group.grades)
    for (const grade of grades) {
        if (!EN.ENROLLMENT_GRADE_LABELS[grade]) {
            errors.push(`ENROLLMENT_GRADE_LABELS: falta «${grade}»`)
        }
    }
    for (const label of Object.keys(EN.ENROLLMENT_GRADE_LABELS)) {
        if (!grades.includes(label)) {
            errors.push(`ENROLLMENT_GRADE_LABELS: «${label}» no es un grado`)
        }
    }
    for (const label of Object.keys(EN.ENROLLMENT_SOURCE_LABELS)) {
        if (!ES.ENROLLMENT_SOURCES.includes(label)) {
            errors.push(`ENROLLMENT_SOURCE_LABELS: «${label}» no es una opción`)
        }
    }
    for (const source of ES.ENROLLMENT_SOURCES) {
        if (
            SPANISH_MARKS.test(source) &&
            !EN.ENROLLMENT_SOURCE_LABELS[source]
        ) {
            errors.push(`ENROLLMENT_SOURCES: «${source}» sin etiqueta en EN`)
        }
    }
    // Lo que solo existe en inglés también se ve en pantalla
    const enOnlyTexts = [
        ...Object.values(EN.ENROLLMENT_GRADE_LABELS),
        ...Object.values(EN.ENROLLMENT_SOURCE_LABELS),
        EN.PRIVACY.translationNote,
    ]
    for (const text of enOnlyTexts) {
        if (SPANISH_MARKS.test(text)) {
            errors.push(`tilde o eñe en EN → «${text}»`)
        }
    }

    const keys = usedKeys()
    for (const [key, file] of keys) {
        if (lookup(ES.UI, key) === undefined) {
            errors.push(`t('${key}') en ${file}: no existe en UI (ES)`)
        }
        if (lookup(EN.UI, key) === undefined) {
            errors.push(`t('${key}') en ${file}: no existe en UI (EN)`)
        }
    }

    console.log(`Claves t() usadas en el código: ${keys.size}`)
} finally {
    await server.close()
}

for (const warning of warnings) console.warn(`aviso  ${warning}`)
for (const error of errors) console.error(`error  ${error}`)

console.log(
    errors.length
        ? `\n${errors.length} errores, ${warnings.length} avisos`
        : `\nCatálogos ES/EN completos (${warnings.length} avisos para revisar)`,
)

process.exit(errors.length ? 1 : 0)
