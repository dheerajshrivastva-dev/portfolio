"use client"

import { FC, useEffect, useState } from 'react'

//components
import ThemeToggler from './ThemeToggler'
import Logo from './Logo'
import Nav from './Nav'
import MobileNav from './MobileNav'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

interface HeaderProps {
  
}

const Header: FC<HeaderProps> = ({}) => {
  const [header, setHeader] = useState<boolean>(false);
  const pathName = usePathname();

  useEffect(() => {
    const scrollYPos = () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    }

    window.addEventListener('scroll', scrollYPos)
  
    return () => window.removeEventListener('scroll', scrollYPos)
  }, [])
  
  return (
    <header className={cn('sticky top-0 z-30 transition-all', {
      'py-4 bg-white shadow-lg dark:bg-accent': header,
      'py-6 dark:bg-transparent': !header,
      'bg-[#fef9f5]': pathName === "/",
    })}>
      <div className="container mx-auto">
        <div className='flex justify-between items-center'>
          <Logo />
          <div className="flex items-center gap-x-6">
            {/* nav  */}
            <Nav
              containerStyle='hidden md:flex gap-x-8 items-center'
              linkStyle='relative hover:text-primary transition-all'
              underlineStyle='absolute left-0 top-full h-[2px] bg-primary w-full'
            />
            <ThemeToggler />
            {/* mobile nav  */}
            <div className='md:hidden'>
              <MobileNav />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
