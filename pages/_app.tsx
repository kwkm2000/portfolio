import { AppProps } from 'next/app'
import Head from 'next/head'
import { GlobalStyle } from '../components/GlobalStyle'

const App = ({ Component, pageProps }: AppProps) =>
    (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, shrink-to-fit=no"
                />
                <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
                {/* <link rel="shortcut icon" href="/favicon.png" key="shortcutIcon" /> */}
                {/* <link rel="manifest" href="/manifest.json" /> */}
            </Head>
            <GlobalStyle />
            <Component {...pageProps} />
        </>
    )

export default App