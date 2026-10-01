import nodemailer from 'nodemailer'
import { renderPreMatricula } from '../emails/preMatricula.mjs'

/**
 * Netlify ejecuta esta función sola (por su nombre, `submission-created`)
 * cada vez que Netlify Forms acepta un envío que no es spam. Manda a
 * secretaría el correo con formato; la notificación de texto plano de
 * Netlify ya no hace falta.
 *
 * Variables de entorno (Site configuration → Environment variables):
 *   SMTP_USER  Buzón que envía (Namecheap Private Email), la dirección
 *              completa, p. ej. pre-matricula@lacolmena.edu.pa
 *   SMTP_PASS  Contraseña de ese buzón
 *   MAIL_TO    Quién recibe; varios separados por coma
 *   SMTP_HOST  Opcional, por defecto mail.privateemail.com
 *   SMTP_PORT  Opcional, por defecto 465 (SSL)
 *   MAIL_FROM  Opcional, por defecto «Pre-matrícula La Colmena <SMTP_USER>»
 */

const FORM_NAME = 'pre-matricula'

export const handler = async (event) => {
    const { payload } = JSON.parse(event.body)

    if (payload.form_name !== FORM_NAME) {
        return { statusCode: 200 }
    }

    const { SMTP_USER, SMTP_PASS, MAIL_TO } = process.env

    if (!SMTP_USER || !SMTP_PASS || !MAIL_TO) {
        console.error(
            'Faltan SMTP_USER, SMTP_PASS o MAIL_TO: no se envió el correo de la pre-matrícula.',
        )
        return { statusCode: 500 }
    }

    const port = Number(process.env.SMTP_PORT || 465)

    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST || 'mail.privateemail.com',
        port,
        secure: port === 465,
        auth: { user: SMTP_USER, pass: SMTP_PASS },
    })

    const { subject, html, text, replyTo } = renderPreMatricula(payload.data, {
        // URL la pone Netlify: la dirección principal del sitio
        siteUrl: process.env.URL || 'https://lacolmena.edu.pa',
        receivedAt: new Date(payload.created_at || Date.now()),
    })

    try {
        await transporter.sendMail({
            from:
                process.env.MAIL_FROM ||
                `"Pre-matrícula La Colmena" <${SMTP_USER}>`,
            to: MAIL_TO,
            // «Responder» en el correo le contesta directo a la familia
            replyTo,
            subject,
            html,
            text,
        })
    } catch (error) {
        console.error('No se pudo enviar el correo de la pre-matrícula:', error)
        return { statusCode: 500 }
    }

    return { statusCode: 200 }
}
