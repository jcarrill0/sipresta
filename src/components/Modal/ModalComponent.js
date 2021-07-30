import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export const ModalComponent = ({ children, ...props }) => {
    return (
        <>
            <Button
                color="success"
                onClick={props.toggle}
            >
                <i className="nc-icon nc-simple-add mr-2 font-weight-bold" style={{ fontSize: "1rem" }} />
               props.openBtnLabel
            </Button>
            <Modal isOpen={props.modal} toggle={props.toggle} backdrop={false} size="lg">
                <ModalHeader className="text-uppercase d-flex justify-content-center">
                    {props.title}
                </ModalHeader>
                <ModalBody>
                    {children}
                </ModalBody>
                <ModalFooter>
                    <Button className="mr-2" color="danger" type="button" onClick={props.toggle}>Cancel</Button>
                    <Button color="primary" type="button" onClick={props.handleAction}>props.actionBtnLabel</Button>
                </ModalFooter>
            </Modal>
        </>
    )
}
