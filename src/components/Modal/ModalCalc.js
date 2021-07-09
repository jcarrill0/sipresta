import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export const ModalCalc = ({ title, children }) => {
    const [modal, setModal] = React.useState(false)

    const toggle = () => setModal(!modal);

    return (
        <>
            <Button
                color="primary ml-2 "
                onClick={toggle}
            >
                <i className="nc-icon nc-mobile mr-2 font-weight-bold" style={{ fontSize: "1rem" }} />
                Calculadora
            </Button>
            <Modal isOpen={modal} toggle={toggle} size="lg">
                <ModalHeader className="text-uppercase d-flex justify-content-center">{title}</ModalHeader>
                <ModalBody>
                    {children}
                </ModalBody>
                <ModalFooter>
                    <Button className="mr-2" color="danger" type="button" onClick={toggle}>Cancel</Button>
                    <Button color="primary" type="button" onClick={toggle}>Calcular</Button>
                </ModalFooter>
            </Modal>
        </>
    );
}
