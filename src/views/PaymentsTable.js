import { useEffect, useState } from 'react'

import BootstrapTable from 'react-bootstrap-table-next';
import { Button } from 'reactstrap';
import ReactTooltip from 'react-tooltip'

// import LoanForm from 'components/Forms/LoanForm';
// import { payments, customers, loans } from '../db.json'
import { useCustomerStore, useLoanStore } from '../store/store'
// import { useModal } from 'hooks/useModal'
import ModalBtn from 'components/Modal/ModalBtn';
import PaymentForm from 'components/Forms/PaymentForm';
import { styles } from './styles/styles'


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
    // const [listPayments] = useState(payments)
    const loadCustomers = useCustomerStore(state => state.getAllCustomers)
    const loadLoans = useLoanStore(state => state.getAllLoans)
    const loadPayments = useLoanStore(state => state.getAllPayments)
    const customerList = useCustomerStore(state => state.customerList)
    const paymentsList = useLoanStore(state => state.paymentsList)
    const loanList = useLoanStore(state => state.loanList)
    

    // const { modal, toggle } = useModal()

    useEffect(() => {
        loadCustomers()
        loadLoans()
        loadPayments('pendiente')
    }, [loadLoans, loadCustomers, loadPayments]) 

    if(customerList && customerList.length) {
        console.log(paymentsList)
    }

    const columns = [
        {
            dataField: "clienteId",
            text: "Cliente",
            sort: true,
            // formatter: cell => {
            //     let customer = customerList.find(item => item.id === cell)
            //     return (
            //         <span>
            //             { customerList && customerList.length
            //                 ? `${customer.firstName} ${customer.lastName}`
            //                 : null
            //             }
            //         </span>
            //     )
            // }
        },
        {
            dataField: "prestamoId",
            text: "N° Préstamo",
            sort: true,
            // formatter: cell => {
            //     const customer = customers.find(item => item.id === cell)

            //     return (
            //         <span>{`${customer.firstName} ${customer.lastName}`}</span>
            //     );
            // }
        },
        {
            dataField: "fechaPago",
            text: "Fecha Pago",
        },
        {
            dataField: "montoCancelado",
            text: "Monto Cancelado",
        },
        {
            dataField: "cuota",
            text: "N° Cuota",
        },
        {
            dataField: "action",
            isDummyField: true,
            text: "Acciones",
            formatter: (cell, row) => {
                return (
                    <>
                        { row.length > 0 ?
                            (
                                <>
                                    < Button
                                        className="mr-1"
                                        color="warning"
                                        onClick={() => alert(cell)}
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
            <ModalBtn
                title="Registrar nuevo pago"
                Component={<PaymentForm />}
            />
            <BootstrapTable
                bootstrap4
                keyField="_id"
                data={paymentsList}
                columns={columns}
                bordered={false}
                noDataIndication="No hay pagos registrados"
            />
        </div>
    )
}

export default PaymentsTable
