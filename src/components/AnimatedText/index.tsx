interface AnimatedTextProps {
  text: string
  className?: string
}

export function AnimatedText({ text, className }: AnimatedTextProps) {
  return (
    <div className="w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden">
      <h1
        className={`inline-block w-full text-black font-bold capitalize ${className}`}
      >
        {text.split(' ').map((word, index) => (
          <span key={word + '-' + index}>{word}&nbsp;</span>
        ))}
      </h1>
    </div>
  )
}
