"use client"

import { cn } from '@/lib/utils'
import Link from 'next/link'
import { FC } from 'react'
import {
  RiLinkedinFill,
  RiGithubFill,
  RiFacebookBoxFill,
  RiInstagramFill,
  RiDiscordFill
} from "react-icons/ri"
import { ClassNameValue } from 'tailwind-merge'

const icons = [
  {
    path: "/",
    name: <RiLinkedinFill />,
  },
  {
    path: "/",
    name: <RiGithubFill />,
  },
  {
    path: "/",
    name: <RiDiscordFill />,
  },
  {
    path: "/",
    name: <RiFacebookBoxFill />,
  },
  {
    path: "/",
    name: <RiInstagramFill />,
  },
]

interface SocialsProps {
  containerStyles: ClassNameValue;
  iconStyles: ClassNameValue;
}

const Socials: FC<SocialsProps> = ({ containerStyles, iconStyles}) => {
  return (
    <div className={cn(containerStyles)}>
      {icons.map((icon, index) => {
        return (
          <Link key={index} href={icon.path}>
            <div className={cn(iconStyles)}>
              {icon.name}
            </div>
          </Link>
        )
      })}
    </div>
  )
}

export default Socials
