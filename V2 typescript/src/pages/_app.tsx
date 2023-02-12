import Layout from "@/components/structure/Layout"
import Notification from "@/components/structure/Notification"
import "@/styles/globals.css"
import type { AppProps } from "next/app"

export default function App({ Component, pageProps }: AppProps) {
    return (
        <Layout>
            <div id="container-child1">
                <Notification />
                <Component {...pageProps} />
            </div>
        </Layout>
    )
}
