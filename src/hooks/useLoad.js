import { useEffect, useState } from 'react'

export const useLoad = (initialMode = false) => {
    const [loading, setLoading] = useState(initialMode)
    
    const tableLoading = () => {
        setTimeout(() => {
            setLoading(false)
        }, 2800);
        setLoading(true)
    }

    useEffect(() => {
        tableLoading()
    }, [])

    return loading 
}