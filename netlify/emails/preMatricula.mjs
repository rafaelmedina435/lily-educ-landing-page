/**
 * Correo que recibe secretaría por cada pre-matrícula.
 *
 * Los clientes de correo (Gmail, Outlook) ignoran casi todo el CSS moderno:
 * por eso va maquetado con tablas y estilos en línea, sin clases ni flexbox.
 * Todo lo que escribe la familia pasa por `escape` antes de entrar al HTML.
 */

const SCHOOL = {
    name: 'Colegio Bilingüe La Colmena',
    motto: 'El Néctar de la Sabiduría',
    domain: 'lacolmena.edu.pa',
}

const COLORS = {
    green: '#2E3A33',
    greenDeep: '#1F2823',
    gold: '#F5C518',
    cream: '#FBF7EC',
    text: '#2E3A33',
    muted: '#7D877F',
    line: '#ECE6D6',
}

const FONT =
    "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif"

const escape = (value = '') =>
    String(value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;')

const clean = (value) => (typeof value === 'string' ? value.trim() : '')

/** «2018-09-14» → «14 de septiembre de 2018 (8 años)». */
const formatBirthDate = (iso, now) => {
    const [year, month, day] = iso.split('-').map(Number)
    if (!year || !month || !day) return iso

    const date = new Date(Date.UTC(year, month - 1, day))
    const label = new Intl.DateTimeFormat('es-PA', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        timeZone: 'UTC',
    }).format(date)

    let age = now.getFullYear() - year
    const beforeBirthday =
        now.getMonth() + 1 < month ||
        (now.getMonth() + 1 === month && now.getDate() < day)
    if (beforeBirthday) age -= 1

    return `${label} (${age} ${age === 1 ? 'año' : 'años'})`
}

const formatReceived = (date) =>
    new Intl.DateTimeFormat('es-PA', {
        dateStyle: 'long',
        timeStyle: 'short',
        timeZone: 'America/Panama',
    }).format(date)

/** Números panameños de 7 u 8 dígitos llevan el 507 delante para WhatsApp. */
const whatsappNumber = (phone) => {
    const digits = phone.replace(/\D/g, '')
    return digits.length <= 8 ? `507${digits}` : digits
}

const row = (label, valueHtml, last = false) => `
    <tr>
        <td valign="top" style="padding:12px 0;width:42%;font:600 13px/1.5 ${FONT};color:${COLORS.muted};${last ? '' : `border-bottom:1px solid ${COLORS.line};`}">
            ${label}
        </td>
        <td valign="top" style="padding:12px 0 12px 12px;font:600 14px/1.5 ${FONT};color:${COLORS.text};${last ? '' : `border-bottom:1px solid ${COLORS.line};`}">
            ${valueHtml}
        </td>
    </tr>`

const section = (title, rows) => `
    <tr>
        <td style="padding:28px 32px 0;">
            <p style="margin:0 0 4px;font:700 11px/1.4 ${FONT};letter-spacing:.14em;text-transform:uppercase;color:${COLORS.muted};">
                ${title}
            </p>
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                ${rows.map(([label, value], index) => row(label, value, index === rows.length - 1)).join('')}
            </table>
        </td>
    </tr>`

const button = (href, label, { background, color }) => `
    <td style="padding:0 6px 12px;">
        <a href="${escape(href)}" target="_blank"
           style="display:inline-block;padding:13px 22px;border-radius:999px;background:${background};color:${color};font:700 14px/1 ${FONT};text-decoration:none;white-space:nowrap;">
            ${label}
        </a>
    </td>`

const EMPTY = `<span style="color:${COLORS.muted};font-weight:500;">No indicado</span>`

/**
 * @param {Record<string, string>} data Campos del formulario tal como
 *   los guarda Netlify Forms.
 * @param {{ siteUrl: string, receivedAt?: Date }} options
 * @returns {{ subject: string, html: string, text: string, replyTo?: string }}
 */
