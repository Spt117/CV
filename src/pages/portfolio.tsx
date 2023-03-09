import Portfolio from "@/components/portfolio/Portfolio"
import Head from "next/head"

export default function (): JSX.Element {
    return (
        <>
            <Head>
                <title>Portfolio | Jean-Baptiste Fund</title>
                <meta name="description" content="Retrouvez ici mon portfolio !" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Portfolio />
        </>
    )
}
