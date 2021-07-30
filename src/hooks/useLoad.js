import { useState } from 'react'

export const useLoad = (initialMode = false) => {
    const [loading, setLoading] = useState(initialMode)
    // const tableLoading = (estado) => {
    //     setTimeout(() => {
    //         setLoading(estado)
    //     }, 3000)
    // }
    return { loading, setLoading }
}