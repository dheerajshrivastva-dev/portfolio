"use client"

import { FC } from 'react'
import { type ClassValue } from "clsx"
import Link from 'next/link';

// framer motion
import { motion } from "framer-motion";

// utils
import { cn } from '@/lib/utils';

// next hooks
import { usePathname } from 'next/navigation';


interface NavProps {
  containerStyle?: ClassValue;
  linkStyle?: ClassValue;
  underlineStyle?: ClassValue;
}

interface linkInterface {
  path: string;
  name: string;
}

const links: linkInterface[] = [
  {
    path: "/",
    name: 'home'
  },
  {
    path: "/projects",
    name: 'my projects'
  },{
    path: "/contacts",
    name: 'contacts'
  }
]

const Nav: FC<NavProps> = ({ containerStyle, linkStyle, underlineStyle}) => {
  const path = usePathname()
  return (
    <nav className={cn(containerStyle)}>
      {links.map((link, index) => {
        return <Link
          key={index}
          href={link.path}
          className={cn('capitalize', linkStyle)}
        >
          {link.path === path && (
            <motion.span
              initial={{ y: "-100%"}}
              animate={{ y: 0 }}
              transition={{ type: "tween"}}
              layoutId='underline'
              className={`${underlineStyle}`}
            />
          )}
          {link.name}
        </Link>
      })}
    </nav>
  )
}

export default Nav
 