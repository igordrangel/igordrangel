import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { GithubLogo } from 'phosphor-react'

interface FeaturedProjectProps {
  type: string
  title: string
  summary: string
  img: StaticImageData
  link: string
  github: string
}

export function FeaturedProject({
  type,
  title,
  summary,
  img,
  link,
  github,
}: FeaturedProjectProps) {
  return (
    <article className="w-full flex items-center justify-between rounded-br-2xl rounded-3xl border border-solid border-black bg-white shadow-2xl p-12 relative">
      <div className="absolute top-0 -right-3 -z-10 w-[100.8%] h-[103%] rounded-[2.5rem] bg-black rounded-br-3xl" />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg"
      >
        <Image
          src={img}
          alt={title}
          className="w-full h-auto"
          priority={true}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </Link>

      <div className="w-1/2 flex flex-col items-start justify-between pl-6">
        <span className="text-primary font-medium text-xl">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold">{title}</h2>
        </Link>
        <p className="my-2 font-medium text-black">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            <GithubLogo size={40} />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-black text-white p-2 px-6 text-lg font-semibold"
          >
            Visite o Projeto
          </Link>
        </div>
      </div>
    </article>
  )
}
