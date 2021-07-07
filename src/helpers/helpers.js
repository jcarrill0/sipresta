export const getCurrentDate = () => {
    const options = {
        timeZone: 'America/Costa_Rica',
        dateStyle: 'full',
        timeStyle: 'medium',
        hour12: true
    }
    // navigator.language
    const now = new Date()
    const date = now.toLocaleString('en-UK', options)

    return date
}