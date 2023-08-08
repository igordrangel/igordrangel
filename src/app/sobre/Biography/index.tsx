import Image from 'next/image'
import profileImage from '@/../public/me.png'
import { NumberLegend } from './NumberLegend'

export function Biography() {
  return (
    <div className="grid w-full grid-cols-8 gap-16">
      <div className="col-span-3 flex flex-col items-start justify-start">
        <h2 className="mb-4 text-lg font-bold uppercase text-black/75">
          Biografia
        </h2>
        <p className="font-medium">Descrição sobre mim</p>
      </div>

      <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-black bg-gray-200 p-8">
        <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-black" />
        <Image
          src={profileImage}
          alt="Foto de Perfil de Igor Dias Rangel"
          className="w-full h-auto rounded-2xl"
          priority={true}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <div className="col-span-2 flex flex-col items-end justify-between">
        <NumberLegend
          value={new Date().getFullYear() - 2015}
          legend="anos de experiência"
        />
        <NumberLegend value={20} legend="projetos concluídos" />
        <NumberLegend value={4} legend="clientes satisfeitos" />
      </div>
    </div>
  )
}
