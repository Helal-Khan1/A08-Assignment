import axios from "axios"
import { useEffect, useState } from "react"

const useDataHook = () => {
    const [setData, setSetData] = useState([])
    const [loding, setLodintg] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        setLodintg(true)
        axios('/appsData.json')
            .then(res => setSetData(res.data))
            .catch(rorr => setError(rorr))
            .finally(() => setLodintg(false))


    }, [])

    return { setData, loding, error }
}


export default useDataHook

