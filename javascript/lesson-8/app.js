const fruits = ["Banana", "Orange", "Apple", "Mango"];
const cars = ["Golf", "Audi", "Skoda"];

fruits.pop() // brisi element na krajot
fruits.push("Kiwi") // dodava element na krajot
fruits.shift() // brisi element na pocetok
fruits.unshift("Lemon") // dodava element na pocetok

const concatedArrs = cars.concat(fruits, ["Mouse", "Keyboard"])

const sliceArr = fruits.slice(1, 2)

console.log(fruits)
console.log(concatedArrs)
console.log(sliceArr, '-- sliceArr')
