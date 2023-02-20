console.log('DOM - Document Object Model')

const link = document.getElementById('link')
const button = document.getElementById('button')
const title = document.getElementById('h1-title');
const nameInput = document.getElementById('name_input');
title.innerText = 'Nov tekst'
title.style = "font-size: 75px; color: red; font-family: sans-serif"

console.log(document.querySelector('#h2-subtitle'))


link.setAttribute('href', 'facebook.com');
link.setAttribute('class', 'link-tag');
link.removeAttribute('href')
console.log(link.getAttribute('href'))
console.log(link.getAttribute('class'))

// nameInput.setAttribute("disabled", '')
console.log(nameInput)

const onClickFunc = () => {
    // alert('Hohooo')
    console.log('Button is clicked')
    title.style.color = 'greenyellow'
    console.log(nameInput.value)
}

nameInput.addEventListener("change", () => {
    console.log('Inputot e smenet')
})

button.addEventListener('click', onClickFunc)
// button.addEventListener('click', onClickFunc)
