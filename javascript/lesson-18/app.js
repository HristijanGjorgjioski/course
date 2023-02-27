const car = {
    model: 'Audi A3',
    color: 'White',
    hp: 140,
    engine: '2.0 TDI'
}

const test = 'color'
console.log(car[test], '<== car[test]')

console.log(Object.values(car), '<== Object.values(car)')
console.log(Object.entries(car), '<== Object.entries(car)')
console.log(Object.keys(car), '<== Object.keys(car)')

const nightclub = {
    dave: 26,
    sally: 23,
    mike: 19,
    lucy: 19,
}
const isOldEnough = Object.values(nightclub).every((element) => element >= 18);
console.log(isOldEnough, '<== isOldEnough')

const isOldEnoughSome = Object.values(nightclub).some((element) => element < 15);
console.log(isOldEnoughSome, '<== isOldEnoughSome')

const numbersRegEx = /^[0-9]*$/;
const number = '123123123';
console.log(numbersRegEx.test(number), '<== numbersRegEx.test(number)')
