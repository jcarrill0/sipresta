import React from 'react'
import {
    FormGroup,
    Form,
    Input,
    Row,
    Col,
    Card,
    CardBody,
} from "reactstrap";

// import { useCustomerStore } from '../../store/store'


const LoanForm = ({ client, getInfoLoan, loan }) => {
    // const customerList = useCustomerStore(state => state.customerList)

    const changeDatos = e => getInfoLoan(e)

    return (
        <Card>
            <CardBody>
                <Form>
                    <Row form>
                        <Col md="6">
                            {/* Nota: crear un select con todo los nombres de los clientes */}
                            <FormGroup>
                                <label>Nombre cliente</label>
                                <Input
                                    placeholder="Cliente"
                                    type="text"
                                    name="cliente"
                                    disabled
                                    value={client.firstName || ""}
                                    onChange={e => changeDatos(e)}
                                />
                            </FormGroup>
                        </Col>
                        <Col md="3">
                            <FormGroup>
                                <label>Monto a Prestar</label>
                                <Input
                                    placeholder="Monto"
                                    type="number"
                                    name="montoCredito"
                                    value={loan.montoCredito}
                                    onChange={e => changeDatos(e)}
                                />
                            </FormGroup>
                        </Col>
                        <Col md="3">
                            <FormGroup>
                                <label>Forma de Pago</label>
                                <Input
                                    defaultValue=""
                                    name="modalidadPago"
                                    type="select"
                                    onChange={e => changeDatos(e)}
                                    value={loan.modalidadPago}
                                >
                                    <option value="" disabled>Forma de Pago</option>
                                    <option value="mensual">Mesual</option>
                                    <option value="quincenal">Quincenal</option>
                                    <option value="semanal">Semanal</option>
                                    <option value="diario">Diario</option>
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
                                    value={loan.interes}
                                    onChange={e => changeDatos(e)}
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
                                    value={loan.cuotas}
                                    onChange={e => changeDatos(e)}
                                />
                            </FormGroup>
                        </Col>
                        <Col md="3">
                            <FormGroup>
                                <label>Fecha Préstamo</label>
                                <Input
                                    placeholder=""
                                    type="date"
                                    name="fechaPrestamo"
                                    value={loan.fechaPrestamo}
                                    onChange={e => changeDatos(e)}
                                />
                            </FormGroup>
                        </Col>
                        <Col md="3">
                            <FormGroup>
                                <label>Fecha Primer Pago</label>
                                <Input
                                    placeholder=""
                                    type="date"
                                    name="fechaPago"
                                    value={loan.fechaPago}
                                    onChange={e => changeDatos(e)}
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
                                    name="nota"
                                    value={loan.nota}
                                    onChange={e => changeDatos(e)}
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
