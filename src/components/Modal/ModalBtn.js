import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default function ModalBtn({ title, Component }) {
    const [modal, setModal] = React.useState(false)

    const toggle = () => {

        setModal(!modal);
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
            <Modal isOpen={modal} toggle={toggle} size="lg">
                <ModalHeader className="text-uppercase d-flex justify-content-center">{title}</ModalHeader>
                <ModalBody>
                    {Component}
                    {/* {<CustomerForm />} */}
                </ModalBody>
                <ModalFooter>
                    <Button color="danger" type="button" onClick={toggle}>Cancel</Button>{' '}
                    <Button color="success" type="button" onClick={toggle}>Agregar Nuevo</Button>
                </ModalFooter>
            </Modal>
        </>
    );
}