import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { mySites } from "@/redux/store.js";

export default function InitStore() {
    const dispatch = useDispatch();

    useEffect(() => {
        getSites();
    }, []);

    async function getSites() {
        const api = await fetch("/api/sites");
        const res = await api.json();
        dispatch(mySites(res.reverse()));
    }
}
