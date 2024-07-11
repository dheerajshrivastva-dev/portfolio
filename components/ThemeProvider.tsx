"use client"

import { FC } from 'react'
import { ThemeProvider as NextThemeProvider } from "next-themes"
import { ThemeProviderProps as NextThemeProviderProps } from "next-themes/dist/types"


const ThemeProvider: FC<NextThemeProviderProps> = ({ children, ...props}) => {
  return <NextThemeProvider {...props} > {children} </NextThemeProvider>
}

export default ThemeProvider
