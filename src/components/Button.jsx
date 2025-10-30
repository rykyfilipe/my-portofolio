import { motion } from 'framer-motion'
import { cn } from '../lib/utils'
import React from 'react'

export default function Button({
  text,
  imgURL,
  handleClick,
  variant = 'default',
  size = 'default',
  className,
  icon,
  ...props
}) {
  const baseStyles = 'inline-flex items-center justify-center rounded-full font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50'
  
  const variants = {
    default: 'bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 ring-offset-background',
    outline: 'border-2 border-primary/80 text-primary bg-background/50 backdrop-blur-sm hover:bg-primary/10 hover:border-primary shadow-lg ring-offset-background',
    ghost: 'hover:bg-primary/10 text-foreground hover:text-primary shadow-sm ring-offset-background',
    link: 'text-primary hover:text-primary/80 underline-offset-4 hover:underline',
  }
  
  const sizes = {
    default: 'h-11 px-6 py-2',
    sm: 'h-9 px-4 py-2',
    lg: 'h-12 px-8 py-3',
    icon: 'h-11 w-11',
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleClick}
      className={  cn(
        baseStyles,
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {text && <span className="mr-2">{text}</span>}
      {imgURL && (
      <img
        src={imgURL}
        alt=""
        className={cn(
          'w-5 h-5 ',
          text ? 'ml-2' : ''
        )}
      />

      )}
    </motion.button>
  )
}