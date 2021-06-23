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

const LoanForm = () => {
    return (
        <Card>
            <CardBody>
                <Form>
                    <Row form>
                        <Col md="6">
                            <FormGroup>
                                <label>Cliente</label>
                                <Input
                                    placeholder="Cliente"
                                    type="text"
                                    name="cliente"
                                />
                            </FormGroup>
                        </Col>
                        <Col md="3">
                            <FormGroup>
                                <label>Monto a Prestar</label>
                                <Input
                                    placeholder="Monto"
                                    type="number"
                                    name="monto"
                                />
                            </FormGroup>
                        </Col>
                        <Col md="3">
                            <FormGroup>
                                <label>Forma de Pago</label>
                                <Input type="select" name="select">
                                    <option selected disabled>Forma de Pago</option>
                                    <option>Mesual</option>
                                    <option>Quincenal</option>
                                    <option>Semanal</option>
                                    <option>Diario</option>
                                </Input>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row form>
                        <Col md="3">
                            <FormGroup>
                                <label>Interés(%)</label>
                                <Input
                                    placeholder="% de interés"
                                    type="number"
                                    name="interes"
                                />
                            </FormGroup>
                        </Col>
                        <Col md="3">
                            <FormGroup>
                                <label>Cuotas</label>
                                <Input
                                    placeholder="Cuotas"
                                    type="number"
                                    name="cuotas"
                                />
                            </FormGroup>
                        </Col>
                        <Col md="3">
                            <FormGroup>
                                <label>Fecha Préstamo</label>
                                <Input
                                    placeholder=""
                                    type="date"
                                    name="startDate"
                                />
                            </FormGroup>
                        </Col>
                        <Col md="3">
                            <FormGroup>
                                <label>Fecha Primer Pago</label>
                                <Input
                                    placeholder=""
                                    type="date"
                                    name="firstPaymentDate"
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row form>
                        <Col md="12">
                            <FormGroup>
                                {/* <label>Observaciones</label> */}
                                <Input
                                    placeholder="Observaciones"
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

export default LoanForm
