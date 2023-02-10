import { Html, Head, Main, NextScript } from "next/document"

export default function Document(): JSX.Element {
    return (
        <Html lang="en">
            <Head>
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
            </Head>
            <body id="blue">
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
