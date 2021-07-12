import { useState } from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import { Button } from 'reactstrap';
// import ReactTooltip from 'react-tooltip'

import { customers, loans } from '../db.json'

import CalcForm from 'components/Forms/CalcForm';
import { ModalCalc } from 'components/Modal/ModalCalc';
import { ModalLoan } from 'components/Modal/ModalLoan';
import { useModal } from 'hooks/useModal'

import { styles } from './styles/styles'


const LoansTable = () => {
    const [listLoan] = useState(loans)

    const { modal, toggle } = useModal()

    const columns = [
        {
            dataField: "codigo",
            text: "N° Prestamo",
            sort: true,
            // headerStyle: styles.headerStyle,
            style: styles.columnStyle
        },
        {
            dataField: "clienteId",
            text: "Cliente",
            sort: true,
            style: styles.columnStyle,
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
            headerAlign: 'center',
            headerStyle: styles.headerStyle,
            style: styles.columnStyle
        },
        {
            dataField: "montoCredito",
            text: "Monto Crédito",
            headerAlign: 'center',
            headerStyle: styles.headerStyle,
            style: styles.columnStyle
        },
        // {
        //     dataField: "montoTotal",
        //     text: "Monto Total",
        //     style: styles.columnStyle
        // },
        {
            dataField: "interes",
            text: "Interés",
            headerStyle: styles.headerStyle,
            style: styles.columnStyle,
            formatter: (cell, row) => {
                return (
                    <span>{cell}%</span>
                );
            }
        },
        {
            dataField: "cuotas",
            text: "Cuotas",
            headerStyle: styles.headerStyle,
            style: styles.columnStyle
        },
        // {
        //     dataField: "pago",
        //     text: "Pagos",
        // },
        {
            dataField: "action",
            isDummyField: true,
            text: "Acciones",
            // style: styles.columnStyle,
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
                                type="button"
                            >
                                <i className="nc-icon nc-ruler-pencil" style={styles.buttons} />
                            </Button>
                        </span>
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

    const CaptionElement = () => <h3 style={styles.captionStyle}>Lista de Préstamos</h3>;

    return (
        <div className="content">
            <CaptionElement />
            <Button
                color="success"
                onClick={toggle}
            >
                <i className="nc-icon nc-simple-add mr-2 font-weight-bold" style={{ fontSize: "1rem" }} />
                Nuevo
            </Button>
            <ModalLoan {...{ modal, toggle }} />
            <ModalCalc title="Calculadora de préstamo" >
                <CalcForm />
            </ModalCalc>
            <BootstrapTable
                bootstrap4
                keyField="id"
                data={listLoan}
                columns={columns}
                bordered={false}
                noDataIndication="No hay préstamos"
            />
        </div>
    )
}

export default LoansTable
