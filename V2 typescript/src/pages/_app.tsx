import Layout from "@/components/Layout"
import "@/styles/globals.css"
import type { AppProps } from "next/app"

export default function App({ Component, pageProps }: AppProps) {
    return (
        <Layout>
            <div id="container-child1">
                <Component {...pageProps} />
            </div>
        </Layout>
    )
}
