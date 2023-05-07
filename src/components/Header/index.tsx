import { Logo } from './Logo'
import { MenuNav } from './MenuNav'
import { RedesSociaisETemas } from './RedesSociaisETemas'

export function Header() {
  return (
    <header className="flex items-center justify-between box-border px-32 py-6">
      <MenuNav />
      <Logo />
      <RedesSociaisETemas />
    </header>
  )
}
