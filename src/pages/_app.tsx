import NextNprogress from 'nextjs-progressbar'

import { Provider as AuthProvider } from 'next-auth/client'
import { ApolloProvider } from '@apollo/client'
import { AppProps } from 'next/app'
import { CartProvider } from 'hooks/use-cart'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'

import GlobalStyles from 'styles/global'
import theme from 'styles/theme'
import { useApollo } from 'utils/apollo'
import { WishlistProvider } from 'hooks/use-wishlist'

function App({ Component, pageProps }: AppProps) {
  const client = useApollo(pageProps.initialApolloState)

  return (
    <AuthProvider session={pageProps.session}>
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <CartProvider>
            <WishlistProvider>
              <Head>
                <title>Won Games</title>
                <link rel="shortcut icon" href="/img/icon-512.png" />
                <link rel="apple-touch-icon" href="/img/icon-512.png" />
                <link rel="manifest" href="/manifest.json" />
                <meta name="theme-color" content="#06092B" />
                <meta
                  name="description"
                  content="The best gaming e-commerce store on the planet!"
                />
              </Head>
              <GlobalStyles />
              <NextNprogress
                color="#F231A5"
                startPosition={0.3}
                stopDelayMs={200}
                height={5}
              />
              <Component {...pageProps} />
            </WishlistProvider>
          </CartProvider>
        </ThemeProvider>
      </ApolloProvider>
    </AuthProvider>
  )
}

export default App
