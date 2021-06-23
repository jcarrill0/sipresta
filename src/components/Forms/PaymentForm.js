import React from 'react'
import {
    // TabContent,
    // TabPane,
    // Nav,
    // NavItem,
    // NavLink,
    FormGroup,
    Form,
    Input,
    Row,
    Col,
    Card,
    CardBody,
} from "reactstrap";


function PaymentForm() {
    return (
        <Card>
            <CardBody>
                <Form>
                    <Row form>
                        <Col md="8">
                            <FormGroup>
                                <label>Cliente</label>
                                <Input
                                    placeholder="Cliente"
                                    type="text"
                                    name="cliente"
                                />
                            </FormGroup>
                        </Col>
                        <Col md="4">
                            <FormGroup>
                                <label>Fecha de Pago</label>
                                <Input
                                    placeholder=""
                                    type="date"
                                    name="paymentDate"
                                />
                            </FormGroup>
                        </Col>
                    </Row>
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
                </Form>
            </CardBody>
        </Card>
    )
}

export default PaymentForm
