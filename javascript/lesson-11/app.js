// THIS - keyword

const test = () => {
    console.log(this)
}
test()

function test1() {
    console.log(this)
}
test1()

const user = {
    name: 'User',
    age: 21,
    street: 'SADwqe 112',
    nameAge: function() {
        console.log(this)
        return this.name + this.age
    }
}

console.log(user.nameAge())
