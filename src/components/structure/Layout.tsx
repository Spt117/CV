import { fetchData } from "@/library/functions"
import { Site } from "@/library/interfaces"
import { mySites } from "@/library/redux"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import Menu from "./Menu"

export default function Layout({ children }: { children: React.ReactNode }) {
    const dispatch = useDispatch()

    useEffect(() => {
        init()
    }, [])

    async function init() {
        const sites = (await fetchData("/api/sites")) as Site[]
        dispatch(mySites(sites))
    }

    return (
        <>
            <Menu />
            <main>{children}</main>
        </>
    )
}
