import React, { useState } from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import { Button } from 'reactstrap';

import LoanForm from 'components/Forms/LoanForm';
import ModalBtn from 'components/Modal/ModalBtn';

import { customers, loans } from '../db.json'
// import { usePopperTooltip } from 'react-popper-tooltip';
import { ModalCalc } from 'components/Modal/ModalCalc';
import CalcForm from 'components/Forms/CalcForm';
import { ModalLoan } from 'components/Modal/ModalLoan';



const styles = {
    buttons: { fontSize: "14px" }
}


const LoansTable = () => {
    const [listLoan] = useState(loans)

    const columns = [
        {
            dataField: "codigo",
            text: "N° Prestamo",
            sort: true
        },
        {
            dataField: "clienteId",
            text: "Cliente",
            sort: true,
            formatter: cell => {
                const customer = customers.find(item => item.id === cell)

                return (
                    <span>{`${customer.firstName} ${customer.lastName}`}</span>
                );
            }
        },
        {
            dataField: "fechaPrestamo",
            text: "Fecha Préstamo",
        },
        {
            dataField: "montoCredito",
            text: "Monto Crédito",
        },
        {
            dataField: "montoTotal",
            text: "Monto Total",
        },
        {
            dataField: "interes",
            text: "Interés",
            formatter: (cell, row) => {
                return (
                    <span>{cell}%</span>
                );
            }
        },
        {
            dataField: "cuotas",
            text: "Cuotas",
        },
        // {
        //     dataField: "pago",
        //     text: "Pagos",
        // },
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
                        <span>
                            <Button
                                color="danger"
                                onClick={() => alert(JSON.stringify(row.id))}
                                size='sm'
                                // ref={setTriggerRef}
                                type="button"
                            >
                                <i className="nc-icon nc-ruler-pencil" style={styles.buttons} />
                            </Button>
                            {/* {visible && (
                                <div ref={setTooltipRef} {...getTooltipProps({ className: 'tooltip-container' })}>
                                    Eliminar Prestamo
                                    <div {...getArrowProps({ className: 'tooltip-arrow' })} />
                                </div>
                            )} */}
                        </span>
                        {/* <Tooltip placement="right-end" isOpen={tooltipOpen} target="contrato" toggle={toggle}>
                            Contrato préstamo
                        </Tooltip>
                        <Tooltip placement="right-end" isOpen={tooltipOpen} target="delete" toggle={toggle}>
                            Eliminar préstamo
                        </Tooltip> */}
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

    const CaptionElement = () => <h3 style={{ borderRadius: '0.25rem', textAlign: 'center', color: '#FF6426', border: '1px solid #EF8157', padding: '0.4rem' }}>Lista de Préstamos</h3>;

    return (
        <div className="content">
            <CaptionElement />
            {/* <ModalBtn
                title="Registrar nuevo préstamo"
                Component={<LoanForm />}
            /> */}
            <ModalLoan />
            <ModalCalc
                title="Calculadora de préstamo"
                Component={<CalcForm />}
            />
            <BootstrapTable
                bootstrap4
                keyField="id"
                data={listLoan}
                columns={columns}
                bordered={false}
                noDataIndication="Table is Empty"
            />
        </div>
    )
}

export default LoansTable
