import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import CustomerForm from 'components/Forms/CustomerForm';

import { useCustomerStore, useReferenceStore } from '../../store/store'


export default function ModalCustomer() {
    const addCustomer = useCustomerStore(state => state.addCustomer)
    const addReference = useReferenceStore(state => state.addReference)

    const [modal, setModal] = useState(false)
    // const [backdrop] = useState(false);

    const [customer, setCustomer] = useState({
        id: '',
        firstName: '',
        lastName: '',
        typeId: '',
        numId: '',
        nationality: '',
        telephone: '',
        mobilphone: '',
        email: '',
        gender: '',
        maritalStatus: '',
        jobOccupation: '',
        address: '',
        notes: '',
    })

    const [reference, setReference] = useState({
        id: '',
        clienteId: '',
        typeReference: '',
        firstName: '',
        lastName: '',
        phoneFirst: '',
        phoneTwo: '',
        email: ''
    })

    const getInfoCustomer = (e) => {
        setCustomer({
            ...customer,
            [e.target.name]: e.target.value
        })
    }

    const getInfoReference = (e) => {
        setReference({
            ...reference,
            [e.target.name]: e.target.value
        })
    }

    const toggle = () => {
        setModal(!modal)
    }

    const addNewCustomer = () => {
        // setCustomer({ ...customer, ['id']: 5 })
        // setReference({ ...reference, ['clienteId']: customer.id })
        customer.id = 5
        reference.clienteId = customer.id
        addCustomer(customer)
        addReference(reference)
        setModal(!modal)
    }

    return (
        <>
            <Button
                color="success"
                onClick={toggle}
            >
                <i className="nc-icon nc-simple-add mr-2 font-weight-bold" style={{ fontSize: "1rem" }} />
                Nuevo
            </Button>
            <Modal isOpen={modal} toggle={toggle} backdrop={false} size="lg">
                <ModalHeader className="text-uppercase d-flex justify-content-center">
                    Registrar nuevo cliente
                </ModalHeader>
                <ModalBody>
                    <CustomerForm
                        getInfoCustomer={getInfoCustomer}
                        getInfoReference={getInfoReference}
                    />
                </ModalBody>
                <ModalFooter>
                    <Button color="danger" type="button" onClick={toggle}>Cancel</Button>{' '}
                    <Button color="success" type="button" onClick={addNewCustomer}>Agregar Nuevo</Button>
                </ModalFooter>
            </Modal>
        </>
    );
}
