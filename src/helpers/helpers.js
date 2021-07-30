const MILISECONDS_BY_DAY = 1000 * 60 * 60 * 24

const options = {
    timeZone: 'America/Costa_Rica',
    dateStyle: 'full',
    hour12: true
}

export const daysInMonth = (month, year) => new Date(year, month, 0).getDate()


export const getCurrentDate = () => {
    const date = new Date()
    return date.toLocaleString('en-UK', options)
}

export const getDateOfPayments = (date, days) => {
    let semanaEnMs = MILISECONDS_BY_DAY * days
    let sumDay = new Date(date).getTime() + semanaEnMs
    let datePayments = new Date(sumDay)

    return datePayments.toLocaleString('en-UK', options)
}

/****************************** 
** CALCULOS DE LOS PRESTAMOS **  
*******************************/
// montoCredito: 16384,
// interes: 32.00,
// numCuotas: 4
// montoInteres: 5242.88, 
// montoTotal: 21626.88,
// montoCuota: 5406.72 

export const loanCalculate = (montoCredito, interes, numCuotas = 0) => ({
    getAmountInteres: function() {
        return (montoCredito * interes) / 100
    },
    getAmountTotal: function() {
        return montoCredito +  ((montoCredito * interes) / 100)
    },
    getAmountFee: function() {
        return this.getAmountTotal() / numCuotas
    }
})

export const getPayments = (loans, status = 'pago') => {
    let feeList = []
    
    if(loans.length){
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


