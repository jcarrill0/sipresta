import { useEffect } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { useCustomerStore } from '../../store/store'

import BootstrapTable from 'react-bootstrap-table-next'


export const ModalListCustomers = ({ modalNested, toggleNested, customer }) => {
    const loadCustomers = useCustomerStore(state => state.getAllCustomers)
    const customerList = useCustomerStore(state => state.customerList)

    useEffect(() => {
        loadCustomers()
    }, [loadCustomers])

    const columns = [
        {
            dataField: "numId",
            text: "Cedula",
            sort: true,
            // headerAlign: 'center',
            // headerStyle: styles.headerStyle,
            // style: styles.columnStyle

        },
        {
            dataField: "firstName",
            text: "Nombre",
            sort: true,
        },
        {
            dataField: "lastName",
            text: "Apellidos",
            sort: true,
        },
    ]

    const handleOnSelect = (row, isSelect) => {
        if (isSelect) {
            customer(row)
            toggleNested()
        }
    }

    const selectRow = {
        mode: 'radio',
        clickToSelect: true,
        onSelect: handleOnSelect
    }

    return (
        <Modal isOpen={modalNested} toggle={toggleNested} backdrop={false} size="lg">
            <ModalHeader className="text-uppercase d-flex justify-content-center">
                Lista de clientes
            </ModalHeader>
            <ModalBody>
                <BootstrapTable
                    bootstrap4
                    keyField="id"
                    data={customerList}
                    columns={columns}
                    selectRow={selectRow}
                    bordered={false}
                    noDataIndication="No hay clientes"
                    hover
                />
            </ModalBody>
            <ModalFooter>
                <Button className="mr-2" color="danger" type="button" onClick={toggleNested}>Cancel</Button>
            </ModalFooter>
        </Modal>
    )
}
