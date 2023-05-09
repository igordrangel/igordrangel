import Link from 'next/link'

export function Footer() {
  return (
    <footer className="w-full border-t-2 border-solid border-black font-medium text-lg">
      <div className="py-8 px-44 flex items-center justify-between">
        <span>
          {new Date().getFullYear()} &copy; Todos os direitos reservados
        </span>

        <div className="flex items-center">
          Construído com{' '}
          <span className="text-primary text-2xl px-1">&#9825;</span>
          por&nbsp;
          <Link href="/" className="underline underline-offset-2">
            Igor D. Rangel
          </Link>
        </div>
      </div>
    </footer>
  )
}
