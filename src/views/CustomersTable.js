import { useEffect, useState } from 'react'

import { Button } from 'reactstrap'
import ReactTooltip from 'react-tooltip'
import BootstrapTable from 'react-bootstrap-table-next'

import { useCustomerStore } from '../store/store'
import { ModalCustomer } from 'components/Modal/ModalCustomer'
import { ModalLoan } from 'components/Modal/ModalLoan';
import { Spinner } from 'components/Spinner/Spinner'
import { useModal } from 'hooks/useModal'
import { useLoad } from 'hooks/useLoad'
import { styles } from './styles/styles'

const CustomersTable = () => {
    const loadCustomers = useCustomerStore(state => state.getAllCustomers)
    const customerList = useCustomerStore(state => state.customerList)

    const [clientSelected, setClientSelected] = useState({})

    const { modal, toggle } = useModal()
    const { loading, setLoading } = useLoad()

    const chooseClient = client => {
        setClientSelected(client)
        toggle()
    }

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 3400);
        setLoading(true)
        loadCustomers()
    }, [loadCustomers, setLoading])

    const columns = [
        {
            dataField: "numId",
            text: "Id",
            sort: true,
            headerAlign: 'center',
            headerStyle: styles.headerStyle,
            style: styles.columnStyle

        },
        {
            dataField: "firstName",
            text: "Name",
            sort: true,
            headerAlign: 'center',
            style: styles.columnStyle
            // const customer = customers.find(item => item.id === cell)

            // return (
            //     <span>{`${customer.firstName} ${customer.lastName}`}</span>
            // );
        },
        {
            dataField: "email",
            text: "Email",
            headerAlign: 'center',
            style: styles.columnStyle
        },
        {
            dataField: "addresses",
            text: "Address",
            headerAlign: 'center',
            style: styles.columnStyle,
            formatter: cell => <span>{cell[0].address}</span>
        },
        {
            dataField: "phones",
            text: "Phone",
            headerAlign: 'center',
            headerStyle: styles.headerStyle,
            style: styles.columnStyle,
            formatter: cell => <span>{cell[0].number}</span>
        },
        {
            dataField: "gender",
            text: "Género",
            headerAlign: 'center',
            headerStyle: styles.headerStyle,
            style: styles.columnStyle
        },
        {
            dataField: "action-prestamo",
            isDummyField: true,
            text: "Crear Préstamo",
            align: 'center',
            headerAlign: 'center',
            headerStyle: styles.headerStyle,
            formatter: (cell, row) => {
                return (
                    <>
                        < Button
                            color="warning"
                            onClick={() => chooseClient(row)}
                            size='sm'
                            data-tip="Crear Préstamo"
                        >
                            <i className="nc-icon nc-single-copy-04" style={styles.buttons} />
                        </ Button>
                        <ReactTooltip place="top" type="dark" effect="solid" />
                    </>

                );
            }
        },
        {
            dataField: "action",
            isDummyField: true,
            align: 'center',
            headerAlign: 'center',
            text: "Acciones",
            formatter: (cell, row) => {
                return (
                    <>
                        <Button
                            className="mr-1"
                            color="primary"
                            onClick={() => alert(JSON.stringify(row.id))}
                            size='sm'
                            data-tip="Ver detalle"
                            data-for="mostrar"
                        >
                            <i className="nc-icon nc-badge" style={styles.buttons} />
                        </Button>
                        <ReactTooltip id="mostrar" place="top" type="dark" effect="solid" />
                        <Button
                            color="danger"
                            onClick={() => alert(JSON.stringify(row.id))}
                            size='sm'
                            data-tip="Eliminar Cliente"
                            data-for="borrar"
                        >
                            <i className="nc-icon nc-ruler-pencil" style={styles.buttons} />
                        </Button>
                        <ReactTooltip id="borrar" place="top" type="dark" effect="float" />
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

    const CaptionElement = () => <h3 style={styles.captionStyle}>Lista de Clientes</h3>;

    return (
        <div className="content">
            <CaptionElement />  
            { loading
              ? <Spinner />
              : 
                <>
                    <ModalCustomer />
                    <BootstrapTable
                        bootstrap4
                        keyField="id"
                        data={customerList}
                        columns={columns}
                        bordered={false}
                        noDataIndication="No hay clientes"
                    />
                </>
            }
            <ModalLoan
                modal={modal}
                toggle={toggle}
                client={clientSelected}
            />
        </div>
    )
}

export default CustomersTable
