import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import CustomerForm from 'components/Forms/CustomerForm';

import { useCustomerStore } from '../../store/store'


const initStateCustomer = {
    // telephone: '',
    // mobilphone: '',
    // address: '',
    firstName: '',
    lastName: '',
    typeId: '',
    numId: '',
    nationality: '',
    email: '',
    gender: '',
    maritalStatus: '',
    jobOccupation: '',
    notes: '',
    phones: [],
    references: [],
    loans: [],
    addresses: [],
    create_at: '',
    update_at: '',
    create_by: ''
}

const initStateReference = {
    // clienteId: '',
    // phoneFirst: '',
    // phoneTwo: '',
    typeReference: '',
    firstName: '',
    lastName: '',
    phones: [],
    email: ''
}

export const ModalCustomer = () => {
    const addCustomer = useCustomerStore(state => state.addCustomer)
    // const addReference = useReferenceStore(state => state.addReference)

    const [modal, setModal] = useState(false)
    const codeArea = '+506';
    const PHONES_CUSTOMERS = {
        phone1: { code: codeArea, number: '' },
        phone2: { code: codeArea, number: '' }
    }
    const PHONES_REFERENCES = {
        phone1: { code: codeArea, number: '' },
        phone2: { code: codeArea, number: '' }
    }

    const [customer, setCustomer] = useState(initStateCustomer)
    const [reference, setReference] = useState(initStateReference)
    const [phoneCustomer, setPhoneCustomer] = useState(PHONES_CUSTOMERS)
    const [phoneRef, setPhoneRef] = useState(PHONES_REFERENCES)
    const [addresses, setAddresses] = useState({})

    const toggle = () => setModal(!modal)

    const getInfoCustomer = (e) => {
        if (e.target.name === 'phone1' || e.target.name === 'phone2') {
            setPhoneCustomer({
                ...phoneCustomer,
                [e.target.name]: { ...phoneCustomer[e.target.name], number: e.target.value }
            })
        } else if (e.target.name === 'address') {
            setAddresses({
                ...addresses,
                [e.target.name]: e.target.value
            })
        } else {
            setCustomer({
                ...customer,
                [e.target.name]: e.target.value
            })
        }

    }

    const getInfoReference = (e) => {
        if (e.target.name === 'phone1' || e.target.name === 'phone2') {
            setPhoneRef({
                ...phoneRef,
                [e.target.name]: { ...phoneRef[e.target.name], number: e.target.value }
            })
        } else {
            setReference({
                ...reference,
                [e.target.name]: e.target.value
            })
        }
    }

    const addNewCustomer = () => {
        // reference.clienteId = customer.numId
        customer.addresses.push(addresses)
        Object.entries(phoneRef).forEach(([key, value]) => {
            reference.phones.push(value)
        })
        Object.entries(phoneCustomer).forEach(([key, value]) => {
            customer.phones.push(value)
        })
        customer.references.push(reference)
        addCustomer(customer)
        setCustomer({ ...initStateCustomer })
        toggle()
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

