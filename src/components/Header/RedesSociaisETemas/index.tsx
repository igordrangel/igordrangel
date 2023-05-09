'use client'

import {
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
  YoutubeLogo,
} from 'phosphor-react'
import { AnimatedLink } from './AnimatedLink'

export function RedesSociaisETemas() {
  return (
    <nav className="flex items-center gap-4">
      <AnimatedLink href="#" description="Link para meu Linkedin">
        <LinkedinLogo size={32} />
      </AnimatedLink>

      <AnimatedLink href="#" description="Link para meu Github">
        <GithubLogo size={32} />
      </AnimatedLink>

      <AnimatedLink href="#" description="Link para meu Instagram">
        <InstagramLogo size={32} />
      </AnimatedLink>

      <AnimatedLink href="#" description="Link para meu Youtube">
        <YoutubeLogo size={32} />
      </AnimatedLink>

      {/* <ThemeSelector /> */}
    </nav>
  )
}
