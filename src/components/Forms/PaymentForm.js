import { useEffect, useState } from "react";
import {
    Button,
    FormGroup,
    Form,
    Input,
    Row,
    Col,
    Card,
    CardBody,
} from "reactstrap"

import { ModalListCustomers } from '../Modal/ModalListCustomers'
import { useModal } from 'hooks/useModal'


//Refactorizar pediente
const styles = {
    fielset: {
        fontSize: ".9rem",
        fontWeight: "600",
        color: "#9A9DA9",
        paddingLeft: ".2rem"
    },
    legend: { border: "1px solid #C8C8C8" }
}


function PaymentForm(props) {
    // const [customer, setCustomer] = useState(client !== undefined ? client : null)
    const [customer, setCustomer] = useState(null)

    const { modal, toggle } = useModal()

    return (
        <Card>
            <CardBody>
                <Form>
                    {/* Refactorizar crear un componente del fieldset cliente */}
                    <fieldset className="px-2 mb-2" style={styles.legend}>
                        <legend style={styles.fielset}>Información del Cliente</legend>
                        <Row form>
                            <Col md="6">
                                {/* Nota: crear un select con todo los nombres de los clientes */}
                                <FormGroup>
                                    <label>Nombre completo</label>
                                    <Input
                                        placeholder="Cliente"
                                        type="text"
                                        name="firstName"
                                        disabled
                                        value={customer ? customer.firstName : ""}
                                    />
                                </FormGroup>
                            </Col>
                            <Col md="5">
                                <FormGroup>
                                    <label>Identificación</label>
                                    <Input
                                        placeholder="Identificación"
                                        type="text"
                                        name="clienteId"
                                        disabled
                                        value={customer ? customer.numId : ""}
                                    />
                                </FormGroup>
                            </Col>
                            <Col md="1">
                                <FormGroup>
                                    <label className="invisible">Buscar</label>
                                    <Button
                                        color="danger"
                                        className="my-0"
                                        size='sm'
                                        type="button"
                                        onClick={toggle}
                                        block
                                    >
                                        <i className="nc-icon nc-badge" style={{ fontSize: "1.3rem", padding: ".25rem 0" }} />
                                    </Button>
                                </FormGroup>
                            </Col>
                        </Row>
                    </fieldset>
                    <fieldset className="px-2 mb-2" style={styles.legend}>
                        <legend style={styles.fielset}>Información de cuotas</legend>
                        <Row form>
                            <Col md="12">
                                <FormGroup>
                                    <Input
                                        placeholder="Nota:"
                                        type="textarea"
                                        name="comment"
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                    </fieldset>
                </Form>
            </CardBody>
            <ModalListCustomers modalNested={modal} toggleNested={toggle} customer={setCustomer} />
        </Card>
    )
}

export default PaymentForm
