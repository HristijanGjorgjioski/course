const mainDiv = document.getElementById('main-div');

fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => {
        users.map((user) => {
            const itemDiv = document.createElement('div');
            const name = document.createElement('h3');
            const phone = document.createElement('h5');

            itemDiv.classList.add("item-div")
            name.innerText = user.name;
            phone.innerText = user.phone;

            itemDiv.appendChild(name)
            itemDiv.appendChild(phone)

            mainDiv.appendChild(itemDiv)
        })
      });
    

const firstPromise = new Promise((resolve, reject) => {
    const a = 10;
    if (a > 5) {
        return resolve(`${a}: Ova e A`);
    }
    return reject('Ovaj promise e odbien!');
})

firstPromise
    .then((message) => console.log(message))
    .catch((error) => console.log(`Error: ${error}`))

