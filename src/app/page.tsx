'use client'

import { AnimatedText } from '@/components/AnimatedText'
import { HireMe } from '@/components/HireMe'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowSquareOut } from 'phosphor-react'
import lightIdea from '../../public/light-idea.svg'
import prifilePic from '../../public/me.png'

export default function Inicio() {
  return (
    <section className="flex items-start text-black w-full h-screen">
      <div className="flex items-center justify-between w-full pl-0 pr-32">
        <div className="px-32 py-0 w-1/2">
          <Image
            src={prifilePic}
            alt="Igor Dias Rangel"
            className="w-full h-auto"
          />
        </div>

        <div className="w-1/2 flex flex-col items-center self-center">
          <AnimatedText
            text="Transformando sonho em realidade com código e design."
            className="!text-6xl !text-left"
          />
          <p className="my-4 text-base font-medium">
            Sou um Desenvolvedor Full-Stack, e sou dedicado a transformar ideias
            em aplicações web inovadoras. Fique a vontade para explorar meus
            projetos, onde minha especialidade está em desenvolvimento Angular e
            Node.js para aplicações WEB.
          </p>
          <div className="flex items-center self-start mt-2">
            <Link
              href="#"
              target={'_blank'}
              className="flex items-center bg-black text-gray-100 p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-white hover:text-black border-2 border-solid border-transparent hover:border-black"
              download={true}
            >
              Curriculum
              <ArrowSquareOut className="ml-3" size={28} />
            </Link>
            <Link
              href="mailto:igordrangel@gmail.com"
              className="ml-4 text-lg font-medium capitalize text-black underline"
            >
              Contato
            </Link>
          </div>
        </div>
      </div>

      <HireMe />
      <div className="absolute right-10 bottom-10 inline-block w-24">
        <Image
          src={lightIdea}
          alt="Ícone de uma lâmpada acesa representando ideias"
          className="w-full h-auto"
        />
      </div>
    </section>
  )
}
