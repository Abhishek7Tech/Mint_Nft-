'use client';
import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from "@chakra-ui/react"
import WalletContextProvider from '../components/WalletContextProvider'


const colors = {
  background: "#1F1F1F",
  accent: "#833BBE",
  bodyText: "rgba(255, 255, 255, 0.75)",
}

const theme = extendTheme({ colors })

export function Providers({ 
    children 
  }: { 
  children: React.ReactNode 
  }) {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>
      <WalletContextProvider>
        {children}
      </WalletContextProvider> 
      </ChakraProvider>
    </CacheProvider>
  )
}