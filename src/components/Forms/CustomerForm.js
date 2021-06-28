import React, { useState } from 'react'
import {
    TabContent,
    TabPane,
    Nav,
    NavItem,
    NavLink,
    FormGroup,
    Form,
    Input,
    Row,
    Col,
    Card,
    CardBody,
} from "reactstrap";


const PersonalInfo = ({ getDataPersonal }) => {

    const changeDatos = e => getDataPersonal(e)

    return (
        <Card>
            <CardBody>
                <Form>
                    <Row form>
                        <Col md="5">
                            <FormGroup>
                                <label>Nombres</label>
                                <Input
                                    placeholder="Nombres"
                                    type="text"
                                    name="firstName"
                                    // value={datos.firstName}
                                    onChange={e => changeDatos(e)}
                                />
                            </FormGroup>
                        </Col>
                        <Col md="7">
                            <FormGroup>
                                <label>Apellidos</label>
                                <Input
                                    placeholder="Apellidos"
                                    type="text"
                                    name="lastName"
                                    // value={datos.lastName}
                                    onChange={e => changeDatos(e)}
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row form>
                        <Col md="4">
                            <FormGroup>
                                <label>Tipo Identidad</label>
                                <Input type="select" name="typeId" onChange={e => changeDatos(e)}>
                                    <option selected disabled>Tipo Identidad</option>
                                    <option value='fisica' >Persona Física</option>
                                    <option value='juridica' >Persona Jurídica</option>
                                    <option value='passaporte' >Pasaporte</option>
                                    <option value='dimex' >DIMEX</option>
                                </Input>
                            </FormGroup>
                        </Col>
                        <Col md="5">
                            <FormGroup>
                                <label>Num. Identidad</label>
                                <Input
                                    placeholder="Num. Identidad"
                                    type="text"
                                    name="numId"
                                    // value={datos.numId}
                                    onChange={e => changeDatos(e)}
                                />
                            </FormGroup>
                        </Col>
                        <Col md="3">
                            <FormGroup>
                                <label>Nacionalidad</label>
                                <Input
                                    placeholder="Nacionalidad"
                                    type="text"
                                    name="nationality"
                                    // value={datos.nationality}
                                    onChange={e => changeDatos(e)}
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row form>
                        <Col md="3">
                            <FormGroup>
                                <label>Teléfono</label>
                                <Input
                                    placeholder="Teléfono"
                                    type="text"
                                    name="telephone"
                                    // value={datos.telephone}
                                    onChange={e => changeDatos(e)}
                                />
                            </FormGroup>
                        </Col>
                        <Col md="3">
                            <FormGroup>
                                <label>Teléfono Móvil</label>
                                <Input
                                    placeholder="Teléfono Móvil"
                                    type="text"
                                    name="mobilphone"
                                    // value={datos.mobilphone}
                                    onChange={e => changeDatos(e)}
                                />
                            </FormGroup>
                        </Col>
                        <Col md="6">
                            <FormGroup>
                                <label>Correo Electrónico</label>
                                <Input
                                    placeholder="E-mail"
                                    type="email"
                                    name="email"
                                    // value={datos.email}
                                    onChange={e => changeDatos(e)}
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row form>
                        <Col md="3">
                            <FormGroup>
                                <label>Sexo</label>
                                <Input type="select" name="gender" onChange={e => changeDatos(e)}>
                                    <option selected disabled>Sexo</option>
                                    <option value='masculino'>Masculino</option>
                                    <option value='femenino'>Femenino</option>
                                </Input>
                            </FormGroup>
                        </Col>
                        <Col md="4">
                            <FormGroup>
                                <label>Estado Civil</label>
                                <Input type="select" name="maritalStatus" onChange={e => changeDatos(e)}>
                                    <option selected disabled>Estado Civil</option>
                                    <option value='soltero'>Soltero</option>
                                    <option value='casado'>Casado</option>
                                    <option value='divorciado'>Divorciado</option>
                                    <option value='viudo'>Viudo</option>
                                    <option value='union libre'>Unión Libre</option>
                                </Input>
                            </FormGroup>
                        </Col>
                        <Col md="5">
                            <FormGroup>
                                <label>Ocupación</label>
                                <Input
                                    placeholder="Ocupación"
                                    type="text"
                                    name="jobOccupation"
                                    // value={datos.jobOccupation}
                                    onChange={e => changeDatos(e)}
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row form>
                        <Col md="12">
                            <FormGroup>
                                <label>Dirección</label>
                                <Input
                                    placeholder="Dirección Exacta"
                                    type="text"
                                    name="address"
                                    // value={datos.address}
                                    onChange={e => changeDatos(e)}
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row form>
                        <Col md="12">
                            <FormGroup>
                                <label>Observaciones</label>
                                <Input
                                    type="textarea"
                                    placeholder="Notas sobre el cliente"
                                    name="notes"
                                    // value={datos.notes}
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

const References = ({ getDataReference }) => {

    const changeDatos = e => getDataReference(e)

    return (
        <Card>
            <CardBody>
                <Form>
                    <Row form>
                        <Col md="3">
                            <FormGroup>
                                <label>Tipo de referencia</label>
                                <Input type="select" name="typeReference" onChange={e => changeDatos(e)}>
                                    <option selected disabled>-- Seleccione --</option>
                                    <option value="personal">Personal</option>
                                    <option value="laboral">Laboral</option>
                                    <option value="familiar">Familiar</option>
                                </Input>
                            </FormGroup>
                        </Col>
                        <Col md="4">
                            <FormGroup>
                                <label>Nombre</label>
                                <Input
                                    placeholder="Nombre"
                                    type="text"
                                    name="firstName"
                                    // value={datos.firstName}
                                    onChange={e => changeDatos(e)}
                                />
                            </FormGroup>
                        </Col>
                        <Col md="5">
                            <FormGroup>
                                <label>Apellidos</label>
                                <Input
                                    placeholder="Apellidos"
                                    type="text"
                                    name="lastName"
                                    // value={datos.lastName}
                                    onChange={e => changeDatos(e)}
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row form>
                        <Col md="3">
                            <FormGroup>
                                <label>Teléfono 1</label>
                                <Input
                                    placeholder="Teléfono 1"
                                    type="text"
                                    name="phoneFirst"
                                    // value={datos.phoneFirst}
                                    onChange={e => changeDatos(e)}
                                />
                            </FormGroup>
                        </Col>
                        <Col md="3">
                            <FormGroup>
                                <label>Teléfono 2</label>
                                <Input
                                    placeholder="Teléfono 2"
                                    type="text"
                                    name="phoneTwo"
                                    // value={datos.phoneTwo}
                                    onChange={e => changeDatos(e)}
                                />
                            </FormGroup>
                        </Col>
                        <Col md="6">
                            <FormGroup>
                                <label>Correo Electrónico</label>
                                <Input
                                    placeholder="E-mail"
                                    type="email"
                                    name="email"
                                    // value={datos.email}
                                    onChange={e => changeDatos(e)}
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                </Form>
            </CardBody>
        </Card>
    );
}

const CustomerForm = ({ getInfoCustomer, getInfoReference }) => {
    const [activeTab, setActiveTab] = useState('1')

    return (
        <>
            <Nav tabs>
                <NavItem>
                    <NavLink
                        className={activeTab === '1' ? 'active' : ''}
                        onClick={() => activeTab !== '1' && setActiveTab('1')}
                    >
                        Datos Personales
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className={activeTab === '2' ? 'active' : ''}
                        onClick={() => activeTab !== '2' && setActiveTab('2')}
                    >
                        Referencias
                    </NavLink>
                </NavItem>
            </Nav>
            <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                    <PersonalInfo getDataPersonal={getInfoCustomer} />
                </TabPane>
                <TabPane tabId="2">
                    <References getDataReference={getInfoReference} />
                </TabPane>
            </TabContent>
        </>
    )
}

export default CustomerForm
