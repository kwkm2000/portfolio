import { createGlobalStyle } from 'styled-components'
import { Reset } from 'styled-reset'

const Global = createGlobalStyle`
    body {
        background-color: red;
    }
`

export const GlobalStyle = () => (
    <>
        <Reset />
        <Global />
    </>
)