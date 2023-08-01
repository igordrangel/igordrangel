'use client'

import { AnimatedText } from '@/components/AnimatedText'
import { Biography } from './Biography'
import { Skills } from './Skills'

export default function Sobre() {
  return (
    <main className="flex w-full flex-col items-center justify-center pt-16 pb-32">
      <AnimatedText
        text="A paixão é o combustível para o propósito!"
        className="mb-16"
      />
      <Biography />
      <Skills />
    </main>
  )
}
