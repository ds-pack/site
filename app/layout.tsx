import { themeClass, Heading } from '@ds-pack/components'
import '@ds-pack/components/dist/vars.css'
import '@ds-pack/components/dist/reset.css'
import { Metadata } from 'next'

import { well } from '@styles/app/root'

export default function Layout({ children }) {
  return (
    <html lang="en-US" className={themeClass}>
      <body>
        <main className={well}>
          <header>
            <Heading is="h1" variant="h1">
              DS Pack
            </Heading>
          </header>
          <section>{children}</section>
          <footer></footer>
        </main>
      </body>
    </html>
  )
}

export let metadata: Metadata = {
  title: 'DS Pack Docs',
  icons: [
    {
      rel: 'shortcut icon',
      url: '/favicon.ico',
    },
  ],
}
