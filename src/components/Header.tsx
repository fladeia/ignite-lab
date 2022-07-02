import { Logo } from "./Logo"
import { List, X } from 'phosphor-react'

interface HeaderProps {
  showSidebar: string;
  setShowSidebar: (string: string) => void
}

export const Header = (props: HeaderProps) => {
  const handleClick = () => {
    if (props.showSidebar === 'hidden') {
      props.setShowSidebar('')
    } else {
      props.setShowSidebar('hidden')
    }
  }

  return (
    <header className='w-full py-5 flex items-center justify-between lg:justify-center bg-gray-700 border-b border-gray-600'>
      <Logo />
      <div className="flex items-center gap-2 lg:hidden">
        <span className="text-sm">Aulas</span>
        {props.showSidebar ? (
          <List size={32} color="#81d8f7" className="hamburger" onClick={handleClick} />
        ) : (
          <X size={32} color="#81d8f7" className="hamburger" onClick={handleClick} />
        )}
      </div>
    </header>
  )
}
