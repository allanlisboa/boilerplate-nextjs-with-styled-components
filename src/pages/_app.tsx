import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'

import GlobalStyles from 'styles/global'
import theme from 'styles/theme'
import { ApiProvider } from 'providers/api'
import { ExampleProvider } from 'providers/example'

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <ApiProvider>
        <ExampleProvider>
          <Head>
            <title>Boilerplae NextJS with styled components</title>
            <link rel="shortcut icon" href="assets/icon-192.png" />
            <link rel="apple-touch-icon" href="assets/icon-512.png" />
            <link rel="manifest" href="/manifest.json" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
            />
            <meta charSet="utf-8" />
            <meta
              name="description"
              content="A simple project starter to work with TypeScript, React, NextJS and Styled Components"
            />
          </Head>
          <GlobalStyles />
          <Component {...pageProps} />
        </ExampleProvider>
      </ApiProvider>
    </ThemeProvider>
  )
}

export default App
