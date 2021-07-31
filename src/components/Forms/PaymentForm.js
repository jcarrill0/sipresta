import { useCallback, useEffect, useState } from "react";
import { Button,FormGroup,Form,Input,Row,Col,Card,CardBody} from "reactstrap"
import BootstrapTable from 'react-bootstrap-table-next'

import { useLoanStore } from '../../store/store'
import { ModalListCustomers } from '../Modal/ModalListCustomers'
import { useModal } from 'hooks/useModal'
import { styles } from '../../views/styles/styles'


function PaymentForm({ client, setClientId, ...props }) {
    const  loanList = useLoanStore(state => state.loanList)
    const [customer, setCustomer] = useState(client !== undefined ? client : null)
    const [loan, setLoan] = useState(null)
    const [feesList, setFeesList] = useState([])
    const [total, setTotal] = useState(0)

    const { modal, toggle } = useModal()

    
    const getCustomer = useCallback(
        () => customer && setClientId(customer.id), 
        [setClientId, customer]
    )

    const getLoan = useCallback(
        () => {
            if(customer) {
                let loanFound = loanList.find(item => item.clienteId === customer.id)
                setLoan(loanFound)
            } 
        }, [loanList, customer]
    )

    const getFees = useCallback(
        () => {
            if(loan) {
                setFeesList(loan.amortizacion)
            } 
        }, [loan, setFeesList]
    )

    const loadDataForm = useCallback(
        () => {
            getCustomer()
            getLoan()
            getFees()
        }, [getCustomer,  getLoan, getFees]
    )

    useEffect(() => {
        loadDataForm()
    }, [loadDataForm])

    const columns = [
        {
            dataField: "id",
            text: "N° cuota",
            headerAlign: 'center',
            align: 'center',
            style: styles.columnStyle,
            headerStyle: styles.headerStyle
        },
        {
            dataField: "datePayment",
            text: "Fecha de Pago",
            headerAlign: 'center',
            align: 'center',
            style: styles.columnStyle,
            formatter: cell => {
                const date = new Date(cell)
                const dateFormatted = date.toLocaleString('en-UK', {dateStyle: 'short'})
                return <span>{dateFormatted}</span>
            }
        },
        {
            dataField: "amount",
            text: "Monto Cuota",
            headerAlign: 'center',
            align: 'center',
            style: styles.columnStyle,
            formatter: cell => {
                return <span>{cell.toFixed(2)}</span>
            }
        },
        {
            dataField: "status",
            text: "Estado",
            headerAlign: 'center',
            align: 'center',
            style: styles.columnStyle
        },
    ]

    const handleOnSelect = (row, isSelect) => {
        if (isSelect) {
            setTotal(total + row.amount)
        } else {
            setTotal(total - row.amount)
        }
    }

    const selectRow = {
        mode: 'checkbox',
        clickToSelect: true,
        onSelect: handleOnSelect
    }

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
                        <Row form>
                            <Col md={4}>
                                <FormGroup>
                                    <label>Monto prestado</label>
                                    <Input
                                        type="text"
                                        name="montoCredito"
                                        disabled
                                        value={loan ? loan.montoCredito : ""}
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={4}>
                                <FormGroup>
                                    <label>N° préstamo</label>
                                    <Input
                                        type="text"
                                        name="loanId"
                                        disabled
                                        value={loan ? loan.id : ""}
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={4}>
                                <FormGroup>
                                    <label>Forma de pago</label>
                                    <Input
                                        type="text"
                                        name="modalidadPago"
                                        disabled
                                        value={loan ? loan.modalidadPago : ""}
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                    </fieldset>
                    <fieldset className="px-2 mb-2" style={styles.legend}>
                        <legend style={styles.fielset}>Información de cuotas</legend>
                        <Row form>
                            <Col md={9}>
                                <FormGroup>
                                    <BootstrapTable
                                        bootstrap4
                                        keyField="id"
                                        data={feesList}
                                        columns={columns}
                                        selectRow={selectRow}
                                        noDataIndication="No hay cuotas"
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={3}>
                                <FormGroup>
                                    <label style={{width:"100%", textAlign:"center"}}>Monto Total</label>
                                    <Input
                                        style={{fontSize:"1.3rem", fontWeight:"bold", textAlign: "center"}}
                                        type="text"
                                        name="totalPago"
                                        disabled
                                        value={total.toFixed(2)}   
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
