import { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';

const LoadingFallback = () => (
  <div className="w-full h-[50vh] flex items-center justify-center">
    <motion.div
      className="w-12 h-12 border-4 border-primary rounded-full border-t-transparent"
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
    />
  </div>
);

export function lazyLoad(importFn, options = {}) {
  const LazyComponent = lazy(importFn);
  
  return (props) => (
    <Suspense fallback={options.fallback || <LoadingFallback />}>
      <LazyComponent {...props} />
    </Suspense>
  );
}