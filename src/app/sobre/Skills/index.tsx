import { motion } from 'framer-motion'
import { twMerge } from 'tailwind-merge'

interface SkillProps {
  name: string
  x: string
  y: string
  className?: string
}

const Skill = ({ name, x, y, className }: SkillProps) => {
  return (
    <motion.div
      className={twMerge(
        'flex items-center justify-center rounded-full font-semibold bg-black text-white py-3 px-6 shadow-black cursor-pointer absolute',
        className,
      )}
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x, y }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  )
}

export function Skills() {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center">Skills</h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circular-light">
        <Skill name="Web" x="0" y="0" className="p-8" />

        <Skill name="HTML" x="-10vw" y="2vw" />
        <Skill name="CSS" x="6vw" y="-5vw" />
        <Skill name="Javascript" x="8vw" y="4vw" />

        <Skill name="Angular" x="0vw" y="8.5vw" />
        <Skill name="Angular Material" x="-11vw" y="6vw" />
        <Skill name="Bootstrap" x="-14vw" y="-3vw" />
        <Skill name="React" x="-5vw" y="-8.5vw" />
        <Skill name="Tailwind CSS" x="15vw" y="-1vw" />

        <Skill name="NextJS" x="15vw" y="-8vw" />

        <Skill name="NestJS" x="26vw" y="0vw" />
        <Skill name="Prisma" x="30vw" y="-5vw" />

        <Skill name="MySQL" x="32vw" y="-10vw" />
        <Skill name="Postgrees" x="36vw" y="0vw" />

        <Skill name="Azure Functions" x="-41vw" y="0vw" />
        <Skill name="Puppeteer" x="-32vw" y="-15vw" />

        <Skill name="Git/Github" x="28vw" y="21vw" />
      </div>
    </>
  )
}
