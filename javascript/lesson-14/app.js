// FizzBuzz Vezba: 
// Ispecati gi broevite od 1 do 100
// dokolku brojot se deli so 3 ispecati "Fizz"
// dokolku brojot se deli so 5 ispecati "Buzz"
// dokolku brojot se deli so 3 i so 5 vo isto vreme ispecati "FizzBuzz"
// dokolku ne se deli ni so 3 ni so 5 ispecati go samo brojot

// for (let i = 0; i <= 100; i++) {
//     if (i % 15 === 0) console.log(i ,'- FizzBuzz');
//     else if (i % 3 === 0) console.log(i, '- Fizz');
//     else if (i % 5 === 0) console.log(i, '- Buzz');
//     else console.log(i)
// }


// Vezba:
// Ispecati gi broevite od 1 do 100
// dokolku brojot e paren ispecati "Paren"
// dokolku brojot e neparen ispecati "Neparen"

for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i, "Paren broj");
    } else {
        console.log(i, "Neparen broj")
    }
    // if (i % 3 === 0) {
    //     console.log(i, "Neparen broj")
    // }
}
