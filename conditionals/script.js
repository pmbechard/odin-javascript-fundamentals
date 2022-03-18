/*    CONDITIONALS    */

fizzBuzz(15);
fizzBuzz(9);
fizzBuzz(10);
fizzBuzz(7);

let myName = "Peyton";
if (myName == "Peyton") console.log("Hello, Peyton!");

function fizzBuzz(tester) {
    if (tester % 3 == 0 && tester % 5 == 0) {
        console.log("FizzBuzz");
    } else if (tester % 3 == 0) {
        console.log("Fizz");
    } else if (tester % 5 == 0) {
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

if (number % 3 == 0 || number % 5 == 0) {
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
} else if (user == "Admin") {
    let password = prompt("Password:")
    if (!password) {
        alert("Cancelled")
    } else if (password == "TheMaster") {
        alert("Welcome!")
    } else {
        alert("Wrong password.")
    }
} else {
    alert(`I don't know any ${user}s... Get out.`)
}


