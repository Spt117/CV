import "@/styles/globals.css";
import Layout from "../component/Layout.jsx";

export default function App({ Component, pageProps }) {
    return (
        <div className="child">
            <Layout />
            <Component {...pageProps} />
        </div>
    );
}
