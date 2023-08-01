import { AnimatedNumber } from '@/components/AnimatedNumber'

interface NumberLegendProps {
  value: number
  legend: string
}

export function NumberLegend({ value, legend }: NumberLegendProps) {
  return (
    <div className="flex flex-col items-end justify-center">
      <span className="inline-block text-7xl font-bold">
        <AnimatedNumber value={value} />+
      </span>
      <h2 className="text-xl font-medium capitalize text-black/75">{legend}</h2>
    </div>
  )
}
