import { useEffect } from 'react'

import BootstrapTable from 'react-bootstrap-table-next';
import { Button } from 'reactstrap';
import ReactTooltip from 'react-tooltip'

// import { customers, loans } from '../db.json'
import { useCustomerStore, useLoanStore } from '../store/store'
import { useModal } from 'hooks/useModal'
import { useLoad } from 'hooks/useLoad'
import CalcForm from 'components/Forms/CalcForm';
import { ModalCalc } from 'components/Modal/ModalCalc';
import { ModalLoan } from 'components/Modal/ModalLoan';
import { styles } from './styles/styles'
import { loanCalculate } from '../helpers/helpers'
import { Spinner } from 'components/Spinner/Spinner';



const LoansTable = () => {
    const loadCustomers = useCustomerStore(state => state.getAllCustomers)
    const customerList = useCustomerStore(state => state.customerList)
    const loadLoans = useLoanStore(state => state.getAllLoans)
    const loanList = useLoanStore(state => state.loanList)
    
    // const [listLoan] = useState(loans)

    const { modal, toggle } = useModal()
    const { loading } = useLoad()

    useEffect(() => {
        loadCustomers()
        loadLoans()
    }, [loadLoans, loadCustomers])

    const columns = [
        {
            dataField: "id",
            text: "N° Prestamo",
            sort: true,
            style: styles.columnStyle
        },
        {
            dataField: "clienteId",
            text: "Cliente",
            sort: true,
            style: styles.columnStyle,
            formatter: cell => {
                let customer = customerList.find(item => item.id === cell)
                return (
                    <span>
                        { customerList && customerList.length
                            ? `${customer.firstName} ${customer.lastName}`
                            : null
                        }
                    </span>
                );
            }
        },
        {
            dataField: "montoCredito",
            text: "M. crédito",
            headerAlign: 'center',
            headerStyle: styles.headerStyle,
            style: styles.columnStyle
        },
        {
            dataField: "interes",
            isDummyField: true,
            text: "M. interés",
            headerAlign: 'center',
            headerStyle: styles.headerStyle,
            style: styles.columnStyle,
            formatter: (cell, {montoCredito, interes}) => {
                const { getAmountInteres } = loanCalculate(montoCredito, interes)
                return (
                    <span>{getAmountInteres()}</span>
                );
            }
        },
        {
            dataField: "montoTotal",
            isDummyField: true,
            text: "M. total",
            headerAlign: 'center',
            headerStyle: styles.headerStyle,
            style: styles.columnStyle,
            formatter: (cell, {montoCredito, interes}) => {
                const { getAmountTotal } = loanCalculate(montoCredito, interes)
                return (
                    <span>{getAmountTotal()}</span>
                );
            }
        },
        {
            dataField: "fechaPrestamo",
            text: "F. Préstamo",
            headerAlign: 'center',
            headerStyle: styles.headerStyle,
            style: styles.columnStyle
        },
        {
            dataField: "estado",
            text: "Estado",
            headerStyle: styles.headerStyle,
            style: styles.columnStyle
        },
        // {
        //     dataField: "cuotas",
        //     text: "Cuotas",  
        //     headerStyle: styles.headerStyle,
        //     style: styles.columnStyle
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
                            className="mr-1"
                            color="warning"
                            onClick={() => alert(cell)}
                            size='sm'
                            data-tip="Agregar pago"
                            data-for="pago"
                        >
                            <i className="nc-icon nc-single-copy-04" style={styles.buttons} />
                        </ Button>
                        <ReactTooltip id="pago" place="top" type="dark" effect="solid" />
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

    const CaptionElement = () => <h3 style={styles.captionStyle}>Lista de Préstamos</h3>;

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
                    <ModalLoan {...{ modal, toggle }} />
                    <ModalCalc title="Calculadora de préstamo" >
                        <CalcForm />
                    </ModalCalc>
                    <BootstrapTable
                        bootstrap4
                        keyField="id"
                        data={loanList}
                        columns={columns}
                        bordered={false}
                        noDataIndication="No hay préstamos"
                    />
                </>

            }
            
        </div>
    )
}

export default LoansTable
