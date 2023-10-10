'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ArrowSquareOut } from 'phosphor-react'
import { HTMLAttributeAnchorTarget } from 'react'

interface CustomLinkProps {
  href: string
  title: string
  className: string
  target?: HTMLAttributeAnchorTarget
}

export function NavBar() {
  function CustomLink({
    href,
    title,
    target,
    className = '',
  }: CustomLinkProps) {
    const pathname = usePathname()

    return (
      <Link
        href={href}
        className={`${className} relative flex items-center group font-mono font-semibold uppercase`}
        target={target}
      >
        {title}
        <span
          className={`
          h-[2px] inline-block bg-black absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
            pathname === href ? 'w-full' : 'w-0'
          } dark:bg-white`}
        >
          &nbsp;
        </span>
        {target === '_blank' && <ArrowSquareOut className="ml-2" size={20} />}
      </Link>
    )
  }

  return (
    <nav className="flex items-center gap-8 dark:text-white">
      <CustomLink href="/" title="Inicio" className="mr-4" />
      <CustomLink href="/sobre" title="Sobre" className="mr-4" />
      <CustomLink href="/projetos" title="Projetos" className="mr-4" />
      <CustomLink
        href="https://client-hub.igordrangel.com.br"
        title="Painel do Cliente"
        target="_blank"
        className="mr-4"
      />
    </nav>
  )
}
