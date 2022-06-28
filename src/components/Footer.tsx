import { Link } from "react-router-dom"
import { RocketseatLogo } from "./RocketseatLogo"

export const Footer = () => {
  return (
    <footer className="bg-gray-900 w-full flex flex-col items-center gap-2 p-4 lg:flex-row lg:justify-between" >
      <RocketseatLogo />
      <p className="text-xs text-gray-400">Desenvolvido por <a className="text-blue-500" href='https://ladeia.dev.br' target='_blank'>ladeia.dev.br</a></p>
    </footer>
  )
}
