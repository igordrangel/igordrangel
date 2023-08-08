'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const MotionLink = motion(Link)

export function Logo() {
  return (
    <div className="flex items-center justify-center">
      <MotionLink
        href="/"
        className="w-12 h-12 bg-black text-gray-100 flex items-center justify-center rounded-full text-xl font-bold border border-solid border-transparent dark:border-white"
        whileHover={{
          background: [
            '#121212',
            'rgba(131,58,180,1)',
            'rgba(253,29,29,1)',
            'rgba(252,176,69,1)',
            '#121212',
          ],
          transition: { duration: 1, repeat: Infinity },
        }}
      >
        IR
      </MotionLink>
    </div>
  )
}
