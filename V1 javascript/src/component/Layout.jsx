import Menu from "./Menu.jsx";
import { mySites } from "@/redux/store.js";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function Layout({ children }) {
    const dispatch = useDispatch();

    useEffect(() => {
        getSites();
    }, []);

    async function getSites() {
        const api = await fetch("/api/sites");
        const res = await api.json();
        dispatch(mySites(res.reverse()));
    }
    return (
        <>
            <Menu />
            <main>{children}</main>
        </>
    );
}
