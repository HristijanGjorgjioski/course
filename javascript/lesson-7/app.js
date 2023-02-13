const zbor = 'Tastatura';
console.log(zbor.length)
console.log(zbor.toUpperCase(), '-- zbor.toUpperCase()') // mali -> golemi bukvi
console.log(zbor.toLowerCase(), '-- zbor.toLowerCase()') // golemi -> mali bukvi
console.log(zbor.trim(), '-- zbor.trim()') // gi brisi praznite mesta na pocetok i na kraj
console.log(zbor.trimEnd(), '-- zbor.trimEnd()') // gi brisi praznite mesta na kraj
console.log(zbor.trimStart(), '-- zbor.trimStart()') // gi brisi praznite mesta na pocetok

console.log(zbor.slice(1, 4), '-- zbor.slice(1, 4)') // presekuva odreden del od stringot vo zavsnost od indeksite sto gi prajkame
console.log(zbor.substring(2), '-- zbor.substring(2)') // isto kako slice samo negativnite brojki gi pretvara vo 0

const recenica = 'Jas sum dobar dobar programer!';

console.log(recenica.replace('dobar', 'najdobar'), "-- recenica.replace('dobar', 'najdobar')")
console.log(recenica.replaceAll('dobar', 'najdobar'), "-- recenica.replaceAll('dobar', 'najdobar')")

console.log(zbor.concat(" - ",recenica), '-- zbor.concat(" - ",recenica)') // ni spojuva 2 stringovi

console.log(recenica.charAt(5), '-- recenica.charAt(5)') // ja vrajka bukvata so index 5 


const splitRecenica = 'Mouse| Tastura| Monitor| Laptop';

console.log(
    splitRecenica
        .replaceAll(' ', '')
        .toUpperCase()
        .split('|')
)

