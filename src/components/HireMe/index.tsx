import Link from 'next/link'
import { CircularText } from '../Icons'

export function HireMe() {
  return (
    <div className="fixed left-10 bottom-10 flex items-center justify-center overflow-hidden">
      <div className="w-32 h-auto flex items-center justify-center relative">
        <CircularText className={'fill-black animate-spin-slow'} />

        <Link
          href="mailto:igordrangel@gmail.com"
          className="flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-black text-gray-100 shadow-md border border-solid border-black w-24 h-24 rounded-full font-semibold hover:bg-gray-100 hover:text-black text-xs"
        >
          Me Contrate
        </Link>
      </div>
    </div>
  )
}
