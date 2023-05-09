'use client'

import { useState } from 'react'

export function ThemeSelector() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  function handleTheme() {
    if (theme === 'dark') {
      setTheme('light')
    } else {
      setTheme('dark')
    }
    document.querySelector('main')?.classList.add(theme)
  }

  return <button onClick={handleTheme}></button>
}
