import { Logo } from './Logo'
import { NavBar } from './NavBar'
import { RedesSociaisETemas } from './RedesSociaisETemas'

export function Header() {
  return (
    <header className="flex items-center justify-between box-border px-32 py-6">
      <NavBar />
      <Logo />
      <RedesSociaisETemas />
    </header>
  )
}
