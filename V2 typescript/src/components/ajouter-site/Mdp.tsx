import { fetchData } from "@/library/functions"
import { Dispatch, SetStateAction, useState } from "react"

export default function Mdp({ setBool }: { setBool: Dispatch<SetStateAction<boolean>> }): JSX.Element {
    const [mdp, setMdp] = useState<string>("")

    async function checkMdp(): Promise<void> {
        const response = (await fetchData("/api/mdp", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(mdp),
        })) as boolean
        setBool(response)
    }

    return (
        <>
            <input placeholder="Mot de passe" onChange={(e) => setMdp(e.target.value)} />
            <button onClick={checkMdp} className="btn">
                Valider
            </button>
        </>
    )
}
