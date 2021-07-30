import { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import PaymentForm from 'components/Forms/PaymentForm';


export const ModalPayment = ({ modal, toggle }) => {

    const addNewPayment = () => {
        alert('Agregado nuevo pago...')
    }

    return (
        <Modal isOpen={modal} toggle={toggle} backdrop={false} size="lg">
            <ModalHeader className="text-uppercase d-flex justify-content-center">
                Registrar nuevo Pago
            </ModalHeader>
            <ModalBody>
                {/* <LoanForm {...{ client, getInfoLoan, loan, setClientId }} /> */}
                <PaymentForm />
            </ModalBody>
            <ModalFooter>
                <Button className="mr-2" color="danger" type="button" onClick={toggle}>Cancel</Button>
                <Button color="success" type="button" onClick={addNewPayment}>Agregar pago</Button>
            </ModalFooter>
        </Modal>
    )
}
