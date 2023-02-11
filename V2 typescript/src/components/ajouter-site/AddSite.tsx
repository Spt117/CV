import { useState } from "react"
import Mdp from "./Mdp"
import SiteComponent from "./SiteComponent"

export default function AddSite(): JSX.Element {
    const [bool, setBool] = useState<boolean>(false)

    return (
        <div className="child1" id="myForm">
            <h1>Ajouter un site à mon Portfolio</h1>
            {!bool && <Mdp setBool={setBool} />}
            {bool && <SiteComponent bool={bool} />}
        </div>
    )
}
