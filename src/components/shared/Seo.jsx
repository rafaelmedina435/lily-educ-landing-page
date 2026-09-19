import { useEffect } from 'react'

/**
 * SEO para una SPA: escribe título, meta y datos estructurados en el
 * `<head>` real. No hay renderizado en servidor, así que los buscadores
 * que ejecutan JavaScript (Google, Bing) leen estas etiquetas después de
 * la hidratación; las redes sociales usan las que ya vienen en
 * `index.html`.
 *
 * Cada etiqueta que este componente crea queda marcada con
 * `data-seo="managed"` para poder retirarla al desmontar sin tocar las
 * que trae el HTML base.
 */

const MANAGED = 'data-seo'

const upsertMeta = (selector, attrs) => {
    let tag = document.head.querySelector(selector)

    if (!tag) {
        tag = document.createElement('meta')
        tag.setAttribute(MANAGED, 'managed')
        document.head.appendChild(tag)
    }

    Object.entries(attrs).forEach(([key, value]) =>
        tag.setAttribute(key, value),
    )

    return tag
}

const upsertLink = (rel, href) => {
    let tag = document.head.querySelector(`link[rel="${rel}"]`)

    if (!tag) {
        tag = document.createElement('link')
        tag.setAttribute('rel', rel)
        tag.setAttribute(MANAGED, 'managed')
        document.head.appendChild(tag)
    }

    tag.setAttribute('href', href)

    return tag
}

const Seo = ({
    title,
    description,
    canonical,
    image,
    type = 'website',
    locale = 'es_PA',
    noindex = false,
    jsonLd,
}) => {
    useEffect(() => {
        const previousTitle = document.title
        const origin = window.location.origin
        const url = canonical
            ? new URL(canonical, origin).href
            : window.location.href.split('#')[0]
        const imageUrl = image ? new URL(image, origin).href : undefined

        if (title) {
            document.title = title
        }

        if (description) {
            upsertMeta('meta[name="description"]', {
                name: 'description',
                content: description,
            })
        }

        upsertMeta('meta[name="robots"]', {
            name: 'robots',
            content: noindex ? 'noindex, nofollow' : 'index, follow',
        })

        upsertLink('canonical', url)

        const og = {
            'og:type': type,
            'og:locale': locale,
            'og:url': url,
            ...(title && { 'og:title': title }),
            ...(description && { 'og:description': description }),
            ...(imageUrl && { 'og:image': imageUrl }),
        }

        Object.entries(og).forEach(([property, content]) =>
            upsertMeta(`meta[property="${property}"]`, { property, content }),
        )

        const twitter = {
            'twitter:card': imageUrl ? 'summary_large_image' : 'summary',
            ...(title && { 'twitter:title': title }),
            ...(description && { 'twitter:description': description }),
            ...(imageUrl && { 'twitter:image': imageUrl }),
        }

        Object.entries(twitter).forEach(([name, content]) =>
            upsertMeta(`meta[name="${name}"]`, { name, content }),
        )

        let script

        if (jsonLd) {
            script = document.createElement('script')
            script.type = 'application/ld+json'
            script.setAttribute(MANAGED, 'managed')
            script.textContent = JSON.stringify(jsonLd)
            document.head.appendChild(script)
        }

        return () => {
            document.title = previousTitle
            script?.remove()
        }
    }, [title, description, canonical, image, type, locale, noindex, jsonLd])

    return null
}

export default Seo
