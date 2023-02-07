import { useState, useEffect } from "react"

export default function useFetch(url: string) {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchData()
    }, [url])

    async function fetchData() {
        setLoading(true)
        try {
            const res = await fetch(url)
            const data = await res.json()
            setData(data)
        } catch (err) {
            console.log(err)
        } finally {
            setLoading(false)
        }
    }
}
