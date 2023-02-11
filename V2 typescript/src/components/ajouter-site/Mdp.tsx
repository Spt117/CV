import { postRequest } from "@/library/class"
import { fetchData } from "@/library/functions"
import { Dispatch, SetStateAction, useState } from "react"

export default function Mdp({ setBool }: { setBool: Dispatch<SetStateAction<boolean>> }): JSX.Element {
    const [mdp, setMdp] = useState<string>("")

    async function checkMdp(): Promise<void> {
        const response: boolean = (await fetchData("/api/mdp", new postRequest(mdp))) as boolean
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
