import React, { useState } from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import { Button } from 'reactstrap';

// import LoanForm from 'components/Forms/LoanForm';
import ModalBtn from 'components/Modal/ModalBtn';

import { payments, customers, loans } from '../db.json'
import PaymentForm from 'components/Forms/PaymentForm';

const styles = {
    buttons: { fontSize: "14px" }
}

const PaymentsTable = () => {
    const [listPayments] = useState(payments)
    const columns = [
        {
            dataField: "clienteId",
            text: "Clientes",
            sort: true
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
                        < Button
                            color="warning"
                            onClick={() => alert(cell)}
                            size='sm'
                        >
                            <i className="nc-icon nc-single-copy-04" style={styles.buttons} />
                        </ Button>{' '}
                        <Button
                            color="primary"
                            onClick={() => alert(JSON.stringify(row.id))}
                            size='sm'
                        >
                            <i className="nc-icon nc-badge" style={styles.buttons} />
                        </Button> {' '}
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

    // useEffect(() => {
    //     setTimeout(() => {
    //         setLoading(false)
    //         setData(users)
    //     }, 3000);
    // },[users])

    const CaptionElement = () => <h3 style={{ borderRadius: '0.25rem', textAlign: 'center', color: '#FF6426', border: '1px solid #EF8157', padding: '0.4rem' }}>Lista de Pagos</h3>;

    return (
        <div className="content">
            <CaptionElement />
            <ModalBtn
                title="Registrar nuevo pago"
                Component={<PaymentForm />}
            />
            <BootstrapTable
                bootstrap4
                keyField="id"
                data={listPayments}
                columns={columns}
                bordered={false}
                noDataIndication="Table is Empty"
            />
        </div>
    )
}

export default PaymentsTable
