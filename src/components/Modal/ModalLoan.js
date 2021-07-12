import { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import LoanForm from 'components/Forms/LoanForm';
import { useLoanStore } from '../../store/store'
import { getCurrentDate, getDateOfPayments } from '../../helpers/helpers'


const initStateLoan = {
    clienteId: "",
    montoCredito: null,
    cuotas: null,
    interes: null,
    modalidadPago: "",
    fechaPrestamo: "",
    fechaPago: "",
    estado: "pendiente",
    nota: "",
    amortizacion: [],
    _createAt: "",
    _updateAt: "",
    _createBy: ""
}

const fees = {
    id: 0,
    datePayment: "",
    amount: 0,
    interes: 0,
    status: "",
    balance: 0
}

export const ModalLoan = ({ modal, toggle, client }) => {
    const addLoan = useLoanStore(state => state.addLoan)
    const [loan, setLoan] = useState(initStateLoan)

    const getInfoLoan = e => {
        const { name, value } = e.target

        if (name === "montoCredito" || name === "cuotas" || name === "interes") {
            setLoan({ ...loan, [name]: parseFloat(value) })
        } else {
            setLoan({ ...loan, [name]: value })
        }

    }

    const addNewLoan = () => {
        loan.clienteId = client.id
        loan.create_at = getCurrentDate()
        loan.update_at = getCurrentDate()
        addLoan(loan)
        setLoan({ ...initStateLoan })
        toggle()
    }

    const generateFees = () => {
        // Aquí generamos la lógica de los objetos con los datos de la amortización 
    }

    return (
        <Modal isOpen={modal} toggle={toggle} backdrop={false} size="lg">
            <ModalHeader className="text-uppercase d-flex justify-content-center">
                Registrar nuevo Préstamo
            </ModalHeader>
            <ModalBody>
                <LoanForm {...{ client, getInfoLoan, loan }} />
            </ModalBody>
            <ModalFooter>
                <Button className="mr-2" color="danger" type="button" onClick={toggle}>Cancel</Button>
                <Button color="success" type="button" onClick={addNewLoan}>Agregar Nuevo</Button>
            </ModalFooter>
        </Modal>
    )
}


