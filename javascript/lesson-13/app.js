const result = document.querySelector('#result')
const passLength = document.querySelector('#length')
const passLengthResult = document.querySelector("#length-result");
const includeNumbers = document.querySelector("#numbers");
const includeSymbols = document.querySelector("#symbols");
const generateBtn = document.querySelector("#generate");
const copyPass = document.querySelector("#copy");

passLength.addEventListener("change", (event) => {
    passLengthResult.innerText = event.target.value;
})

const getRandomLowerChars = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

const getRandomNumber = () => {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

const getRandomSymbol = () => {
    const symbols = "!@#$%^&*(){}[]=<>/,.";
    return symbols[Math.floor(Math.random() * symbols.length)]
}

const generatePassword = (number, symbol, length) => {
    let generatedPassword = '';
    let variationsCount = [number, symbol].length;

    for (let i = 0; i < length; i += variationsCount) {
        if (number) {
            generatedPassword += getRandomNumber()
        }
        if (symbol) {
            generatedPassword += getRandomSymbol()
        }
        generatedPassword += getRandomLowerChars()
    }

    const finalPassowrd = generatedPassword.slice(0, length)
    return finalPassowrd;
}

generateBtn.addEventListener("click", () => {
    result.value = generatePassword(includeNumbers.checked, includeSymbols.checked, passLength.value)
})

copyPass.addEventListener("click", () => {
    result.select();
    navigator.clipboard.writeText(result.value)

    const notification = document.createElement("div");
    notification.classList.add("alert")
    notification.textContent = 'Copied!'
    document.body.appendChild(notification)

    setTimeout(() => {
        notification.style.display = 'none';
    }, 1200)

    return result;
})

document.addEventListener("DOMContentLoaded", () => {
    passLength.value = 16;
    passLengthResult.innerText = 16;
    result.value = generatePassword(true, true, 16)
})
