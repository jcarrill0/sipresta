import create from 'zustand'
import { devtools } from 'zustand/middleware'

import loanEndpoint from '../config/axios'

let customerStore = set => ({
    customerList: [],
    getAllCustomers: async () => {
        try {
            const response = await loanEndpoint.get('/customers')
            const { data } = response
            set({ customerList: data })
        } catch (error) {
            console.error(error);
        }
    },
    addCustomer: async customer => {
        try {
            console.log(customer);
            const res = await loanEndpoint.post('/customers', customer)
            console.log(res);
            set(state => ({ customerList: [...state.customerList, customer] }))
        } catch (error) {
            console.error(error);
        }
    },
})

let referenceStore = set => ({
    referenceList: [],
    getAllReferences: async () => {
        try {
            const response = await loanEndpoint.get('/references')
            const { data } = response
            set({ referenceList: data })
        } catch (error) {
            console.error(error);
        }
    },
    addReference: async reference => {
        try {
            await loanEndpoint.post('/references', reference)
            set(state => ({ referenceList: [...state.referenceList, reference] }))
        } catch (error) {
            console.error(error);
        }
    },
})

let loanStore = set => ({
    loanList: [],
    getAllPayments: async () => {
        try {
            const response = await loanEndpoint.get('/loans')
            const { data } = response
            set({ loanList: data })
        } catch (error) {
            console.error(error);
        }
    },
})

let paymentStore = set => ({
    paymentList: [],
    getAllPayments: async () => {
        try {
            const response = await loanEndpoint.get('/payments')
            const { data } = response
            set({ paymentList: data })
        } catch (error) {
            console.error(error);
        }
    },
})

// export default customerStore
// settingsStore = persist(settingsStore, { name: 'user_settings' })

customerStore = devtools(customerStore)
referenceStore = devtools(referenceStore)
paymentStore = devtools(paymentStore)
loanStore = devtools(loanStore)

export const useCustomerStore = create(customerStore)
export const useReferenceStore = create(referenceStore)
export const usePaymentStore = create(paymentStore)
export const useLoanStore = create(loanStore)