const langs = ['JS', 'Ruby', 'C++', 'C', 'Python'];

for (let index = 0; index < langs.length; index++) {
    console.log('Programski jazik: ' + langs[index])
}


let i = 0;
while (i < langs.length) {
    console.log(i + ':' + ' ' + langs[i])
    console.log(i)
    i++;
}

let broj = 9;
do {
    console.log(broj, '<== BROJ')
    broj--;
} while (broj > 0)
