import { useState } from 'react'

export const useLoad = (initialMode = false) => {
    const [loading, setLoading] = useState(initialMode)
    const tableLoading = () => {
        setTimeout(() => {
            setLoading(initialMode)
        }, 2000);
    }
    return { loading, setLoading }
}