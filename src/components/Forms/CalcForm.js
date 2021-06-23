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

const CalcForm = () => {
    return (
        <Card>
            <CardBody>
                <Form>
                    <Row form>
                        <Col md="5">
                            <FormGroup>
                                <label>Monto del Préstamo</label>
                                <Input
                                    placeholder="Monto"
                                    type="number"
                                    name="monto"
                                />
                            </FormGroup>
                        </Col>
                        <Col md="4">
                            <FormGroup>
                                <label>N° Cuotas</label>
                                <Input
                                    placeholder="Cuotas"
                                    type="number"
                                    name="cuotas"
                                />
                            </FormGroup>
                        </Col>
                        <Col md="3">
                            <FormGroup>
                                <label>Interés %</label>
                                <Input
                                    placeholder="% de interés"
                                    type="number"
                                    name="interes"
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row form>
                        <Col md="6">
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
                        <Col md="6">
                            <FormGroup>
                                <label>Fecha Préstamo</label>
                                <Input
                                    placeholder=""
                                    type="date"
                                    name="startDate"
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                </Form>
            </CardBody>
        </Card>
    )
}

export default CalcForm
