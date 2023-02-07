import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <>
            <Head>
                <title>Jean-Baptiste FUND</title>
                <meta
                    name="description"
                    content="Retrouvez ici mon site, avec mon portfolio, mon stack, le tout implémenté avec Next.js !"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
        </>
    );
}
