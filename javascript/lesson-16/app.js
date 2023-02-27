const mainDiv = document.getElementById('main-div')

const names = ['John', 'Marry', 'Christ', 'Michael']

// names.forEach((name) => {
//     const h1 = document.createElement('h1');
//     h1.innerText = name;
//     mainDiv.appendChild(h1);
// })

const users = [
    {
        name: 'John',
        age: 25,
        gender: 'M'
    },
    {
        name: 'Joshua',
        age: 21,
        gender: 'M'
    },
    {
        name: 'Merry',
        age: 32,
        gender: 'F'
    },
]

users.map((user) => {
    const itemDiv = document.createElement('div');
    const name = document.createElement('h3');
    const age = document.createElement('p');
    const gender = document.createElement('p');

    name.innerText = user.name;
    age.innerText = user.age;
    gender.innerText = user.gender;

    itemDiv.appendChild(name)
    itemDiv.appendChild(age)
    itemDiv.appendChild(gender)

    mainDiv.appendChild(itemDiv)
})
