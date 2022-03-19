// FUNCTIONS

console.log(funky());

function funky(parameter='Hello!') {
    let alteredParameter = parameter.replace('o', '');
    return alteredParameter;
}

// ANONYMOUS FUNCTIONS

document.addEventListener('keydown', function(event) { console.log(`You pressed ${event.key}`) });
// Notice the use of function() {...} rather than function name() {...}
// Similar to lambda in Python

// Arrow Functions
document.addEventListener('click', (event) => console.log('You clicked the mouse'));
// If the function only has one line in the curly brackets, you omit the curly brackets
// If the function only takes one parameter, you can also omit the brackets around the parameter

const textBox = document.querySelector('#textbox');
const output = document.querySelector('#output');

textBox.addEventListener('keydown', (event) => output.textContent = `You pressed: "${event.key}"`);


function scoping() {
    const y = 5;
    return y;
}

// console.log(y);
// ^ Throws an error

function getY() {
    y = scoping();
    return y;
}

console.log(getY());


const mathInput = document.querySelector('#math');
const mathOutput = document.querySelector('#math-output');
const calculateButton = document.querySelector('#calculate');

calculateButton.addEventListener('click', function() {
    const num = parseInt(mathInput.value);
    if (isNaN(num)) {
        mathOutput.textContent = "Invalid input. Please enter a number.";
    } else {
        mathOutput.textContent = `Square: ${num**2}  -  `;
        mathOutput.textContent += `Cube: ${num**3}  -  `;
        mathOutput.textContent += `Factorial: ${factorial(num)}`;
    }
});

function factorial(num) {
    if (num > 1) {
        return num * factorial(num - 1);
    } else {
        return num;
    }
}