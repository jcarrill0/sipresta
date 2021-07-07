import { useState } from 'react'

export const useModal = (initialMode = false) => {
    const [modal, setModal] = useState(initialMode)
    const toggle = () => setModal(!modal)
    return { modal, setModal, toggle }
}
