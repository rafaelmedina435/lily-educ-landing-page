import { useState } from 'react'
import { Link } from 'react-router'
import classNames from 'classnames'
import dayjs from 'dayjs'
import 'dayjs/locale/es'
import {
    PiArrowRightBold,
    PiCheckBold,
    PiCheckCircleDuotone,
    PiCircleNotchBold,
    PiWarningCircleDuotone,
    PiWhatsappLogoBold,
} from 'react-icons/pi'
import {
    SCHOOL,
    LEVELS,
    REQUIREMENTS,
    ENROLLMENT_GRADES,
    ENROLLMENT_SOURCES,
    ENROLLMENT_STEPS,
} from './lacolmenaData'
import { THEME, Hexagon, HoneycombLayer, Reveal } from './brand'
import { SubpageHeader, SubpageFooter } from './Subpage'
import { ContactValue, useContactAction } from './ContactAction'
import Seo from '@/components/shared/Seo'
import DatePicker from '@/components/ui/DatePicker'
import Select from '@/components/ui/Select'
import { FormItemContextProvider } from '@/components/ui/Form/context'

/**
 * Nombre del formulario en Netlify Forms. Tiene que coincidir con el
 * `<form name>` oculto de `index.html`: Netlify lo detecta al compilar
 * (no ejecuta JavaScript) y solo acepta los campos que declara allí.
 */
const FORM_NAME = 'pre-matricula'

const EMPTY = {
    estudiante_nombre: '',
    estudiante_apellido: '',
    estudiante_nacimiento: null, // Date
    grado: '',
    colegio_procedencia: '',
    acudiente_nombre: '',
    acudiente_apellido: '',
    correo: '',
    telefono: '',
    comentarios: '',
    fuente: '',
    // Trampa para bots: el campo está oculto, una persona lo deja vacío
    'bot-field': '',
}

const LEVEL_NAMES = Object.fromEntries(
    LEVELS.map((level) => [level.id, level.name]),
)

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

/** Grados agrupados por nivel, en el formato de opciones de `Select`. */
const GRADE_OPTIONS = ENROLLMENT_GRADES.map(({ level, grades }) => ({
    label: LEVEL_NAMES[level],
    options: grades.map((grade) => ({ value: grade, label: grade })),
}))

const ALL_GRADES = GRADE_OPTIONS.flatMap((group) => group.options)

const validate = (values) => {
    const errors = {}

    // En el mismo orden que el formulario: el primero recibe el foco
    if (!values.estudiante_nombre.trim()) {
        errors.estudiante_nombre = 'Escribe el nombre del estudiante.'
    }
    if (!values.estudiante_apellido.trim()) {
        errors.estudiante_apellido = 'Escribe el apellido del estudiante.'
    }

    if (!values.estudiante_nacimiento) {
        errors.estudiante_nacimiento = 'Indica la fecha de nacimiento.'
    }

    if (!values.grado) errors.grado = 'Marca el grado al que aplica.'

    if (!values.acudiente_nombre.trim()) {
        errors.acudiente_nombre = 'Escribe tu nombre.'
    }
    if (!values.acudiente_apellido.trim()) {
        errors.acudiente_apellido = 'Escribe tu apellido.'
    }

    if (!values.correo.trim()) {
        errors.correo = 'Escribe tu correo.'
    } else if (!EMAIL_PATTERN.test(values.correo.trim())) {
        errors.correo = 'Revisa el correo: parece incompleto.'
    }

    if (values.telefono.replace(/\D/g, '').length < 7) {
        errors.telefono = 'Escribe un teléfono de al menos 7 dígitos.'
    }

    return errors
}

const encode = (values) =>
    new URLSearchParams({
        'form-name': FORM_NAME,
        ...values,
        estudiante_nacimiento: dayjs(values.estudiante_nacimiento).format(
            'YYYY-MM-DD',
        ),
    }).toString()

const inputClass = (invalid) =>
    classNames(
        'w-full rounded-xl border bg-white px-4 py-3 text-sm text-[#2E3A33] transition outline-none placeholder:text-[#a3aca5] focus:ring-2',
        invalid
            ? 'border-[#c2412d] focus:ring-[#c2412d]/25'
            : 'border-[rgba(46,58,51,.18)] focus:border-[#2E3A33] focus:ring-[#F5C518]/40',
    )

