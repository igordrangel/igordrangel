export function Footer() {
  return (
    <footer className="w-full border-t-2 border-solid border-black font-medium text-lg">
      <div className="py-8 px-44 flex items-center justify-between">
        <span>
          {new Date().getFullYear()} &copy; Todos os direitos reservados
        </span>

        <div className="flex items-center">CNPJ - 51.565.947/0001-80</div>
      </div>
    </footer>
  )
}