export const renderPreMatricula = (
    data,
    { siteUrl, receivedAt = new Date() },
) => {
    const student =
        `${clean(data.estudiante_nombre)} ${clean(data.estudiante_apellido)}`.trim()
    const guardian =
        `${clean(data.acudiente_nombre)} ${clean(data.acudiente_apellido)}`.trim()
    const grade = clean(data.grado)
    const email = clean(data.correo)
    const phone = clean(data.telefono)
    const birth = clean(data.estudiante_nacimiento)
    const school = clean(data.colegio_procedencia)
    const source = clean(data.fuente)
    const comments = clean(data.comentarios)

    const birthLabel = birth ? formatBirthDate(birth, receivedAt) : ''
    const received = formatReceived(receivedAt)
    const logoUrl = `${siteUrl.replace(/\/$/, '')}/img/lacolmena/logo-correo.png`

    const subject = `Pre-matrícula: ${student}${grade ? ` – ${grade}` : ''}`

    const replyHref = `mailto:${email}?subject=${encodeURIComponent(
        `Pre-matrícula de ${student} – ${SCHOOL.name}`,
    )}`
    const whatsappHref = `https://wa.me/${whatsappNumber(phone)}?text=${encodeURIComponent(
        `Hola, ${clean(data.acudiente_nombre)}. Le escribimos del ${SCHOOL.name} por la pre-matrícula de ${student}.`,
    )}`

    const html = `<!doctype html>
<html lang="es">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="color-scheme" content="light">
    <title>${escape(subject)}</title>
</head>
<body style="margin:0;padding:0;background:${COLORS.cream};">
    <!-- Vista previa en la bandeja de entrada -->
    <div style="display:none;max-height:0;overflow:hidden;">
        ${escape(`${guardian} envió la pre-matrícula de ${student}${grade ? ` para ${grade}` : ''}.`)}
    </div>

    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:${COLORS.cream};">
        <tr>
            <td align="center" style="padding:32px 16px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"
                       style="max-width:600px;background:#ffffff;border-radius:20px;overflow:hidden;border:1px solid ${COLORS.line};">

                    <!-- Encabezado con el escudo -->
                    <tr>
                        <td align="center" style="background:${COLORS.green};padding:28px 32px 24px;">
                            <img src="${escape(logoUrl)}" width="67" height="80" alt="${SCHOOL.name}"
                                 style="display:block;border:0;margin:0 auto 12px;">
                            <p style="margin:0;font:700 11px/1.4 ${FONT};letter-spacing:.2em;text-transform:uppercase;color:${COLORS.gold};">
                                Colegio Bilingüe
                            </p>
                            <p style="margin:2px 0 0;font:700 22px/1.3 ${FONT};color:#ffffff;">
                                La Colmena
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td style="background:${COLORS.gold};height:4px;line-height:4px;font-size:0;">&nbsp;</td>
                    </tr>

                    <!-- Resumen -->
                    <tr>
                        <td style="padding:32px 32px 0;">
                            <span style="display:inline-block;padding:6px 12px;border-radius:999px;background:#FDF3C9;font:700 11px/1 ${FONT};letter-spacing:.12em;text-transform:uppercase;color:${COLORS.greenDeep};">
                                Nueva pre-matrícula
                            </span>
                            <h1 style="margin:14px 0 6px;font:700 26px/1.25 ${FONT};color:${COLORS.text};">
                                ${escape(student)}
                            </h1>
                            <p style="margin:0;font:500 15px/1.5 ${FONT};color:#5B665E;">
                                ${grade ? `Aplica a <strong style="color:${COLORS.text};">${escape(grade)}</strong> · ` : ''}Acudiente: <strong style="color:${COLORS.text};">${escape(guardian)}</strong>
                            </p>
                        </td>
                    </tr>

                    ${section('Estudiante', [
                        ['Nombre completo', escape(student)],
                        [
                            'Fecha de nacimiento',
                            birthLabel ? escape(birthLabel) : EMPTY,
                        ],
                        ['Grado al que aplica', grade ? escape(grade) : EMPTY],
                        [
                            'Colegio de procedencia',
                            school ? escape(school) : EMPTY,
                        ],
                    ])}

                    ${section('Acudiente', [
                        ['Nombre completo', escape(guardian)],
                        [
                            'Correo',
                            `<a href="mailto:${escape(email)}" style="color:${COLORS.text};text-decoration:underline;">${escape(email)}</a>`,
                        ],
                        [
                            'Teléfono o WhatsApp',
                            `<a href="tel:+${whatsappNumber(phone)}" style="color:${COLORS.text};text-decoration:underline;">${escape(phone)}</a>`,
                        ],
                    ])}

                    ${section('Más información', [
                        ['¿Cómo nos conoció?', source ? escape(source) : EMPTY],
                        [
                            'Comentarios',
                            comments
                                ? escape(comments).replace(/\r?\n/g, '<br>')
                                : EMPTY,
                        ],
                    ])}

                    <!-- Acciones -->
                    <tr>
                        <td align="center" style="padding:32px 26px 20px;">
                            <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                                <tr>
                                    ${email ? button(replyHref, 'Responder por correo', { background: COLORS.gold, color: COLORS.greenDeep }) : ''}
                                    ${phone ? button(whatsappHref, 'Escribir por WhatsApp', { background: COLORS.green, color: '#ffffff' }) : ''}
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <!-- Pie -->
                    <tr>
                        <td style="background:${COLORS.cream};padding:20px 32px;border-top:1px solid ${COLORS.line};">
                            <p style="margin:0;font:500 12px/1.6 ${FONT};color:${COLORS.muted};">
                                Recibido el ${escape(received)} desde el formulario de pre-matrícula de
                                <a href="${escape(siteUrl)}" style="color:${COLORS.muted};">${SCHOOL.domain}</a>.
                                También queda guardado en Netlify, en la sección Forms.
                            </p>
                            <p style="margin:10px 0 0;font:italic 600 12px/1.6 ${FONT};color:${COLORS.green};">
                                ${SCHOOL.motto}
                            </p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>`

    // Versión en texto para clientes que no muestran HTML
    const text = [
        `Nueva pre-matrícula — ${SCHOOL.name}`,
        '',
        'ESTUDIANTE',
        `Nombre: ${student}`,
        `Fecha de nacimiento: ${birthLabel || 'No indicada'}`,
        `Grado al que aplica: ${grade || 'No indicado'}`,
        `Colegio de procedencia: ${school || 'No indicado'}`,
        '',
        'ACUDIENTE',
        `Nombre: ${guardian}`,
        `Correo: ${email}`,
        `Teléfono o WhatsApp: ${phone}`,
        '',
        `¿Cómo nos conoció?: ${source || 'No indicado'}`,
        `Comentarios: ${comments || 'Ninguno'}`,
        '',
        `Recibido: ${received}`,
    ].join('\n')

    return { subject, html, text, replyTo: email || undefined }
}
