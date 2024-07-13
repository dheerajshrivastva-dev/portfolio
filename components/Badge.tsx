"use client"

import { cn } from '@/lib/utils'
import { FC, ReactNode } from 'react'
import CountUp from "react-countup"
import { ClassNameValue } from 'tailwind-merge'

interface BadgeProps {
  className: ClassNameValue;
  icon: ReactNode;
  endCounterNum: number;
  endCounterText?: string;
  badgeText: string;
}

const Badge: FC<BadgeProps> = ({
    className,
    icon,
    endCounterNum,
    endCounterText,
    badgeText
  }) => {
  return <div className={cn('badge', className)}>
    <div className="text-3xl text-primary">{icon}</div>
    <div className='flex items-center gap-x-2'>
      <div className='text-4xl leading-none text-primary font-bold'>
        <CountUp end={endCounterNum} delay={1} duration={4} />
        {endCounterText}
      </div>
      <div
        className='max-w-[70px] leading-none text-[15px] font-medium text-black '
      >{badgeText}</div>
    </div>
  </div>
}

export default Badge
