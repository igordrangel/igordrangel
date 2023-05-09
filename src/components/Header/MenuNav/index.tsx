'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface CustomLinkProps {
  href: string
  title: string
  className: string
}

export function MenuNav() {
  function CustomLink({ href, title, className = '' }: CustomLinkProps) {
    const pathname = usePathname()

    return (
      <Link
        href={href}
        className={`${className} relative group font-mono font-semibold uppercase`}>
        {title}
        <span
          className={`
          h-[2px] inline-block bg-black absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
            pathname === href ? 'w-full' : 'w-0'
          }`}>
          &nbsp;
        </span>
      </Link>
    )
  }

  return (
    <nav className="flex items-center gap-8">
      <CustomLink href="/" title="Inicio" className="mr-4"></CustomLink>
      <CustomLink href="/sobre" title="Sobre" className="mr-4"></CustomLink>
      <CustomLink
        href="/projetos"
        title="Projetos"
        className="mr-4"
      ></CustomLink>
    </nav>
  )
}
