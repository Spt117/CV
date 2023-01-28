import "@/styles/globals.css";
import Layout from "../component/Layout.jsx";

export default function App({ Component, pageProps }) {
    return (
        <Layout>
            <div id="container-child1">
                <Component {...pageProps} />
            </div>
        </Layout>
    );
}
