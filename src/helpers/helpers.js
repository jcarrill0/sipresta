const options = {
    timeZone: 'America/Costa_Rica',
    dateStyle: 'full',
    timeStyle: 'medium',
    hour12: true
}

export const getDayMonth = (year, month) => {
    return new Date(year, month, 0).getDate()
}

export const getCurrentDate = () => {
    // navigator.language
    const date = new Date()

    return date.toLocaleString('en-UK', options)
}

export const getDateOfPayments = (date, days) => {
    let semanaEnMs = 1000 * 60 * 60 * 24 * days
    let sumDay = new Date(date).getTime() + semanaEnMs
    let datePayments = new Date(sumDay)

    return datePayments.toLocaleString('en-UK', options)
}

