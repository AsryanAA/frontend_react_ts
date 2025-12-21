import { ChakraProvider } from '@chakra-ui/react'
import { HelmetProvider } from 'react-helmet-async'
import { BrowserRouter } from 'react-router-dom'
import type { FC, PropsWithChildren } from 'react'
import { systemTheme } from '@/styles'

export const AppProviders: FC<PropsWithChildren> = ({ children }) => {
      return <HelmetProvider>
          <ChakraProvider value={systemTheme}>
            <BrowserRouter>{children}</BrowserRouter>
          </ChakraProvider>
    </HelmetProvider>
}
