import { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import LoanForm from 'components/Forms/LoanForm';
import { useLoanStore } from '../../store/store'
import { getCurrentDate, getDateOfPayments, loanCalculate } from '../../helpers/helpers'


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
    amortizacion: null,
    _createAt: "",
    _updateAt: "",
    _createBy: ""
}

export const ModalLoan = ({ modal, toggle, client }) => {
    const addLoan = useLoanStore(state => state.addLoan)
    const [loan, setLoan] = useState(initStateLoan)
    const [clientId, setClientId] = useState("")

    const getInfoLoan = e => {
        const { name, value } = e.target
        
        if (name === "montoCredito" || name === "cuotas" || name === "interes") {
            setLoan({ ...loan, [name]: parseFloat(value) })
        } else {
            setLoan({ ...loan, [name]: value })
        }
    }

    const datesByModalPayments = dateLoan => {
        const dateOfPayment = {
            diario: getDateOfPayments(dateLoan, 1),
            semanal: getDateOfPayments(dateLoan, 7),
            quincenal: getDateOfPayments(dateLoan, 15),
            mensual: getDateOfPayments(dateLoan, 30)
        }
        return dateOfPayment[loan.modalidadPago]
    }

    // Lista de pagos
    const createListFees = () => {
        let calculate = loanCalculate(loan.montoCredito, loan.interes, loan.cuotas)
        let auxDateLoan = getDateOfPayments(loan.fechaPrestamo, 1)
        let auxBalance = calculate.getAmountTotal()
        let listFees = []

        for (let index = 1; index <= loan.cuotas; index++) {
            let fees = {
                id: index,
                amount: calculate.getAmountFee(),
                datePayment: datesByModalPayments(auxDateLoan),
                status: "pendiente",
                interes: calculate.getAmountInteres() / loan.cuotas,
                balance: auxBalance
            }
            listFees.push(fees)
            auxDateLoan = fees.datePayment
            auxBalance -= fees.amount
        }
        return listFees
    }

    const createLoan = () => {
        if (client !== undefined) { 
            loan.clienteId = client.id 
        } else {
            loan.clienteId = clientId
        }
        loan.amortizacion = createListFees()
        loan._createAt = getCurrentDate()
        loan._updateAt = getCurrentDate()
    }

    const addNewLoan = () => {
        createLoan()
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
                <LoanForm {...{ client, getInfoLoan, loan, setClientId }} />
            </ModalBody>
            <ModalFooter>
                <Button className="mr-2" color="danger" type="button" onClick={toggle}>Cancel</Button>
                <Button color="success" type="button" onClick={addNewLoan}>Agregar Nuevo</Button>
            </ModalFooter>
        </Modal>
    )
}


