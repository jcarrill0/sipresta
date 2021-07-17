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

    const datesByModalPayments = (dateLoan) => {
        let date = ""

        if (loan.modalidadPago === "diario") {
            date = getDateOfPayments(dateLoan, 1)
        } else if (loan.modalidadPago === "semanal") {
            date = getDateOfPayments(dateLoan, 7)
        } else if (loan.modalidadPago === "quincenal") {
            date = getDateOfPayments(dateLoan, 15)
        } else {
            date = getDateOfPayments(dateLoan, 30)
        }

        return date
    }

    // Aquí generamos la lógica de los objetos con los datos de la amortización 
    const createListFees = () => {
        // let fees = { id: 0, datePayment: "", amount: 0, interes: 0, status: "pendiente", balance: 0 }
        let auxDateLoan = getDateOfPayments(loan.fechaPrestamo, 1)
        let listFees = []

        for (let index = 1; index <= loan.cuotas; index++) {
            let fees = { 
                id: index, 
                datePayment: datesByModalPayments(auxDateLoan), 
                amount: 0, 
                interes: 0, 
                status: "pendiente", 
                balance: 0 
            }
            listFees.push(fees)
            auxDateLoan = fees.datePayment
        }
        return listFees
    }

    const addNewLoan = () => {
        if (client !== undefined) { loan.clienteId = client.id }
        loan.amortizacion = createListFees()
        loan.create_at = getCurrentDate()
        loan.update_at = getCurrentDate()
        addLoan(loan)
        setLoan({ ...initStateLoan })
        toggle()
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


