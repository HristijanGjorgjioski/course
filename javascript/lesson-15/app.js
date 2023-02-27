const cars = ['Audi', 'BMW', 'Skoda', 'Toyota']

// forEach
cars.forEach((car, index) => {
    console.log(`${car}: ${index}`)
})

// map
const newCars = cars.map((car, index) => {
    if (index === 2) {
        return car = 'Golf'
    }
    return car
})
console.log(newCars)


// filter
const filteredCars = cars.filter((car) => car.length > 4)
console.log(filteredCars)
