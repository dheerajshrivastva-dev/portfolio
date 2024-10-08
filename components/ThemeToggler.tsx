"use client"

import { useTheme } from 'next-themes'
import { FC } from 'react'
import { Button } from './ui/button';
import { MoonIcon, SunIcon } from "@radix-ui/react-icons"

interface ThemeTogglerProps {
  
}

const ThemeToggler: FC<ThemeTogglerProps> = ({}) => {
  const  {theme, setTheme} = useTheme();

  return (
    <div>
      <Button variant="outline" className='relative' size="icon" onClick={() => setTheme(theme === 'dark' ? "light" : "dark")}>
        <SunIcon className='h-[1.2rem] w-[1.2rem] rotate-20 scale-100 transition-all dark:-rotate-90 dark:scale-0'/>
        <MoonIcon className='absolute h-[1.25rem] w-[1.25rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
      </Button>
    </div>
  )
}

export default ThemeToggler
