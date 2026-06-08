import { useState, useEffect, useRef } from 'react';

const useLazyImage = (src, placeholder = null) => {
  const [imageSrc, setImageSrc] = useState(placeholder || '');
  const [isLoading, setIsLoading] = useState(true);
  const imgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = new Image();
            img.src = src;
            img.onload = () => {
              setImageSrc(src);
              setIsLoading(false);
            };
            img.onerror = () => {
              setIsLoading(false);
            };
            observer.disconnect();
          }
        });
      },
      { rootMargin: '50px' }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, [src]);

  return [imgRef, imageSrc, isLoading];
};

export default useLazyImage;
