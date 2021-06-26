import { createServer, Model, hasMany, belongsTo, Factory } from 'miragejs'

import faker from "faker"

createServer({
    models: {
        customers: Model,
        loans: Model,
        references: Model,
        payments: Model,
        employees: Model,
        expenses: Model,
        users: Model
    },
    factories: {
        customers: Factory.extend(
            {
                firstName() { faker.name.firstName() },
                lastName() { faker.name.lastName() },
                typeId: "fisica",
                numId: "702000432",
                nationality() { faker.address.country() },
                email() { faker.internet.email() },
                address() { faker.address.streetAddress() },
                maritalStatus(i) {
                    let genres = ["casado", "soltero", "divorciado"]
                    return genres[i % genres.length]
                },
                gender() { faker.name.gender() },
                jobOccupation() { faker.name.jobTitle() },
                telephone() { faker.phone.phoneNumber() },
                mobilphone() { faker.phone.phoneNumber() },
                notes() { faker.lorem.text(10) },
                _created() { faker.date.recent().toLocaleDateString() },
                _createdby() { faker.internet.email() }
            }
        ),
        loans: Factory.extend(
            {
                codigo: "00026",
                clienteId: 2,
                montoCredito: 10000,
                montoIntereses: 3000,
                montoTotal: 13000,
                montoCuota: 1000,
                cuotas: 13,
                interes: 30,
                pago: "quincenal",
                fechaPrestamo: "6/5/2021",
                estado: "pendiente",
                _created: "2021-06-24T17:38:11.720Z",
                _createdby: "josecarrillo8@gmail.com"
            }
        ),
        references: Factory.extend(
            {
                clienteId: "702000432",
                firstName: "Juana",
                lastName: "Vargas",
                typeReference: "personal",
                phoneFirst: "72986272",
                phoneTwo: "70564438",
                email: "josecarrillo8@gmail.com",
                _created: "2021-06-24T17:38:11.720Z",
                _createdby: "josecarrillo8@gmail.com"
            }
        ),
        // payments: Factory.extend(
        //     {}
        // ),
        // employees: Factory.extend(
        //     {}
        // ),
        // expenses: Factory.extend(
        //     {}
        // ),
        // users: Factory.extend(
        //     {}
        // )
    },
    seeds(server) {
        server.createList('customers', 6)
        // server.create('loans', 2)
        // server.create('references', 2)
        // server.create('payments')
        // server.create('employees')
        // server.create('expenses')
        // server.create('users')
    },
    routes() {
        this.namespace = 'sipresta/v1/api'

        /* CUSTOMERS API */
        this.post('/customers', (schema, request) => {
            let attrs = JSON.parse(request.requestBody)

            return schema.customers.create(attrs)
        })
        this.patch('/customers/:numId', (schema, request) => {
            let newAttrs = JSON.parse(request.requestBody)
            let customer = schema.customers.find(request.params.numId)

            return customer.update(newAttrs)
        })
        this.get('/customers')
        this.get('/customers/:numId')
        this.del('/customers/:numId')

        //   this.get('/customers/:numId/actors', (schema, request) => {
        //     let customer = schema.customers.find(request.params.numId)

        //     return customer.actors
        //   })

        /* LOANS API */
        this.post('/loans', (schema, request) => {
            let attrs = JSON.parse(request.requestBody)

            return schema.loans.create(attrs)
        })
        this.patch('/loans/:code', (schema, request) => {
            let newAttrs = JSON.parse(request.requestBody)
            let loan = schema.loans.find(request.params.code)

            return loan.update(newAttrs)
        })
        this.get('/loans')
        this.get('/loans/:code')
        this.del('/loans/:code')

        /* REFERENCES API */
        this.post('/references', (schema, request) => {
            let attrs = JSON.parse(request.requestBody)

            return schema.customers.create(attrs)
        })
        this.patch('/references /:id', (schema, request) => {
            let newAttrs = JSON.parse(request.requestBody)
            let reference = schema.references.find(request.params.id)

            return reference.update(newAttrs)
        })
        this.get('/references')
        this.get('/references/:id')
        this.del('/references/:id')
    },
})


// {
//     firstName: "Hazel",
//     lastName: "Barahona",
//     typeId: "fisica",
//     numId: "115540695",
//     nationality: "Costa Rica",
//     email: "hangelous29@gmail.com",
//     address: "calle monge",
//     maritalStatus: "casado",
//     gender: "femenino",
//     jobOccupation: "ama de casa",
//     telephone: "70574438",
//     mobilphone: "89434328",
//     notes: "",
//     _created: "2021-06-24T17:38:11.720Z",
//     _createdby: "hangelous29@gmail.com"
// }

// {
//     clienteId: "115540695",
//     firstName: "Juan",
//     lastName: "Vargas",
//     typeReference: "personal",
//     phoneFirst: "70564438",
//     phoneTwo: "72986272",
//     email: "hangelous29@gmail.com",
//     _created: "2021-06-24T17:38:11.720Z",
//     _createdby: "josecarrillo8@gmail.com"
// }

// {
//     codigo: "00025",
//     clienteId: 1,
//     montoCredito: 20000,
//     montoIntereses: 2000,
//     montoTotal: 22000,
//     montoCuota: 1692.31,
//     cuotas: 13,
//     interes: 10,
//     pago: "semanal",
//     fechaPrestamo: "5/29/2021",
//     estado: "pendiente",
//     _created: "2021-06-24T17:38:11.720Z",
//     _createdby: "hangelous29@gmail.com"
// }