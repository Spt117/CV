import Head from "next/head";
import AboutMe from "@/components/AboutMe";
import Stack from "@/components/Stack";
import Social from "@/components/Social";

export default function Home(): JSX.Element {
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
            <div className="child1" id="AboutMe">
                <AboutMe />
                <Stack />
                <Social />
            </div>
        </>
    );
}
