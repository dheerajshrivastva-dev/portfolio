import { FC } from 'react'
import ThemeToggler from './ThemeToggler'

interface HeaderProps {
  
}

const Header: FC<HeaderProps> = ({}) => {
  return <header>
    <ThemeToggler />
  </header>
}

export default Header
