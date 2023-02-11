import { useState } from "react"
import Mdp from "./Mdp"
import AjoutSite from "./AjoutSite"
import SupprimerSite from "./SupprimerSite"
import UpdateSite from "./UpdateSite"

export default function GestionSites(): JSX.Element {
    const [bool, setBool] = useState<boolean>(false)

    return (
        <div className="child1" id="myForm">
            <h1>Gérer mon Portfolio</h1>
            {!bool && <Mdp setBool={setBool} />}
            {bool && (
                <>
                    <AjoutSite bool={bool} />
                    <SupprimerSite />
                    <UpdateSite />
                </>
            )}
        </div>
    )
}
