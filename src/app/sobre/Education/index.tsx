import { LiIcon } from '@/components/LiIcon'
import { motion, useScroll } from 'framer-motion'
import { useRef } from 'react'

interface DetailProps {
  type: string
  time: string
  place: string
  info: string
}

const Details = ({ type, time, place, info }: DetailProps) => {
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
        <h3 className="font-bold text-2xl">{type}</h3>
        <span className="capitalize font-medium text-black/50">
          {time} | {place}
        </span>
        <p className="font-medium w-full">{info}</p>
      </motion.div>
    </li>
  )
}

export function Education() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center start'],
  })

  return (
    <div className="mb-20">
      <h2 className="font-bold text-8xl mb-32 w-full text-center">Educação</h2>

      <div ref={ref} className="w-[75%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-black origin-top"
        ></motion.div>

        <ul className="w-full flex flex-col items-start justify-between ml-4 mb-32">
          <li>
            <Details
              type="Curso de PHP"
              time="2018"
              place="UpInside Treinamentos"
              info="Desenvolvimento de aplicações WEB com PHP 7."
            />
            <Details
              type="Curso de Angular"
              time="2020"
              place="Alura"
              info="Desenvolvimento de aplicações WEB com Angular 6."
            />
            <Details
              type="Curso Rest API Node.js"
              time="2020"
              place="Alura"
              info="Desenvolvimento de APIs Node.js utilizando Express e Mysql."
            />
            <Details
              type="Curso Rest API Node.js"
              time="2023"
              place="Ignite"
              info="Desenvolvimento de APIs Node.js utilizando Fastify, Prisma, Nest.js, conceitos de DDD, SOLID, TDD, Testes Unitários e E2E."
            />
          </li>
        </ul>
      </div>
    </div>
  )
}
