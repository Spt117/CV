import Head from "next/head"
import AboutMe from "@/components/index/AboutMe"
import Stack from "@/components/index/Stack"
import Social from "@/components/index/Social"

export default function Home(): JSX.Element {
    return (
        <>
            <Head>
                <title>Jean-Baptiste Fund | Développeur Web FullStack</title>
                <meta
                    name="description"
                    content="Retrouvez ici mon site, avec mon portfolio, mon stack, le tout implémenté avec Next.js !"
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <div className="child1" id="AboutMe">
                <AboutMe />
                <Stack />
                <Social />
            </div>
        </>
    )
}
