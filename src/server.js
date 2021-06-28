import { createServer, Model, hasMany, belongsTo, Factory } from 'miragejs'

import faker from "faker"

import { customers, references } from './data'

createServer({
    models: {
        customer: Model,
        loan: Model,
        reference: Model,
        payment: Model,
        employee: Model,
        expense: Model,
        user: Model
    },
    // factories: {
    //     customer: Factory.extend(
    //         {
    //             firstName: () => faker.name.firstName(),
    //             lastName: () => faker.name.lastName(),
    //             typeId: "fisica",
    //             numId: "702000432",
    //             nationality: () => faker.address.country(),
    //             email: () => faker.internet.email(),
    //             address: () => faker.address.streetAddress(),
    //             maritalStatus: i => {
    //                 let genres = ["casado", "soltero", "divorciado"]
    //                 return genres[i % genres.length]
    //             },
    //             gender: () => faker.name.gender(),
    //             jobOccupation: () => faker.name.jobTitle(),
    //             telephone: () => faker.phone.phoneNumber(),
    //             mobilphone: () => faker.phone.phoneNumber(),
    //             notes: () => faker.lorem.paragraph(),
    //             _created: () => faker.date.recent().toLocaleDateString(),
    //             _createdby: () => faker.internet.email()
    //         }
    //     ),
    //     loan: Factory.extend(
    //         {
    //             codigo: "00026",
    //             clienteId: 2,
    //             montoCredito: 10000,
    //             montoIntereses: 3000,
    //             montoTotal: 13000,
    //             montoCuota: 1000,
    //             cuotas: 13,
    //             interes: 30,
    //             pago: "quincenal",
    //             fechaPrestamo: "6/5/2021",
    //             estado: "pendiente",
    //             _created: "2021-06-24T17:38:11.720Z",
    //             _createdby: "josecarrillo8@gmail.com"
    //         }
    //     ),
    //     reference: Factory.extend(
    //         {
    //             clienteId: "702000432",
    //             firstName: "Juana",
    //             lastName: "Vargas",
    //             typeReference: "personal",
    //             phoneFirst: "72986272",
    //             phoneTwo: "70564438",
    //             email: "josecarrillo8@gmail.com",
    //             _created: "2021-06-24T17:38:11.720Z",
    //             _createdby: "josecarrillo8@gmail.com"
    //         }
    //     ),
    //     payments: Factory.extend(
    //         {}
    //     ),
    //     employees: Factory.extend(
    //         {}
    //     ),
    //     expenses: Factory.extend(
    //         {}
    //     ),
    //     users: Factory.extend(
    //         {}
    //     )
    // },
    seeds(server) {
        customers.forEach(client => server.create("customer", client))
        references.forEach(referenc => server.create('reference', referenc))
        // server.create('loans', 2)
        // server.create('payments')
        // server.create('employees')
        // server.create('expenses')
        // server.create('users')
    },
    routes() {
        this.namespace = 'api'

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