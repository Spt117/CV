import "@/styles/globals.css";
import { Provider } from "react-redux";
import Layout from "../component/Layout.jsx";
import { store } from "@/redux/store.js";
import InitStore from "@/component/InitStore.jsx";

export default function App({ Component, pageProps }) {
    return (
        <Provider store={store}>
            <InitStore />
            <Layout>
                <div id="container-child1">
                    <Component {...pageProps} />
                </div>
            </Layout>
        </Provider>
    );
}