const Field = ({ id, label, optional, error, className, children }) => (
    <div className={className}>
        <label
            htmlFor={id}
            className="mb-1.5 block text-sm font-bold"
            style={{ color: 'var(--lc-green)' }}
        >
            {label}
            {optional && (
                <span className="ml-1.5 font-medium text-[#8a948c]">
                    (opcional)
                </span>
            )}
        </label>
        {children}
        {error && <FieldError id={`${id}-error`}>{error}</FieldError>}
    </div>
)

const FieldError = ({ id, children }) => (
    <p id={id} className="mt-1.5 text-xs font-semibold text-[#c2412d]">
        {children}
    </p>
)

const whatsappHref = (text) =>
    `https://wa.me/${SCHOOL.whatsapp}?text=${encodeURIComponent(text)}`

const Sent = ({ nombre, estudiante }) => (
    <div className="py-6 text-center">
        <Hexagon
            className="mx-auto mb-5 h-16 w-16 text-3xl"
            style={{
                backgroundColor: 'var(--lc-gold)',
                color: 'var(--lc-green-deep)',
            }}
        >
            <PiCheckBold />
        </Hexagon>
        <h2 className="text-2xl font-bold" style={{ color: 'var(--lc-green)' }}>
            ¡Gracias, {nombre}!
        </h2>
        <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-[#5b665e]">
            Recibimos la solicitud de pre-matrícula de {estudiante}. Secretaría
            te contactará en los próximos días hábiles para confirmar el cupo y
            los pasos siguientes.
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
            <a
                href={whatsappHref(
                    `Hola, soy ${nombre} y acabo de enviar la pre-matrícula en línea de ${estudiante}.`,
                )}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold text-white transition hover:brightness-110"
                style={{ backgroundColor: 'var(--lc-green)' }}
            >
                <PiWhatsappLogoBold className="text-base" />
                Escribir por WhatsApp
            </a>
            <Link
                to="/"
                className="inline-flex items-center gap-2 rounded-full border-2 px-6 py-3 text-sm font-bold transition hover:bg-[rgba(46,58,51,.04)]"
                style={{
                    borderColor: 'rgba(46,58,51,.2)',
                    color: 'var(--lc-green)',
                }}
            >
                Volver al sitio
            </Link>
        </div>
    </div>
)

const PreEnrollmentForm = () => {
    const [values, setValues] = useState(EMPTY)
    const [errors, setErrors] = useState({})
    const [status, setStatus] = useState('idle') // idle | sending | sent | failed

    const set = (field) => (eventOrValue) => {
        const value = eventOrValue?.target
            ? eventOrValue.target.value
            : eventOrValue

        setValues((current) => ({ ...current, [field]: value }))

        // El error se borra en cuanto se corrige el campo
        if (errors[field]) {
            setErrors(({ [field]: _, ...rest }) => rest)
        }
    }

    const onSubmit = async (event) => {
        event.preventDefault()

        const found = validate(values)
        setErrors(found)

        const first = Object.keys(found)[0]
        if (first) {
            document
                .getElementById(`${first}-error`)
                ?.scrollIntoView({ behavior: 'smooth', block: 'center' })
            document.getElementById(first)?.focus({ preventScroll: true })
            return
        }

        setStatus('sending')

        try {
            const response = await fetch('/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: encode(values),
            })

            if (!response.ok) throw new Error(response.statusText)

            setStatus('sent')
        } catch {
            setStatus('failed')
        }
    }

    if (status === 'sent') {
        return (
            <Sent
                nombre={values.acudiente_nombre.trim()}
                estudiante={`${values.estudiante_nombre.trim()} ${values.estudiante_apellido.trim()}`}
            />
        )
    }

    const describedBy = (field) =>
        errors[field] ? `${field}-error` : undefined

    return (
        <form
            name={FORM_NAME}
            onSubmit={onSubmit}
            noValidate
            className="space-y-5"
        >
            <p className="hidden">
                <label>
                    No llenes este campo:
                    <input
                        name="bot-field"
                        value={values['bot-field']}
                        onChange={set('bot-field')}
                        tabIndex={-1}
                        autoComplete="off"
                    />
                </label>
            </p>

            <div>
                <h2
                    className="text-xl font-bold"
                    style={{ color: 'var(--lc-green)' }}
                >
                    Datos del estudiante
                </h2>
                <p className="mt-1 text-xs text-[#7d877f]">
                    Todos los campos son obligatorios salvo los marcados como
                    opcionales.
                </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
                <Field
                    id="estudiante_nombre"
                    label="Nombre"
                    error={errors.estudiante_nombre}
                >
                    <input
                        id="estudiante_nombre"
                        name="estudiante_nombre"
                        autoComplete="off"
                        maxLength={40}
                        value={values.estudiante_nombre}
                        onChange={set('estudiante_nombre')}
                        aria-invalid={!!errors.estudiante_nombre}
                        aria-describedby={describedBy('estudiante_nombre')}
                        className={inputClass(errors.estudiante_nombre)}
                    />
                </Field>
                <Field
                    id="estudiante_apellido"
                    label="Apellido"
                    error={errors.estudiante_apellido}
                >
                    <input
                        id="estudiante_apellido"
                        name="estudiante_apellido"
                        autoComplete="off"
                        maxLength={80}
                        value={values.estudiante_apellido}
                        onChange={set('estudiante_apellido')}
                        aria-invalid={!!errors.estudiante_apellido}
                        aria-describedby={describedBy('estudiante_apellido')}
                        className={inputClass(errors.estudiante_apellido)}
                    />
                </Field>
                <Field
                    id="estudiante_nacimiento"
                    label="Fecha de nacimiento"
                    error={errors.estudiante_nacimiento}
                >
                    <FormItemContextProvider
                        value={{ invalid: !!errors.estudiante_nacimiento }}
                    >
                        <DatePicker
                            id="estudiante_nacimiento"
                            name="estudiante_nacimiento"
                            locale="es"
                            inputFormat="DD/MM/YYYY"
                            placeholder="dd/mm/aaaa"
                            // Para una fecha de nacimiento: primero el año
                            defaultView="year"
                            maxDate={new Date()}
                            clearable={false}
                            value={values.estudiante_nacimiento}
                            onChange={set('estudiante_nacimiento')}
                        />
                    </FormItemContextProvider>
                </Field>
                <Field
                    id="grado"
                    label="Grado al que aplica"
                    error={errors.grado}
                >
                    <Select
                        inputId="grado"
                        name="grado"
                        placeholder="Selecciona el grado"
                        noOptionsMessage={() => 'Sin resultados'}
                        options={GRADE_OPTIONS}
                        value={
                            ALL_GRADES.find(
                                (option) => option.value === values.grado,
                            ) ?? null
                        }
                        onChange={(option) => set('grado')(option.value)}
                        invalid={!!errors.grado}
                        aria-invalid={!!errors.grado}
                        aria-describedby={describedBy('grado')}
                    />
                </Field>
                <Field
                    id="colegio_procedencia"
                    label="Colegio de procedencia"
                    optional
                    className="sm:col-span-2"
                >
                    <input
                        id="colegio_procedencia"
                        name="colegio_procedencia"
                        autoComplete="off"
                        maxLength={120}
                        value={values.colegio_procedencia}
                        onChange={set('colegio_procedencia')}
                        className={inputClass(false)}
                    />
                </Field>
            </div>

            <p className="-mt-2 text-xs text-[#7d877f]">
                Si inscribes a más de un hijo, cuéntanos de los demás en
                comentarios.
            </p>

            <h2
                className="pt-3 text-xl font-bold"
                style={{ color: 'var(--lc-green)' }}
            >
                Datos del acudiente
            </h2>

            <div className="grid gap-5 sm:grid-cols-2">
                <Field
                    id="acudiente_nombre"
                    label="Nombre del acudiente"
                    error={errors.acudiente_nombre}
                >
                    <input
                        id="acudiente_nombre"
                        name="acudiente_nombre"
                        autoComplete="given-name"
                        maxLength={40}
                        value={values.acudiente_nombre}
                        onChange={set('acudiente_nombre')}
                        aria-invalid={!!errors.acudiente_nombre}
                        aria-describedby={describedBy('acudiente_nombre')}
                        className={inputClass(errors.acudiente_nombre)}
                    />
                </Field>
                <Field
                    id="acudiente_apellido"
                    label="Apellido del acudiente"
                    error={errors.acudiente_apellido}
                >
                    <input
                        id="acudiente_apellido"
                        name="acudiente_apellido"
                        autoComplete="family-name"
                        maxLength={80}
                        value={values.acudiente_apellido}
                        onChange={set('acudiente_apellido')}
                        aria-invalid={!!errors.acudiente_apellido}
                        aria-describedby={describedBy('acudiente_apellido')}
                        className={inputClass(errors.acudiente_apellido)}
                    />
                </Field>
                <Field
                    id="correo"
                    label="Correo electrónico"
                    error={errors.correo}
                >
                    <input
                        id="correo"
                        name="correo"
                        type="email"
                        inputMode="email"
                        autoComplete="email"
                        maxLength={80}
                        placeholder="nombre@correo.com"
                        value={values.correo}
                        onChange={set('correo')}
                        aria-invalid={!!errors.correo}
                        aria-describedby={describedBy('correo')}
                        className={inputClass(errors.correo)}
                    />
                </Field>
                <Field
                    id="telefono"
                    label="Teléfono o WhatsApp"
                    error={errors.telefono}
                >
                    <input
                        id="telefono"
                        name="telefono"
                        type="tel"
                        inputMode="tel"
                        autoComplete="tel"
                        maxLength={40}
                        placeholder="6000-0000"
                        value={values.telefono}
                        onChange={set('telefono')}
                        aria-invalid={!!errors.telefono}
                        aria-describedby={describedBy('telefono')}
                        className={inputClass(errors.telefono)}
                    />
                </Field>
            </div>

            <Field id="fuente" label="¿Cómo nos conociste?" optional>
                <select
                    id="fuente"
                    name="fuente"
                    value={values.fuente}
                    onChange={set('fuente')}
                    className={classNames(
                        inputClass(false),
                        !values.fuente && 'text-[#a3aca5]',
                    )}
                >
                    <option value="">Selecciona una opción</option>
                    {ENROLLMENT_SOURCES.map((source) => (
                        <option
                            key={source}
                            value={source}
                            className="text-[#2E3A33]"
                        >
                            {source}
                        </option>
                    ))}
                </select>
            </Field>

            <Field id="comentarios" label="Comentarios o preguntas" optional>
                <textarea
                    id="comentarios"
                    name="comentarios"
                    rows={4}
                    maxLength={1000}
                    placeholder="Por ejemplo: otros hijos que quieras inscribir, necesidades particulares o cualquier duda."
                    value={values.comentarios}
                    onChange={set('comentarios')}
                    className={classNames(inputClass(false), 'resize-y')}
                />
            </Field>

            {status === 'failed' && (
                <div
                    role="alert"
                    className="flex gap-3 rounded-xl border px-4 py-3 text-sm leading-relaxed"
                    style={{
                        borderColor: 'rgba(194,65,45,.3)',
                        backgroundColor: 'rgba(194,65,45,.06)',
                        color: '#8f2f20',
                    }}
                >
                    <PiWarningCircleDuotone className="mt-0.5 shrink-0 text-lg" />
                    <span>
                        No pudimos enviar el formulario. Inténtalo de nuevo o
                        escríbenos por{' '}
                        <a
                            href={whatsappHref(
                                'Hola, quisiera información sobre la pre-matrícula.',
                            )}
                            target="_blank"
                            rel="noreferrer"
                            className="font-bold underline"
                        >
                            WhatsApp
                        </a>
                        .
                    </span>
                </div>
            )}

            <button
                type="submit"
                disabled={status === 'sending'}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full px-7 py-3.5 text-base font-bold transition hover:brightness-95 disabled:cursor-wait disabled:opacity-70"
                style={{
                    backgroundColor: 'var(--lc-gold)',
                    color: 'var(--lc-green-deep)',
                }}
            >
                {status === 'sending' ? (
                    <>
                        <PiCircleNotchBold className="animate-spin" />
                        Enviando…
                    </>
                ) : (
                    <>
                        Enviar pre-matrícula
                        <PiArrowRightBold />
                    </>
                )}
            </button>

            <p className="text-center text-xs leading-relaxed text-[#8a948c]">
                La pre-matrícula no reserva el cupo: la matrícula se formaliza
                en secretaría con los documentos y el contrato firmado.
            </p>
        </form>
    )
}

