import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import CustomerForm from 'components/Forms/CustomerForm';

import { useCustomerStore, useReferenceStore } from '../../store/store'


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

export default function ModalCustomer() {
    const addCustomer = useCustomerStore(state => state.addCustomer)
    // const addReference = useReferenceStore(state => state.addReference)

    const [modal, setModal] = useState(false)

    const [customer, setCustomer] = useState(initStateCustomer)
    const [reference, setReference] = useState(initStateReference)
    const [phone1Customer, setPhone1Customer] = useState({ code: '+506' })
    const [phone2Customer, setPhone2Customer] = useState({ code: '+506' })
    const [phone1Ref, setPhone1Ref] = useState({ code: '+506' })
    const [phone2Ref, setPhone2Ref] = useState({ code: '+506' })
    const [addresses, setAddresses] = useState({})

    const getInfoCustomer = (e) => {
        if (e.target.name === 'phone1') {
            setPhone1Customer({
                ...phone1Customer,
                number: e.target.value
            })

        } else if (e.target.name === 'phone2') {
            setPhone2Customer({
                ...phone2Customer,
                number: e.target.value
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
        if (e.target.name === 'phone1') {
            setPhone1Ref({
                ...phone1Ref,
                number: e.target.value
            })
        } else if (e.target.name === 'phone2') {
            setPhone2Ref({
                ...phone2Ref,
                number: e.target.value
            })
        } else {
            setReference({
                ...reference,
                [e.target.name]: e.target.value
            })
        }
    }

    const toggle = () => {
        setModal(!modal)
    }

    const addNewCustomer = () => {
        // reference.clienteId = customer.numId
        reference.phones.push(phone1Ref)
        reference.phones.push(phone2Ref)
        customer.addresses.push(addresses)
        customer.phones.push(phone1Customer)
        customer.phones.push(phone2Customer)
        customer.references.push(reference)
        console.log(customer);
        // addCustomer(customer)
        // addReference(reference)
        // setCustomer({ ...initStateCustomer })
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

