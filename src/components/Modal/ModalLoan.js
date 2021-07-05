import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import LoanForm from 'components/Forms/LoanForm';


export const ModalLoan = ({ modal, toggle, client }) => {

    console.log(client);

    const addNewLoan = () => {
        alert('Nuevo Prestamo añadido')
        toggle()
    }

    return (
        <Modal isOpen={modal} toggle={toggle} backdrop={false} size="lg">
            <ModalHeader className="text-uppercase d-flex justify-content-center">
                Registrar nuevo Préstamo
            </ModalHeader>
            <ModalBody>
                {/* <CustomerForm
                    getInfoCustomer={getInfoCustomer}
                    getInfoReference={getInfoReference}
                /> */}
                <LoanForm
                // clientId={}
                />
            </ModalBody>
            <ModalFooter>
                <Button color="danger" type="button" onClick={toggle}>Cancel</Button>{' '}
                <Button color="success" type="button" onClick={addNewLoan}>Agregar Nuevo</Button>
            </ModalFooter>
        </Modal>
    )
}


