// ES6 - ECMAScript 2015

let str = 'ECMAScript tutorial';
console.log(str.includes('ECMA'))
console.log(str.startsWith("ECMAScr"))
console.log(str.endsWith("ljdkshfwe"))


const arrFrom = Array.from('ABVGDGDASWDSAFSAEWQE')
console.log(arrFrom)

const numbers = [4, 9, 16, 25, 29];
const firstNumber = numbers.find((number) => number > 10)
console.log(firstNumber)

const numIndex = numbers.findIndex((number) => number === 24)
console.log(numIndex, 'numIndex')

console.log(Number.isInteger(10.123))
