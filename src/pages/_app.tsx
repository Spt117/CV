import Layout from "@/components/structure/Layout"
import Notification from "@/components/structure/Notification"
import { store } from "@/library/redux"
import "@/styles/globals.css"
import type { AppProps } from "next/app"
import { Provider } from "react-redux"

export default function App({ Component, pageProps }: AppProps) {
    return (
        <Provider store={store}>
            <Layout>
                <div id="container-child1">
                    <Notification />
                    <Component {...pageProps} />
                </div>
            </Layout>
        </Provider>
    )
}
