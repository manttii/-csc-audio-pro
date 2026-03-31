'use client'

import React, { useState } from 'react'
import Image, { ImageProps } from 'next/image'

interface ProductImageProps extends Omit<ImageProps, 'src' | 'onError'> {
  src: string
  fallbackSrc: string
}

export function ProductImage({ src, fallbackSrc, ...props }: ProductImageProps) {
  const [error, setError] = useState(false)

  return (
    <Image
      {...props}
      src={error ? fallbackSrc : src}
      onError={() => setError(true)}
    />
  )
}
