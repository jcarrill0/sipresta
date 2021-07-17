import create from 'zustand'
import { devtools } from 'zustand/middleware'

// import loanEndpoint from '../config/axios'
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
            // await loanEndpoint.put(`/customers/${customer.numId}.json`, customer)
            // set(state => ({ customerList: [...state.customerList, customer] }))
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
    getAllPayments: async () => {
        try {
            db.collection("loans").onSnapshot(data => {
                const docs = []
                data.forEach(doc => {
                    docs.push({ ...doc.data(), id: doc.id })
                })
                set(() => ({ loanList: docs }))
            })
            // const { data } = await loanEndpoint.get('/loans.json')
            // if (data && get().loanList.length < 1) {
            //     Object.entries(data).forEach(([key, value]) => {
            //         set(state => (
            //             { loanList: [...state.loanList, { ...value, id: key }] }
            //         ))
            //     })
            // }
        } catch (error) {
            console.error(error);
        }
    },
    addLoan: async loan => {
        try {
            
            console.log(loan);
            // await db.collection("loans").doc().set(loan)
            // await loanEndpoint.post('/loans.json', loan)
            // set(state => ({ loanList: [...state.loanList, loan] }))
        } catch (error) {
            console.error(error)
        }
    },
})


// let referenceStore = set => ({
//     referenceList: [],
//     getAllReferences: async () => {
//         try {
//             db.collection("references").onSnapshot(data => {
//                 const docs = []
//                 data.forEach(doc => docs.push({ ...doc.data(), id: doc.id }))
//                 set(state => ({ referenceList: docs }))
//             })
//             const { data } = await loanEndpoint.get('/references.json')
//             if (data) {
//                 Object.entries(data).forEach(([key, value]) => {
//                     set(state => (
//                         { referenceList: [...state.referenceList, { ...value, id: key }] }
//                     ))
//                 })
//             }
//         } catch (error) {
//             console.error(error);
//         }
//     },
//     addReference: async reference => {
//         try {
//             // await db.collection("references").doc().set(reference)
//             await loanEndpoint.post('/references.json', reference)
//             set(state => ({ referenceList: [...state.referenceList, reference] }))
//         } catch (error) {
//             console.error(error);
//         }
//     },
// })

// let paymentStore = set => ({
//     paymentList: [],
//     getAllPayments: async () => {
//         try {
//             const response = await loanEndpoint.get('/payments')
//             const { data } = response
//             set({ paymentList: data })
//         } catch (error) {
//             console.error(error);
//         }
//     },
// })

// export default customerStore
// settingsStore = persist(settingsStore, { name: 'user_settings' })

customerStore = devtools(customerStore)
// referenceStore = devtools(referenceStore)
// paymentStore = devtools(paymentStore)
loanStore = devtools(loanStore)

export const useCustomerStore = create(customerStore)
// export const useReferenceStore = create(referenceStore)
// export const usePaymentStore = create(paymentStore)
export const useLoanStore = create(loanStore)