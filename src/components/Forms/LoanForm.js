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
} from "reactstrap";


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

const LoanForm = ({ client, getInfoLoan, loan, setClientId }) => {
    
    const [customer, setCustomer] = useState(client !== undefined ? client : null)

    const { modal, toggle } = useModal()

    const changeDatos = e => getInfoLoan(e)

    useEffect(() => {
        const getCustomer = () => customer && setClientId(customer.id)
        getCustomer()
    }, [setClientId, customer])

    return (
        <Card>
            <CardBody>
                <Form>
                    {/* Refactorizar crear un componente del fieldset cliente */}
                    <fieldset className="px-2 mb-2" style={styles.legend}>
                        <legend style={styles.fielset}>Información del Cliente</legend>
                        <Row form>
                            <Col md={6}>
                                {/* Nota: crear un select con todo los nombres de los clientes */}
                                <FormGroup>
                                    <label>Nombre completo</label>
                                    <Input
                                        placeholder="Cliente"
                                        type="text"
                                        name="firstName"
                                        disabled
                                        value={customer ? customer.firstName : ""}
                                        // onChange={e => changeDatos(e)}
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={5}>
                                <FormGroup>
                                    <label>Identificación</label>
                                    <Input
                                        placeholder="Identificación"
                                        type="text"
                                        name="clienteId"
                                        disabled
                                        value={customer ? customer.numId : ""}
                                        // onChange={e => changeDatos(e)}
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={1}>
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
                    <fieldset className="px-2 mt-3" style={styles.legend}>
                        <legend style={styles.fielset}>Información del Crédito</legend>
                        <Row form>
                            <Col md={4}>
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
                            <Col md={4}>
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
                            <Col md={4}>
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
                        </Row>
                        <Row form>
                            <Col md={4}>
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
                            <Col md={4}>
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
                            <Col md={4}>
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
                            <Col md={12}>
                                <FormGroup>
                                    {/* <label>Observaciones</label> */}
                                    <Input
                                        placeholder="Observaciones"
                                        type="textarea"
                                        name="nota"
                                        // value={loan.nota}
                                        onChange={e => changeDatos(e)}
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                    </fieldset>
                </Form>
            </CardBody>
            <ModalListCustomers 
                modalNested={modal} 
                toggleNested={toggle} 
                customer={setCustomer} 
            />
        </Card>
    )
}

export default LoanForm
