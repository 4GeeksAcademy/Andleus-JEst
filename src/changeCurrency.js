

let oneEuroIs = {
    "JPY": 156.5,
    "USD": 1.07,
    "GBP": 0.87
}


const fromDollarToYen = (dollars) => {
    return (dollars / oneEuroIs.USD) * oneEuroIs.JPY;   
}


const fromEurosToDollar = (euros) => {
    return euros * oneEuroIs.USD;   
}

   
const fromYenToPound = (yenes) => {
    return (yenes / oneEuroIs.JPY) * oneEuroIs.GBP;   
}

module.exports = {fromDollarToYen, fromEurosToDollar, fromYenToPound};