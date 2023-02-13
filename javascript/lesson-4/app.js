const datum = new Date();
const godina = datum.getFullYear()
const mesec = datum.getMonth() + 1
const den = datum.getDate()
const sekundi = datum.getSeconds()

console.log(godina)
console.log(sekundi)
console.log(mesec + 1)
console.log(datum.getDate())
console.log(datum.getHours())
console.log(datum.getHours())
console.log(datum.getMinutes())


console.log(den + '.' + mesec + '.' + godina)

const godiniNaStarost = prompt('Kolku godini imate?');
console.log('Vie ste roden vo: ', 2023 - godiniNaStarost)

