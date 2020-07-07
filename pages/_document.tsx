import NextDocument, { Html, Main, NextScript } from 'next/document'

type Props = {}

class Document extends NextDocument<Props> {
    render() {
        return (
            <Html lang="ja">
                <body>
                    <header>
                        ヘッダー
                    </header>
                    <div className="wrapper">
                        <Main />
                    </div>
                    <NextScript />
                    <footer>
                        フッター
                    </footer>
                </body>
            </Html>
        )
    }
}

export default Document