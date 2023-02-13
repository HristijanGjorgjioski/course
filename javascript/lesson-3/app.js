const cars = [
    'Audi',
    'Golf',
    'Honda',
    'BMW',
    124,
    ['Gumi', 'Volan', 5],
    true,
    false,
    { name: 'Ford', color: 'Red' }
]
console.log(cars[1] + ' - Kola')

// cars[5] = 'Skoda'
// cars[8] = 'Opel'
cars[153] = 'Ford'

console.log(cars)

const car1 = cars[0];
console.log(car1)

const audi = {
    name: 'A3',
    volan: 'Carbon',
    hp: 150,
    sedista: ['Plavi', 'Kozeni'],
    isNewModel: false
}

console.log(audi)