import Head from "next/head"
import Contact from "../components/contact/Contact"

export default (): JSX.Element => {
    return (
        <>
            <Head>
                <title>Contactez-moi | Jean-Baptiste Fund</title>
                <meta name="description" content="Retrouvez ici mon formulaire de contact pour me joindre !" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Contact />
        </>
    )
}
