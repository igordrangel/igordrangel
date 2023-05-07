import Image from 'next/image'
import prifilePic from '../../public/me.png'
import { AnimatedText } from '@/components/AnimatedText'

export default function Inicio() {
  return (
    <section className="flex items-center text-black w-full h-full">
      <div className="flex items-center justify-between w-full">
        <div className="w-1/2">
          <Image
            src={prifilePic}
            alt="Igor Dias Rangel"
            className="w-full h-auto"
          />
        </div>

        <div>
          <AnimatedText text="Olá, meu nome é Igor!" className="text-6x1" />
          <p>
            Sou um Desenvolvedor Full-Stack, com especialização em Front-End.
            Sempre fui curioso, adoro desafios e inovações.
          </p>
        </div>
      </div>
    </section>
  )
}