/**
 * Formulario público de pre-matrícula, en vista aparte para no cargar la
 * landing. Sigue el modelo de oxford.edu.pa: pocos datos de contacto, el
 * grado de interés y cómo nos conocieron; lo demás se resuelve cuando
 * secretaría contacta a la familia.
 */
const PreMatricula = () => {
    const { copiado, activar } = useContactAction()

    return (
        <div
            style={{ ...THEME, backgroundColor: 'var(--lc-cream)' }}
            className="min-h-screen font-sans"
        >
            <Seo
                title={`Pre-matrícula ${SCHOOL.enrollmentYear} — ${SCHOOL.name}`}
                description={`Formulario de pre-matrícula del ${SCHOOL.name} en ${SCHOOL.city}, ${SCHOOL.province}. Pre-escolar, primaria, pre-media y bachiller en ciencias.`}
                canonical="/pre-matricula"
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
                            Pre-matrícula {SCHOOL.enrollmentYear}
                        </p>
                        <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
                            Únete a La Colmena
                        </h1>
                        <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/75">
                            Déjanos tus datos y el grado que te interesa.
                            Secretaría te contacta para confirmar el cupo,
                            agendar una visita y explicarte los pasos de la
                            matrícula.
                        </p>
                    </div>
                </section>

                <section className="relative overflow-hidden">
                    <HoneycombLayer />
                    <div className="relative mx-auto grid max-w-5xl gap-8 px-4 py-14 lg:grid-cols-[1fr_1.35fr] lg:gap-10 lg:py-16">
                        {/* Proceso y requisitos */}
                        <div className="space-y-8">
                            <Reveal>
                                <h2
                                    className="mb-5 text-lg font-bold"
                                    style={{ color: 'var(--lc-green)' }}
                                >
                                    Nuestro proceso de admisión
                                </h2>
                                <ol className="space-y-5">
                                    {ENROLLMENT_STEPS.map((step, index) => (
                                        <li
                                            key={step.title}
                                            className="flex gap-4"
                                        >
                                            <Hexagon
                                                className="h-10 w-10 shrink-0 text-sm font-bold"
                                                style={{
                                                    backgroundColor:
                                                        index === 0
                                                            ? 'var(--lc-gold)'
                                                            : 'rgba(245,197,24,.22)',
                                                    color: 'var(--lc-green-deep)',
                                                }}
                                            >
                                                {index + 1}
                                            </Hexagon>
                                            <div>
                                                <p
                                                    className="font-bold"
                                                    style={{
                                                        color: 'var(--lc-green)',
                                                    }}
                                                >
                                                    {step.title}
                                                </p>
                                                <p className="mt-0.5 text-sm leading-relaxed text-[#5b665e]">
                                                    {step.description}
                                                </p>
                                            </div>
                                        </li>
                                    ))}
                                </ol>
                            </Reveal>

                            <Reveal
                                delay={80}
                                className="rounded-2xl border p-6"
                                style={{
                                    borderColor: 'rgba(46,58,51,.12)',
                                    backgroundColor: 'rgba(245,197,24,.12)',
                                }}
                            >
                                <h2
                                    className="mb-4 text-base font-bold"
                                    style={{ color: 'var(--lc-green)' }}
                                >
                                    Documentos para la matrícula
                                </h2>
                                <ul className="space-y-2.5">
                                    {REQUIREMENTS.map((item) => (
                                        <li
                                            key={item}
                                            className="flex gap-2.5 text-sm leading-relaxed text-[#4c574f]"
                                        >
                                            <PiCheckCircleDuotone
                                                className="mt-0.5 shrink-0 text-lg"
                                                style={{
                                                    color: 'var(--lc-green)',
                                                }}
                                            />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <p className="mt-4 text-xs leading-relaxed text-[#5b665e]">
                                    No hace falta enviarlos ahora: se entregan
                                    en secretaría.
                                </p>
                            </Reveal>

                            <div className="text-sm text-[#4c574f]">
                                <p
                                    className="mb-1 font-bold"
                                    style={{ color: 'var(--lc-green)' }}
                                >
                                    ¿Prefieres hablar con nosotros?
                                </p>
                                <div className="-mx-2 flex flex-wrap items-center">
                                    <ContactValue
                                        value={SCHOOL.phones[0]}
                                        href={`tel:+507${SCHOOL.phones[0].replace(/\D/g, '')}`}
                                        itemKey="telefono"
                                        copiado={copiado}
                                        onActivate={activar}
                                    />
                                    <ContactValue
                                        value={SCHOOL.email}
                                        href={`mailto:${SCHOOL.email}`}
                                        itemKey="correo"
                                        copiado={copiado}
                                        onActivate={activar}
                                        copyButton
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Formulario: en móvil va primero */}
                        <Reveal
                            delay={120}
                            className="order-first h-fit rounded-2xl border bg-white p-6 shadow-sm sm:p-8 lg:order-last"
                            style={{ borderColor: 'rgba(46,58,51,.1)' }}
                        >
                            <PreEnrollmentForm />
                        </Reveal>
                    </div>
                </section>
            </main>

            <SubpageFooter />
        </div>
    )
}

export default PreMatricula
