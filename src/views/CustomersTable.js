import React, { useEffect, useState } from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import { Button } from 'reactstrap';
import ReactTooltip from 'react-tooltip'

// import CustomerForm from 'components/Forms/CustomerForm';
// import ModalBtn from 'components/Modal/ModalBtn';
import ModalCustomer from 'components/Modal/ModalCustomer';

import { useCustomerStore } from '../store/store'



const CustomersTable = () => {
    const loadCustomers = useCustomerStore(state => state.getAllCustomers)
    const customerList = useCustomerStore(state => state.customerList)

    useEffect(() => {
        loadCustomers()
    }, [])

    const columns = [
        {
            dataField: "id",
            text: "Id",
            sort: true
        },
        {
            dataField: "firstName",
            text: "Name",
            sort: true
        },
        {
            dataField: "address",
            text: "Address",
        },
        {
            dataField: "zipCode",
            text: "Postcode",
        },
        {
            dataField: "stars",
            text: "Rating",
        },
        {
            dataField: "city",
            text: "City",
        },
        {
            dataField: "action-prestamo",
            isDummyField: true,
            text: "Crear Préstamo",
            formatter: (cell, row) => {
                return (
                    <>
                        < Button
                            className="ml-4"
                            color="warning"
                            onClick={() => alert(cell)}
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
                bordered={false}
                noDataIndication="Table is Empty"
            />
        </div>
    )
}

export default CustomersTable