"use client"

import { FC } from 'react'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
import { AlignJustify } from 'lucide-react'
import Logo from './Logo'
import Nav from './Nav'
import Socials from './Socials'

interface MobileNavProps {
  
}

const MobileNav: FC<MobileNavProps> = ({}) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <AlignJustify className='cursor-pointer' />
      </SheetTrigger>
      <SheetContent>
        <div className='flex flex-col items-center justify-between h-full py-8'>
          <div className='flex flex-col items-center gap-y-32'>
            <Logo />
            <Nav containerStyle="flex flex-col items-center gap-y-6" />
          </div>
          <Socials containerStyles="flex gap-x-4" iconStyles="text-2xl" />
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav
