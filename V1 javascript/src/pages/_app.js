import "@/styles/globals.css";
import { Provider } from "react-redux";
import { store } from "@/redux/store.js";
import Layout from "@/component/Layout.jsx";

export default function App({ Component, pageProps }) {
    return (
        <Provider store={store}>
            <Layout>
                <div id="container-child1">
                    <Component {...pageProps} />
                </div>
            </Layout>
        </Provider>
    );
}
