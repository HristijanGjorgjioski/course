console.log('Async/Await');

const getData = async () => {
    const result = await fetch('https://jsonplaceholder.typicode.com/users');
    const json = await result.json()
    console.log(json);
}
getData()
