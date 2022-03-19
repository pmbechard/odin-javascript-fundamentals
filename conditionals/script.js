/*    CONDITIONALS    */

fizzBuzz(15);
fizzBuzz(9);
fizzBuzz(10);
fizzBuzz(7);

let myName = "Peyton";
if (myName == "Peyton") console.log("Hello, Peyton!");

function fizzBuzz(tester) {
    if (tester % 3 === 0 && tester % 5 === 0) {
        console.log("FizzBuzz");
    } else if (tester % 3 === 0) {
        console.log("Fizz");
    } else if (tester % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(tester);
    }
}

/*  LOGICAL OPERATORS   */

let number  = 9;

if (number > 0 && number <= 100) {
    console.log(`Valid input: ${number}`);
}

if (number % 3 === 0 || number % 5 === 0) {
    console.log(`Valid FizzBuzz: ${number}`);
}

console.log(1 || 0);    // Notice the return value is 1, not true
// For each operand, converts it to boolean. If the result is true, stops and returns the original value of that operand.

console.log(0 || "" || null || undefined);
// If all operands have been evaluated (i.e. all were false), returns the last operand.

true || console.log("Not printed");
false || console.log("Printed");

console.log(1 && null && 0);    // returns first falsy value (null)
console.log(1 && "1" && true);  // returns last truthy value is all evaluate as true


// Precedence of AND && is higher than OR ||


if (!false) {
    console.log(!!"True");          // !! converts a value to its boolean form
    console.log(Boolean("True"));   // same with this
}


// Exercise
let user = prompt("Who's there?")
if (!user) {
    alert("Cancelled")
} else if (user === "Admin") {
    let password = prompt("Password:")
    if (!password) {
        alert("Cancelled")
    } else if (password === "TheMaster") {
        alert("Welcome!")
    } else {
        alert("Wrong password.")
    }
} else {
    alert(`I don't know any ${user}s... Get out.`)
}

// Working with the HTML
const select = document.querySelector('select');
const para = document.querySelector('p');

select.addEventListener('change', setWeather)

function setWeather() {
    const choice = select.value;
  
    if (choice === 'sunny') {
      para.textContent = 'It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.';
    } else if (choice === 'rainy') {
      para.textContent = 'Rain is falling outside; take a rain coat and an umbrella, and don\'t stay out for too long.';
    } else if (choice === 'snowing') {
      para.textContent = 'The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.';
    } else if (choice === 'overcast') {
      para.textContent = 'It isn\'t raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.';
    } else {
      para.textContent = '';
    }
}


// SWITCH STATEMENTS

let grade = 'C';

switch (grade) {
    case 'A':
        console.log('80-100%');
        break;
    case 'B':
        console.log('70-79%');
        break;
    case 'C':
        console.log('60-69%');
        break;
    case 'D':
        console.log('50-59%');
        break;
    default:
        console.log('under 50%');
}



// TERNARY OPERATOR

let isWeekend = true;
(isWeekend) ? console.log('It\'s the weekend!') : console.log('It\'s a weekday.');
// (condition) ? run if true : run if false;


// Ternary acting as an if...else
let age = prompt('age?', 18);

let message = (age < 3) ? 'Hi, baby!' :
  (age < 18) ? 'Hello!' :
  (age < 100) ? 'Greetings!' :
  'What an unusual age!';

alert( message );

