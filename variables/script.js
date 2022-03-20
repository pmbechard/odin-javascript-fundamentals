console.log("Hello world!");
console.log("Hello from the external JS file!");

let message = "Hello from a variable!";

console.log(message);
alert(message);

let x = 1, y = 2, z = 3;
console.log(x, y, z);
console.log("x + y + z = " + x + y + z)
console.log("x + y + z = " + (x + y + z))

let camelCase = "camelCase notation is the convention used in JavaScript";
alert(camelCase);

const dontChangeMe = "I am constant. You cannot change me!";
console.log(dontChangeMe);
/*
There is a widespread practice to use constants as aliases for 
difficult-to-remember values that are known prior to execution.
Such constants are named using capital letters and underscores.
For instance, let’s make constants for colors in so-called “web” 
(hexadecimal) format:
*/

const COLOR_RED = '#F00'
const COLOR_GOLD = '#BA4'

// The above constants are known BEFORE RUN-TIME


// Exercises
let name = "John";
let admin = name;
alert(admin);

let ourPlanetName = "Earth";
let currentUser = "John";

let BIRTHDAY = "31.05.1992";
