import { LiIcon } from '@/components/LiIcon'
import { motion, useScroll } from 'framer-motion'
import { useRef } from 'react'

interface DetailProps {
  position: string
  company: string
  companyLink: string
  time: string
  address: string
  work: string
}

const Details = ({
  position,
  company,
  companyLink,
  time,
  address,
  work,
}: DetailProps) => {
  const ref = useRef<HTMLLIElement>(null)
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: 'spring' }}
      >
        <h3 className="font-bold text-2xl">
          {position}{' '}
          <a
            href={companyLink}
            target="_blank"
            className="text-primary"
            rel="noreferrer"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-black/50">
          {time} | {address}
        </span>
        <p className="font-medium w-full">{work}</p>
      </motion.div>
    </li>
  )
}

export function Experience() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center start'],
  })

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center">
        Experience
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-black origin-top"
        ></motion.div>

        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <li>
            <Details
              position="Auxiliar Administrativo"
              companyLink="https://www.linkedin.com/company/ciadocredito?originalSubdomain=br"
              company="Cia do Crédito"
              time="2016-2017"
              address="Campos dos Goytacazes/RJ, BR"
              work="Suporte ao Cliente e Controle e registro dos dados dos clientes em planilha excel"
            />

            <Details
              position="Desenvolvedor WEB Júnior"
              companyLink="https://www.linkedin.com/company/ciadocredito?originalSubdomain=br"
              company="Cia do Crédito"
              time="2017-2018"
              address="Campos dos Goytacazes/RJ, BR"
              work="Desenvolvimento de aplicações internas da empresa"
            />

            <Details
              position="Desenvolvedor WEB Pleno"
              companyLink="https://www.linkedin.com/company/ciadocredito?originalSubdomain=br"
              company="Cia do Crédito"
              time="2018-2019"
              address="Campos dos Goytacazes/RJ, BR"
              work="Desenvolvimento de aplicações internas e externas da empresa"
            />

            <Details
              position="Desenvolvedor WEB Sênior/TL"
              companyLink="https://www.linkedin.com/company/ciadocredito?originalSubdomain=br"
              company="Cia do Crédito"
              time="2018-2020"
              address="Campos dos Goytacazes/RJ, BR"
              work="Desenvolvimento de aplicações internas e externas da empresa, aplicações de mensageria, webscrapping e liderança da equipe de desenvolvimento da empresa."
            />

            <Details
              position="Desenvolvedor WEB Sênior"
              companyLink="https://www.linkedin.com/company/metaoficial/mycompany/verification"
              company="Meta"
              time="2020-Atual"
              address="Rio de Janeiro, BR"
              work="Desenvolvimento de aplicações internas da Rede Globo(Cliente) e aplicações de mensageria."
            />
          </li>
        </ul>
      </div>
    </div>
  )
}
