import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { cn } from '../lib/utils';

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  animation = true,
  ...props
}) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Generate srcSet for responsive images
  const generateSrcSet = (imageSrc) => {
    if (typeof imageSrc !== 'string' || !imageSrc.match(/\.(jpg|jpeg|png|webp)$/i)) {
      return null;
    }
    
    const sizes = [320, 640, 768, 1024, 1280];
    return sizes
      .map((size) => {
        const url = new URL(imageSrc, import.meta.url);
        url.searchParams.set('width', size);
        url.searchParams.set('quality', '75');
        return `${url.toString()} ${size}w`;
      })
      .join(', ');
  };

  const srcSet = generateSrcSet(src);

  const imageProps = {
    src,
    alt,
    width,
    height,
    loading: priority ? 'eager' : 'lazy',
    decoding: 'async',
    ...(srcSet && { srcSet, sizes: '(max-width: 768px) 100vw, 50vw' }),
    className: cn(
      'object-cover transition-opacity duration-700',
      !inView && !priority && 'opacity-0',
      inView && 'opacity-100',
      className
    ),
    ...props,
  };

  if (animation) {
    return (
      <motion.img
        ref={ref}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.5 }}
        {...imageProps}
      />
    );
  }

  return <img ref={ref} {...imageProps} />;
}