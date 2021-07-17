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
// montoTotal: 22000,
// montoCuota: 1692.31

export const getAmountInteres = () => {
    console.log("Get amount interes")
}

export const getAmountTotal = () => {
    console.log("Get amount total")
}

export const getAmountFee = () => {
    console.log("Get amount Fee")
}

