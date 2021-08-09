
export let customers = [
    {
        firstName: "Hazel",
        lastName: "Barahona",
        typeId: "fisica",
        numId: "115540695",
        nationality: "Costa Rica",
        email: "hangelous29@gmail.com",
        address: "calle monge",
        maritalStatus: "casado",
        gender: "femenino",
        jobOccupation: "ama de casa",
        telephone: "70574438",
        mobilphone: "70574438",
        notes: "",
        _created: "2021-06-24T17:38:11.720Z",
        _createdby: "hangelous29@gmail.com"
    },
    {
        firstName: "José",
        lastName: "Carrillo",
        typeId: "fisica",
        numId: "702000432",
        nationality: "Costa Rica",
        email: "josecarrillo8@gmail.com",
        address: "calle monge",
        maritalStatus: "casado",
        gender: "masculino",
        jobOccupation: "pastor",
        telephone: "72986272",
        mobilphone: "72986272",
        notes: "",
        _created: "2021-06-24T17:38:11.720Z",
        _createdby: "josecarrillo8@gmail.com"
    }
]

export let loans = [
    {
        codigo: "00025",
        clienteId: 1,
        montoCredito: 20000,
        montoIntereses: 2000,
        montoTotal: 22000,
        montoCuota: 1692.31,
        cuotas: 13,
        interes: 10,
        pago: "semanal",
        fechaPrestamo: "5/29/2021",
        estado: "pendiente",
        _created: "2021-06-24T17:38:11.720Z",
        _createdby: "hangelous29@gmail.com"
    }
]

export let references = [
    {
        clienteId: "115540695",
        firstName: "Juan",
        lastName: "Vargas",
        typeReference: "personal",
        phoneFirst: "70564438",
        phoneTwo: "72986272",
        email: "jvargas@gmail.com",
        _created: "2021-06-24T17:38:11.720Z",
        _createdby: "josecarrillo8@gmail.com"
    },
    {
        clienteId: "702000432",
        firstName: "Pedro",
        lastName: "Bonilla",
        typeReference: "personal",
        phoneFirst: "70564438",
        phoneTwo: "72986272",
        email: "pbonilla@gmail.com",
        _created: "2021-06-24T17:38:11.720Z",
        _createdby: "josecarrillo8@gmail.com"
    }
]

export let payments = [
    {
        // _id: "0001",
        // loanId: 1,
        numCuota: 1,
        fechaPago: "5/29/2021",
        montoCuota: 1692.31,
        estado: "pendiente",    // pagado o pendiente
        formaPago: "efectivo"   // efectivo, cheque, deposito/transferencia/sinpeMovil
    }
]

export let wallet = [
    {
        id: "",
        nombre: "",
        city: "",
        _createAt: "",
        _updateAt: "",
        _createBy: ""
    }
]

export let users = [
    {
        id: "",
        username: "",
        password: "",
        nombre: "",
        nivel: "",  // role (administrador - cobrador)
        walletId: "",
        _createAt: "",
        _updateAt: "",
        _createBy: ""
    }
]

export let employees =  [
    {}
]

export let expenses = [
    {}
]

