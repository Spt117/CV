import { useDispatch } from "react-redux";
import { mySites } from "@/redux/actions.js";
import { useEffect } from "react";

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
