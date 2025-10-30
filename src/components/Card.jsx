import { motion } from 'framer-motion'
import { cn } from '../lib/utils'

export function Card({
  className,
  children,
  hover = true,
  ...props
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={hover ? { y: -5, transition: { duration: 0.2 } } : undefined}
      className={cn(
        'rounded-xl border bg-card p-6 text-card-foreground shadow-sm',
        'transition-colors hover:shadow-md',
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export function CardHeader({ className, children }) {
  return (
    <div className={cn('flex flex-col space-y-1.5', className)}>
      {children}
    </div>
  )
}

export function CardTitle({ className, children }) {
  return (
    <h3 className={cn('font-semibold leading-none tracking-tight text-xl', className)}>
      {children}
    </h3>
  )
}

export function CardDescription({ className, children }) {
  return (
    <p className={cn('text-sm text-muted-foreground', className)}>
      {children}
    </p>
  )
}

export function CardContent({ className, children }) {
  return (
    <div className={cn('pt-6', className)}>
      {children}
    </div>
  )
}

export function CardFooter({ className, children }) {
  return (
    <div className={cn('flex items-center pt-6', className)}>
      {children}
    </div>
  )
}