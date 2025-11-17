// src/components/Thumb.jsx
import React from 'react'

export default function Thumb({ src, alt, className }) {

  // fallback otomatis (jika image error)
  const FALLBACK = "/images/thailand-flag.png"

  const handleError = (e) => {
    e.currentTarget.src = FALLBACK
  }

  return (
    <img
      src={src || FALLBACK}
      alt={alt}
      className={className}
      loading="lazy"
      onError={handleError}
    />
  )
}
