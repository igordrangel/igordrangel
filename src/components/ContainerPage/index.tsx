import { ReactNode } from 'react'

export function ContainerPage({ children }: { children: ReactNode }) {
  return (
    <main className="flex justify-center box-border m-1 ml-0">
      <div>{children}</div>
    </main>
  )
}
