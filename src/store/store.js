import create from 'zustand'
import { devtools } from 'zustand/middleware'

// import loanEndpoint from '../api-config/axios'
import { db } from '../firebase'

let customerStore = (set, get) => ({
    customerList: [],
    getAllCustomers: async () => {
        try {
            db.collection("customers").onSnapshot(data => {
                const docs = []
                data.forEach(doc => {
                    docs.push({ ...doc.data(), id: doc.id })
                })
                set(() => ({ customerList: docs }))
            })
            // const { data } = await loanEndpoint.get('/customers.json')
            // if (data && get().customerList.length < 1) {
            //     Object.entries(data).forEach(([key, value]) => {
            //         set(state => (
            //             { customerList: [...state.customerList, { ...value, id: key }] }
            //         ))
            //     })
            // }
        } catch (error) {
            console.error(error)
        }
    },
    addCustomer: async customer => {
        try {
            await db.collection("customers").doc().set(customer)
            // set(state => ({ customerList: [...state.customerList, customer] }))
            // await loanEndpoint.put(`/customers/${customer.numId}.json`, customer)
        } catch (error) {
            console.error(error)
        }
    },
    deleteCustomer: async id => {
        try {
            await db.collection("customers").doc(id).delete()
            let deleteCustomerList = get().customerList.filter(item => item.id !== id)
            set(() => ({ customerList: deleteCustomerList }))
            // await loanEndpoint.put(`/customers/${customer.numId}.json`, customer)
        } catch (error) {
            console.error(error)
        }
    },
    updateCustomer: async customer => {
        try {
            // await db.collection("customers").doc().set(customer)
            // newClientList = get().customerList.map(c => c.id === customer.id ? {...c, loan: customer.loan} : c)
            // await loanEndpoint.patch(`/customers/${customer.numId}.json`, customer)
            // set(state => ({ customerList: newClientList }))
        } catch (error) {
            console.error(error)
        }
    }
})

let loanStore = (set, get) => ({
    loanList: [],
    paymentsList: [],
    getAllLoans: async () => {
        try {
            db.collection("loans").onSnapshot(data => {
                const docs = []
                data.forEach(doc => {
                    docs.push({ ...doc.data(), id: doc.id })
                })
                set(() => ({ loanList: docs }))
            })
        } catch (error) {
            console.error(error);
        }
    },
    addLoan: async loan => {
        try {
            await db.collection("loans").doc().set(loan)
            // set(state => ({ loanList: [...state.loanList, loan] }))
        } catch (error) {
            console.error(error)
        }
    },
    deleteLoan: async id => {
        try {
            await db.collection("loans").doc(id).delete()
            let deleteLoanList = get().loanList.filter(item => item.id !== id)
            set(() => ({ loanList: deleteLoanList }))
        } catch (error) {
            console.error(error)
        }
    },
    getAllPayments: (status = 'pago') => {
        const loans = get().loanList 
        let feeList = []
        
        if(loans.length > 0){
            loans.forEach((loan, idx) => {
                const{ amortizacion } = loan
                amortizacion.forEach((fee, index) => {
                    if(fee.status === status) {
                        feeList.push({ ...fee, _id: `${idx}${index}`, loanId: loan.id, clientId: loan.clienteId})
                    }
                })
            })
            // set(() => ({ paymentsList: feeList }))
        }
        return feeList
    }
})

// export default customerStore
// settingsStore = persist(settingsStore, { name: 'user_settings' })

customerStore = devtools(customerStore)
loanStore = devtools(loanStore)

export const useCustomerStore = create(customerStore)
export const useLoanStore = create(loanStore)