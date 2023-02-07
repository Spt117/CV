import { Background } from "@/components/Background";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <Background>
            <div id="container-child1">
                <Component {...pageProps} />
            </div>
        </Background>
    );
}
