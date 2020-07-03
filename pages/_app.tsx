import { AppProps } from 'next/app'
import Head from 'next/head'

const App = ({ Component, pageProps }: AppProps) =>
    (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, shrink-to-fit=no"
                />
                <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
            </Head>
            <header>
                ヘッダー
            </header>
            <div className="wrapper">
                <Component {...pageProps} />
            </div>
            <footer>
                フッター
            </footer>
        </>
    )

export default App