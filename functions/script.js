// FUNCTIONS

console.log(funky());

function funky(parameter='Hello!') {
    let alteredParameter = parameter.replace('o', '');
    return alteredParameter;
}

/*        THREE TYPES OF FUNCTIONS        */

// 1. function declarations
function example1(a, b) {
    return a + b;
}

// 2. function expressions
let example2 = function(a, b) { return a + b };

// 3. arrow functions
let example3 = (a, b) => a + b;

console.log(example1(1, 2), example2(2, 3), example3(3, 4));


// ANONYMOUS FUNCTIONS (AKA FUNCTION EXPRESSIONS)

document.addEventListener('keydown', function(event) { console.log(`You pressed ${event.key}`) });
// Notice the use of function() {...} rather than function name() {...}
// Similar to lambda in Python

let myAlert = function() { alert('Hello!') };
alert(myAlert); // prints the function code
myAlert();
let alertCopy = myAlert;
alertCopy();

function ask(question, yes, no) {
    (confirm(question)) ? yes() : no();
}

ask(
    'Do you agree?', 
    function() { alert('You agreed.') }, 
    function() { alert('You didn\'t agree.') 
});

// Arrow Functions
document.addEventListener('click', (event) => console.log('You clicked the mouse'));
// If the function only has one line in the curly brackets, you omit the curly brackets
// If the function only takes one parameter, you can also omit the brackets around the parameter

// arrow function with no parameters:
let greet = () => alert('Howdy!');

// multiline arrow function:
let sum = (a, b) => {
    let result = a + b;
    return result;
};


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

/*
Extra Notes: 
    - Functions can be called without arguments, but the function's parameters will be marked as undefined
    - Functions with no/empty return value return undefined
*/