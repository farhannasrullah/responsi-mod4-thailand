// src/utils/resolveImage.js
/**
 * resolveImageUrl(src)
 * - If src is falsy -> resolves null
 * - If src is a relative path (startsWith('/')) -> resolves absolute URL using window.location.origin + src
 * - Otherwise resolves src as-is
 *
 * Returns a Promise that resolves to the final URL (or null).
 */
export function resolveImageUrl(src) {
  return new Promise((resolve) => {
    try {
      if (!src) return resolve(null)

      // If src already looks absolute (http/https/data:) just resolve
      const isAbsolute = /^https?:\/\//i.test(src) || /^data:/i.test(src)
      if (isAbsolute) return resolve(src)

      // If src is a relative path starting with '/', make it absolute using current origin.
      if (src.startsWith('/')) {
        try {
          const absolute = `${window.location.origin}${src}`
          return resolve(absolute)
        } catch (e) {
          return resolve(src) // fallback to raw string
        }
      }

      // otherwise return as-is
      return resolve(src)
    } catch (err) {
      // On any error, resolve null so caller can fallback
      return resolve(null)
    }
  })
}

export default resolveImageUrl
