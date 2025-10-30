import { motion } from 'framer-motion'
import { cn } from '../lib/utils'

export function Section({
  children,
  className,
  id,
  initial = { opacity: 0, y: 20 },
  animate = { opacity: 1, y: 0 },
  transition = { duration: 0.5 },
}) {
  return (
    <motion.section
      id={id}
      initial={initial}
      animate={animate}
      transition={transition}
      className={cn(
        'w-full min-h-screen py-20 px-6 md:px-10 lg:px-20',
        'relative z-10 flex flex-col items-center justify-center',
        className
      )}
    >
      {children}
    </motion.section>
  )
}

export function SectionTitle({ children, className }) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className={cn(
        'text-3xl md:text-5xl lg:text-6xl font-display font-bold',
        'text-center mb-6 bg-gradient-to-r from-primary to-accent',
        'bg-clip-text text-transparent',
        className
      )}
    >
      {children}
    </motion.h2>
  )
}

export function SectionSubtitle({ children, className }) {
  return (
    <motion.h3
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className={cn(
        'text-xl md:text-2xl text-muted-foreground text-center mb-12',
        className
      )}
    >
      {children}
    </motion.h3>
  )
}