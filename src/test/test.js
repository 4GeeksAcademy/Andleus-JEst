
const { sum } = require('../app.js');
const { fromDollarToYen } = require('../changeCurrency.js');
const { fromEurosToDollar } = require('../changeCurrency.js');
const { fromYenToPound } = require('../changeCurrency.js');
test('adds 1 + 2 to equal 3', () => {
    let total = sum(1,2);

    expect(total).toBe(3);
});



test('300 dollars to yen equals to 44877', () => {
    let result = fromDollarToYen(300);

    expect(Math.floor(result)).toBe(43878);
})

test('100 euros to dollars equals to 44877', () => {
    let result = fromEurosToDollar(100);

    expect(Math.floor(result)).toBe(107);
})

test('500 yen to pound sterling equals to 44877', () => {
    let result = fromYenToPound(500);

    expect(Math.round(result*100) / 100).toBe(2.78);
})