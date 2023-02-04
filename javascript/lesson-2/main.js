// if / else / switch

const a = 5;
const b = 7;

if (a !== 5) {
    // code-block
    console.log('sega sme vo IF')
} else {
    // code-block
    console.log('sega sme vo ELSE')
}

const godini = prompt("Kolku godini imate?");

if (godini >= 18) {
    if (godini <= 90) {
        console.log('Mozete da kupite alkohol');
    } else {
        console.log('Nevaliden input!')
    }
} else if (godini <= 17) {
    if (godini >= 1) {
        console.log('Ne mozete da kupite alkohol')
    } else {
        console.log('Nevaliden input!')
    }
} else {
    console.log('Nevaliden input!')
}

if (godini >= 18 && godini <= 90) {
    console.log('Mozete da kupite alkohol')
} else if (godini >= 1 && godini <= 17) {
    console.log('Ne mozete da kupite alkohol')
} else {
    console.log('Nevaliden input!')
}

switch (true) {
    case godini >= 18 && godini <= 90:
        console.log('Mozete da kupite alkohol - SWITCH');
        break;
    case godini >= 1 && godini <= 17:
        console.log('Ne mozete da kupite alkohol - SWITCH')
        break;
    default:
        console.log('Nevaliden input! - SWITCH')
}
