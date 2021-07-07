export const getCurrentDate = () => {
    const options = {
        timeZone: 'America/Costa_Rica',
        dateStyle: 'long',
        timeStyle: 'short',
        hour12: true
    }
    // navigator.language
    const date = now.toLocaleString('en-UK', options)

    return date
}