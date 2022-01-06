import create from 'zustand'
import { devtools } from 'zustand/middleware'
import { doc, collection, getDocs, addDoc, deleteDoc, setDoc, getDoc } from 'firebase/firestore'

import { db } from '../firebase/firebaseConfig'


let customerStore = (set, get) => ({
    customerList: [],
    getAllCustomers: async () => {
        try {
            /* FIREBASE v9 */
            const docs = []
            const datos = await getDocs(collection(db, 'customers'))
            datos.forEach(doc => docs.push({ ...doc.data(), id: doc.id }))
            set(() => ({ customerList: docs }))
            console.log('Clientes cargados...');

            /* FIREBASE v8 */
            // db.collection("customers").onSnapshot(data => {
            //     const docs = []
            //     data.forEach(doc => {
            //         docs.push({ ...doc.data(), id: doc.id })
            //     })
            //     set(() => ({ customerList: docs }))
            // })

        } catch (error) {
            console.error(error)
        }
    },
    getCustomerById: async id => {
        try {
            /* FIREBASE v9 */
            const docRef = doc(db, 'customers', id)
            const customer = await getDoc(docRef)

            if(!customer.exists()) {
                alert('Cliente no existe en la base de datos')
                return;
            }
            return customer.data()

            /* FIREBASE v8 */
            // let customer = await db.collection("customers").doc(id).get()
        } catch (error) {
            console.error(error)
        }
    },
    addCustomer: async customer => {
        try {
            /* FIREBASE v9 */
            const customers = get().customerList

            await addDoc(collection(db, 'customers'), customer)

            set(() => ({ customerList: [...customers, customer] }))

            /* FIREBASE v8 */
            // await db.collection("customers").doc().set(customer)
        } catch (error) {
            console.error(error)
        }
    },
    deleteCustomer: async id => {
        try {
            /* FIREBASE v9 */
            const customers = get().customerList
            // const customerRef = doc(db, 'customers', id)

            // await deleteDoc(customerRef)

            let deleteCustomerList = customers.filter(item => item.id !== id)
            
            set(() => ({ customerList: deleteCustomerList }))

            /* FIREBASE v8 */
            // await db.collection("customers").doc(id).delete()
        } catch (error) {
            console.error(error)
        }
    },
    updateCustomer: async (id, customer) => {
        try {
            /* FIREBASE v9 */
            const customerRef = doc(db, 'customers', id)

            await setDoc(customerRef, customer)

            /* FIREBASE v8 */
            // await db.collection("customers").doc(id).update(customer)
        } catch (error) {
            console.error(error)
        }
    }
})

let loanStore = (set, get) => ({
    loanList: [],
    getAllLoans: async () => {
        try {
            const docs = []
            const datos = await getDocs(collection(db, 'loans'))
            datos.forEach(doc => docs.push({ ...doc.data(), id: doc.id }))
            set(() => ({ loanList: docs }))
            console.log('Prestamos cargados...');

        } catch (error) {
            console.error(error);
        }
    },
    addLoan: async loan => {
        try {
            await addDoc(collection(db, 'loans'), loan)
            // get().loanList.push(loan)
        } catch (error) {
            console.error(error)
        }
    },
    deleteLoan: async id => {
        try {
            // const loanRef = doc(db, 'loans', id)

            // await deleteDoc(loanRef)

            let deleteLoanList = get().loanList.filter(item => item.clienteId
                !== id)
            set(() => ({ loanList: deleteLoanList }))
        } catch (error) {
            console.error(error)
        }
    },
    updateLoan: async (id, loan) => {
        try {
            const loanRef = doc(db, 'loans', id)

            await setDoc(loanRef, loan)
        } catch (error) {
            console.error(error)
        }
    },
    getAllPayments: (status = 'pago') => {
        const loans = get().loanList 
        let feeList = []
        
        if(loans.length > 0) {
            loans.forEach((loan, idx) => {
                const { amortizacion } = loan
                amortizacion.forEach((fee, index) => {
                    if(fee.status === status) {
                        feeList.push({ ...fee, _id: `${idx}${index}`, loanId: loan.id, clientId: loan.clienteId})
                    }
                })
            })
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