import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import CustomerForm from 'components/Forms/CustomerForm';

import { useCustomerStore } from '../../store/store'

import { getCurrentDate } from '../../helpers/helpers'

// Interes anual 25% a 60 meses 
// Saldo de la visa: 1.125.381
// 36050 con el seguro pago de julio 46650 solamente
// abono extraordinario
// 21 julio
// pagar hoy 8 usd = 5500
// 2295-9075

// Interes anual 25% a 60 meses 
// saldo de la mastercard: 620200
// 18300 primer pago julio 23300
// pagar hoy 20mil

const initStateCustomer = {
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
    addresses: [],
    _createAt: '',
    _updateAt: '',
    _createAy: ''
}

const initStateReference = {
    typeReference: '',
    firstName: '',
    lastName: '',
    phones: [],
    email: ''
}

export const ModalCustomer = () => {
    const addCustomer = useCustomerStore(state => state.addCustomer)

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

    const getInfoCustomer = e => {
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

    const getInfoReference = e => {
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
        addDataExtra()
        addCustomer(customer)
        cleanStates()
        toggle()
    }

    // Completamos phone, references, addresses and dates
    const addDataExtra = () => {
        Object.entries(phoneRef).forEach(([key, value]) => {
            reference.phones.push(value)
        })
        Object.entries(phoneCustomer).forEach(([key, value]) => {
            customer.phones.push(value)
        })
        customer.addresses.push(addresses)
        customer.references.push(reference)
        customer.create_at = getCurrentDate()
        customer.update_at = getCurrentDate()
    }

    const cleanStates = () => {
        setCustomer({ ...initStateCustomer })
        setAddresses({})
        setPhoneCustomer({ ...PHONES_CUSTOMERS })
        setPhoneRef({ ...PHONES_REFERENCES })
        setReference({ initStateReference })
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
                        {...{ getInfoCustomer, getInfoReference }}
                    />
                </ModalBody>
                <ModalFooter>
                    <Button className="mr-3" color="danger" type="button" onClick={toggle}>Cancel</Button>
                    <Button color="success" type="button" onClick={addNewCustomer}>Agregar Nuevo</Button>
                </ModalFooter>
            </Modal>
        </>
    );
}

