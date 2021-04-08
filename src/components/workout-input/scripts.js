function getDateInInputFormat() {
    let today = new Date()
    let aux = {
        day: today.getDate(),
        month: today.getMonth() + 1,
        year: today.getFullYear()
    }
    if (aux.month.toLocaleString().length !== 2) {
        aux.month = '0' + aux.month
    }
    if (aux.day.toLocaleString().length !== 2) {
        aux.day = '0' + aux.day
    }
    return aux.year+'-'+aux.month+'-'+aux.day
}

export default getDateInInputFormat