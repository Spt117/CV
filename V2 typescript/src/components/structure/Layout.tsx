import { fetchData, init } from "@/library/functions"
import { Site } from "@/library/interfaces"
import { mySites } from "@/library/redux"
import { AnyAction, Dispatch } from "@reduxjs/toolkit"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import Menu from "./Menu"

export default function Layout({ children }: { children: React.ReactNode }) {
    const dispatch: Dispatch<AnyAction> = useDispatch()

    useEffect(() => {
        init()
    }, [])

    async function init(): Promise<void> {
        const sites: Site[] = (await fetchData("/api/sites")) as Site[]
        dispatch(mySites(sites))
    }

    return (
        <>
            <Menu />
            <main>{children}</main>
        </>
    )
}
