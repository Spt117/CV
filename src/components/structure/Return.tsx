import Link from "next/link"

export default function Return() {
    return (
        <Link href="/" id="retour">
            <button className="glow-on-hover">Retour</button>
        </Link>
    )
}
