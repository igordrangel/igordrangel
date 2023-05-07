'use client'

import { motion } from 'framer-motion'
import {
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
  YoutubeLogo,
} from 'phosphor-react'
import { useState } from 'react'

export function RedesSociaisETemas() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  function handleTheme() {
    if (theme === 'dark') {
      setTheme('light')
    } else {
      setTheme('dark')
    }
    document.querySelector('main')?.classList.add(theme)
  }

  return (
    <nav className="flex items-center gap-4">
      <motion.a
        href="#"
        target="__blank"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.9 }}
      >
        <LinkedinLogo size={32} />
      </motion.a>

      <motion.a
        href="#"
        target="__blank"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.9 }}
      >
        <GithubLogo size={32} />
      </motion.a>

      <motion.a
        href="#"
        target="__blank"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.9 }}
      >
        <InstagramLogo size={32} />
      </motion.a>

      <motion.a
        href="#"
        target="__blank"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.9 }}
      >
        <YoutubeLogo size={32} />
      </motion.a>

      <button onClick={handleTheme}></button>
    </nav>
  )
}
