import { useState, useEffect } from "react"

export default function useFetch(url: string, objet?: object) {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetchData()
    }, [url])

    const fetchData = async () => {
        setLoading(true)
        try {
            const res = await fetch(url, objet)
            const data = await res.json()
            setData(data)
        } catch (err: any) {
            setError(err)
        } finally {
            setLoading(false)
        }
    }

    return { data, loading, error }
}
