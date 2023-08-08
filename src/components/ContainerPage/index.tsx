import { ReactNode } from 'react'

export function ContainerPage({ children }: { children: ReactNode }) {
  return (
    <main className="flex justify-center box-border m-1 ml-0 dark:bg-black">
      <div>{children}</div>
    </main>
  )
}
