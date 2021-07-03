import React, { useEffect, useState } from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
// import overlayFactory from 'react-bootstrap-table2-overlay';
import { Button } from 'reactstrap';
import ReactTooltip from 'react-tooltip'

// import CustomerForm from 'components/Forms/CustomerForm';
// import ModalBtn from 'components/Modal/ModalBtn';
import { ModalCustomer } from 'components/Modal/ModalCustomer';
import { ModalLoan } from 'components/Modal/ModalLoan';
import { useCustomerStore } from '../store/store'

const styles = {
    headerStyle: { width: '7vw' },
    columnStyle: {
        wordWrap: 'break-word',
        fontSize: '.8rem '
    }
}

const CustomersTable = () => {
    // const addReference = useReferenceStore(state => state.addReference)
    const loadCustomers = useCustomerStore(state => state.getAllCustomers)
    // const loadReferences = useReferenceStore(state => state.getAllReferences)
    const customerList = useCustomerStore(state => state.customerList)

    const [clientSelected, setClientSelected] = useState("")
    const [modal, setModal] = useState(false)

    const toggle = () => setModal(!modal)

    const chooseClient = id => {
        setClientSelected(id)
        toggle()
    }

    useEffect(() => {
        loadCustomers()
    }, [loadCustomers])

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
                            onClick={() => chooseClient(row.id)}
                            size='sm'
                            data-tip="Crear Préstamo"
                        >
                            <i className="nc-icon nc-single-copy-04" style={{ fontSize: "20px" }} />
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
                            color="primary"
                            onClick={() => alert(JSON.stringify(row.id))}
                            size='sm'
                            data-tip="Ver detalle"
                            data-for="mostrar"
                        >
                            <i className="nc-icon nc-badge" style={{ fontSize: "20px" }} />
                        </Button> {' '}
                        <Button
                            color="danger"
                            onClick={() => alert(JSON.stringify(row.id))}
                            size='sm'
                            data-tip="Eliminar Cliente"
                            data-for="borrar"
                        >
                            <i className="nc-icon nc-ruler-pencil" style={{ fontSize: "20px" }} />
                        </Button>
                        <ReactTooltip id="mostrar" place="top" type="dark" effect="solid" />
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

    // useEffect(() => {
    //     setTimeout(() => {
    //         setLoading(false)
    //         setData(users)
    //     }, 3000);
    // },[users])

    const CaptionElement = () => <h3 style={{ borderRadius: '0.25rem', textAlign: 'center', color: '#FF6426', border: '1px solid #EF8157', padding: '0.4rem' }}>Lista de Clientes</h3>;

    return (
        <div className="content">
            <CaptionElement />
            {/* <ModalBtn
                title="Registrar nuevo cliente"
                Component={<CustomerForm data={getData} />}
            /> */}
            <ModalCustomer />
            <BootstrapTable
                bootstrap4
                keyField="id"
                data={customerList}
                columns={columns}
                // bordered={false}
                // loading={true} 
                // overlay={ overlayFactory({ spinner: spinner, background: 'rgba(192,192,192,0.3)' }) }
                noDataIndication="No hay clientes"
            />
            <ModalLoan
                modal={modal}
                toggle={toggle}
                clientId={clientSelected}
            />
        </div>
    )
}

export default CustomersTable
