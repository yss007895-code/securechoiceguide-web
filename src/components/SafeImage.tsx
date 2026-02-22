'use client';
import Image, { ImageProps } from 'next/image';
import { useState } from 'react';

const FALLBACK_IMAGES: Record<string, string> = {
  vpn: '/images/categories/vpn-reviews.svg',
  privacy: '/images/categories/privacy-tools.svg',
  security: '/images/categories/security-guides.svg',
  password: '/images/categories/password-managers.svg',
  default: '/images/categories/default.svg',
};

interface SafeImageProps extends Omit<ImageProps, 'onError'> {
  category?: string;
  fallbackSrc?: string;
}

export default function SafeImage({ category, fallbackSrc, src, alt, ...props }: SafeImageProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (!hasError) {
      const fallback = fallbackSrc
        || FALLBACK_IMAGES[category || '']
        || FALLBACK_IMAGES.default;
      setImgSrc(fallback);
      setHasError(true);
    }
  };

  return (
    <Image
      {...props}
      src={imgSrc}
      alt={alt}
      onError={handleError}
    />
  );
}
