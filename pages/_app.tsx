import * as React from 'react'
import { ThemeProvider } from '@ds-pack/components'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>DS Pack</title>
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
