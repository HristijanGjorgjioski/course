const globalnaPromenliva = 40;

zbir(2)
function zbir(broj1 = 5, broj2 = 10) {
    if (broj1 === undefined || broj2 === undefined) {
        return console.log('Ve molime ispratete dva broevi')
    }

    console.log(broj1, '<== broj1')
    console.log(broj2, '<== broj2')
    console.log(globalnaPromenliva, '<== globalnaPromenliva')
    // code-block
    const a = 10;
    const b = 20;

    const vnatresnaFunkcija = () => {
        const vPromenliva = 'Vnatresna promenliva'
        console.log(vPromenliva, 'vPromenliva')
        return console.log(a + b, 'vnatresnaFunkcija')
    }
    vnatresnaFunkcija()
    return console.log(broj1 + broj2);
}

const mnozenje = function (broj1) {
    zbir(broj1, 78)
    return console.log(broj1 * 8);
}
mnozenje(14)

// arrow function
const odzemanje = () => {
    return console.log(3 - 6)
}
odzemanje();

console.log('======================')

function varLet() {
    if (3 > 2) {
        var varPromenliva = 'var';
        let letPromenliva = 'let';

        console.log(varPromenliva);
        console.log(letPromenliva);
    }
    
    console.log(varPromenliva);
    // console.log(letPromenliva);

    var x = 1;

    if(5 < 6) {
        let x = 5;
        console.log(x, '<--- X')
    }

    console.log(x, '<--- X')
}
varLet()
