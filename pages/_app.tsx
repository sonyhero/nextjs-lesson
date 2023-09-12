import type { AppProps } from 'next/app'
import { ReactElement, ReactNode, useState } from 'react'
import { NextPage } from 'next'
import { Hydrate, QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { useLoader } from '../assets/hooks/useLoader'
import '../styles/nprogress.css'

export type NextPageWithLayout<P = {}> = NextPage<P> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  useLoader()
  const [queryClient] = useState(() => new QueryClient())

  const getLayout = Component.getLayout ?? ((page) => page)

  return getLayout(
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Component {...pageProps} />
      </Hydrate>
    </QueryClientProvider>
  )
}
