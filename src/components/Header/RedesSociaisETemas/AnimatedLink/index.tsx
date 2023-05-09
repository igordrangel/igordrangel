'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

export function AnimatedLink({
  children,
  href,
  description,
}: {
  children: ReactNode
  href: string
  description: string
}) {
  return (
    <motion.a
      href={href}
      target="__blank"
      aria-label={description}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.9 }}
    >
      {children}
    </motion.a>
  )
}
