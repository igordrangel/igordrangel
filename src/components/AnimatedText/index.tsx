import { motion } from 'framer-motion'
import Balance from 'react-wrap-balancer'

const quote = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08,
    },
  },
}

const singleWord = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
}

interface AnimatedTextProps {
  text: string
  className?: string
}

export function AnimatedText({ text, className }: AnimatedTextProps) {
  return (
    <div className="w-full mx-auto py-2 flex items-center justify-center text-center text-8xl overflow-hidden">
      <motion.h1
        className={`inline-block w-full text-black font-bold capitalize leading-3 ${className}`}
        variants={quote}
        initial="initial"
        animate="animate"
      >
        <Balance>
          <div className="leading-[1]">
            {text.split(' ').map((word, index) => (
              <motion.span
                key={word + '-' + index}
                className="inline-block leading-3"
                variants={singleWord}
              >
                {word}&nbsp;
              </motion.span>
            ))}
          </div>
        </Balance>
      </motion.h1>
    </div>
  )
}
