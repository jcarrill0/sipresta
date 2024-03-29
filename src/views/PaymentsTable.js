import { useEffect, useState, useCallback } from 'react'

import BootstrapTable from 'react-bootstrap-table-next';
import { Button } from 'reactstrap';
// import ReactTooltip from 'react-tooltip'

import { useCustomerStore, useLoanStore } from '../store/store'
import { Spinner } from 'components/Spinner/Spinner'
import { useModal } from 'hooks/useModal'
import { useLoad } from 'hooks/useLoad'
import { styles } from './styles/styles'
import { getPayments } from '../helpers/helpers'
import { ModalPayment } from 'components/Modal/ModalPayment';


    // test de objeto de pago
    // const paymentsObj = {
    //     clientId: "",
    //     loanId: "",
    //     amount: 0,
    //     numFee: 0,
    //     date: "",
    //     paymentMethod: "",
    //     note: "",
    //     _createAt: "",
    //     _updateAt: "",
    //     _createBy: ""
    // }

    const PaymentsTable = () => {
        const loanList = useLoanStore(state => state.loanList)
        const customerList = useCustomerStore(state => state.customerList)
        // const paymentList = useLoanStore(state => state.getAllPayments)

        const [paymentsList, setPaymentsList] = useState([])
        
        const { modal, toggle } = useModal()
        const loading  = useLoad()

        // Funcion para cargar todos los pagos en estado pendiente
        const loadPayments =  useCallback(
            () => {
                if(loanList && loanList.length) {
                    let payments = getPayments(loanList, 'pendiente')
                    setPaymentsList(payments)
                }
                
            }, [loanList],
        )
        
        useEffect(() => {
            loadPayments()
        }, [loadPayments]) 

        const columns = [
            {
                dataField: "clientId",
                text: "Cliente",
                sort: true,
                headerAlign: 'center',
                // headerStyle: styles.headerStyle,
                style: styles.columnStyle,
                formatter: cell => {
                    let customer = customerList.find(item => item.id === cell)
                    return <span>{customer.firstName} {customer.lastName}</span>
                }
            },
            {
                dataField: "loanId",
                text: "N° Préstamo",
                sort: true,
                headerAlign: 'center',
                // headerStyle: styles.headerStyle,
                style: styles.columnStyle,
            },
            {
                dataField: "datePayment",
                text: "Fecha Pago",
                headerAlign: 'center',
                // headerStyle: styles.headerStyle,
                style: styles.columnStyle,
            },
            {
                dataField: "amount",
                text: "Monto Cancelado",
                headerAlign: 'center',
                // headerStyle: styles.headerStyle,
                style: styles.columnStyle,
            },
            {
                dataField: "id",
                text: "N° Cuota",
                headerAlign: 'center',
                headerStyle: styles.headerStyle,
                style: styles.columnStyle,
            },
            {
                dataField: "action",
                isDummyField: true,
                text: "Acciones",
                headerAlign: 'center',
                formatter: (cell, row) => {
                    return (
                        <>
                            { row ?
                                (
                                    <>
                                        < Button
                                            className="mr-1"
                                            color="warning"
                                            onClick={() => alert(row.id)}
                                            size='sm'
                                        >
                                            <i className="nc-icon nc-single-copy-04" style={styles.buttons} />
                                        </ Button>
                                        <Button
                                            className="mr-1"
                                            color="primary"
                                            onClick={() => alert(JSON.stringify(row.id))}
                                            size='sm'
                                        >
                                            <i className="nc-icon nc-badge" style={styles.buttons} />
                                        </Button>
                                        <Button
                                            color="danger"
                                            onClick={() => alert(JSON.stringify(row.id))}
                                            size='sm'
                                            // ref={setTriggerRef}
                                            type="button"
                                        >
                                            <i className="nc-icon nc-ruler-pencil" style={styles.buttons} />
                                        </Button>
                                    </>
                                )
                                : null
                            }
                        </>
                    );
                }
            },
        ];

        // const defaultSorted = [{
        //     dataField: 'name',
        //     order: 'desc'
        // }];

        // const editRecord = (record) => {

        //     alert(`Edit record: ${JSON.stringify(record.firstName)}`);
        // }

        // const deleteRecord = (record) => {
        //     alert(`Delete record: ${JSON.stringify(record.firstName)}`);
        // }

        const CaptionElement = () => <h3 style={styles.captionStyle}>Lista de Pagos</h3>;

        return (
            <div className="content">
                <CaptionElement />
                { loading
                ? <Spinner />
                : 
                    <>
                        <Button
                            color="success"
                            onClick={toggle}
                        >
                            <i className="nc-icon nc-simple-add mr-2 font-weight-bold" style={{ fontSize: "1rem" }} />
                            Nuevo
                        </Button>
                        <ModalPayment {...{ modal, toggle }} />
                        <BootstrapTable
                            bootstrap4
                            keyField="_id"
                            data={paymentsList}
                            columns={columns}
                            bordered={false}
                            noDataIndication="No hay pagos registrados"
                        />
                    </>

                }
            </div>
        )
    }

    export default PaymentsTable
