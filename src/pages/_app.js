import "@/styles/globals.css";
import Layout from "../component/Layout.jsx";

export default function App({ Component, pageProps }) {
    return (
        <div className="child">
            <Layout />
            <div id="container-child1">
                <Component {...pageProps} />
            </div>
        </div>
    );
}
