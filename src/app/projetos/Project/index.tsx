import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { GithubLogo } from 'phosphor-react'

interface ProjectProps {
  type: string
  title: string
  summary: string
  img: StaticImageData
  link: string
  github: string
}

export function Project({
  type,
  title,
  summary,
  img,
  link,
  github,
}: ProjectProps) {
  return (
    <article className="w-full h-full flex flex-col items-center justify-center rounded-2xl border border-solid border-black bg-white p-6 relative">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-black rounded-br-3xl" />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <Image
          src={img}
          alt={title}
          className="w-full h-auto"
          priority={true}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </Link>

      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold">{title}</h2>
        </Link>
        <p className="my-2 font-medium text-black">{summary}</p>
        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className="text-lg font-semibold underline"
          >
            Demonstração
          </Link>
          <Link href={github} target="_blank">
            <GithubLogo size={34} />
          </Link>
        </div>
      </div>
    </article>
  )
}
