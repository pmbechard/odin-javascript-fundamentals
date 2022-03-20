// 8 DATATYPES IN JAVASCRIPT
// JavaScript is dynamically typed, meaning the type of a variable is not static



/* 1. NUMBERS */

// represents both integer and floating point numbers, as well as Infinity, -Infinity, and NaN (Not a Number)
let integer = 5;
console.log(integer);
let floatingPoint = 5.5;
console.log(floatingPoint);
let inf = 1 / 0;
console.log(inf);
let negInf = -1 / 0;
console.log(negInf);
let notANumber = 1 / "A";
console.log(notANumber);
// if there’s a NaN somewhere in a mathematical expression, 
// it propagates to the whole result (there’s only one exception to that: NaN ** 0 is 1).



/* 2. BIGINT */

// In JavaScript, the “number” type cannot represent integer values larger than (2**53-1), or less than -(2**53-1)
const bigInt = 1234567890123456789012345678901234567890n;   // note the `n` at the end
console.log(typeof bigInt);



/* 3. STRING */
let message = "Hello";
let words = 'these are some words';
let embed = "phrase";

// Backticks are “extended functionality” quotes.
let phrase = `this is a ${embed}`;
console.log(phrase);
console.log(`${message}`);
console.log (`1 + 2 = ${1 + 2}`);
console.log(`Multi-line
Strings!`);

// Methods and Properties (find all at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
console.log(`Length of message: ${message.length}`);

console.log(`Slice of message: ${message.slice(2, 4)}`);
console.log(`Slice of message: ${message.slice(1, -2)}`);
console.log(`Slice of message: ${message.slice(-3)}`);
// substring() cannot use negative indices
console.log(`Substring of message: ${message.substring(1, 4)}`);
console.log(`Substring of message: ${message.substring(3)}`);
// substr()'s second parameter specifies the length of the extracted part.
console.log(`Substr of message: ${message.substr(1, 3)}`);  // deprecated

message = "This method replaces something and returns a new string";
let newMessage = message.replace("This method", ".replace()");
console.log(message);
console.log(newMessage);

let question = "Does it replace all instances of that something?";
let answer = question.replace("a", "A");
let altAnswer = question.replace(/a/g, "A");
console.log(question);
console.log(answer);
console.log("Nope! But it can if you use //...//g! (See below)");
console.log(altAnswer)
let question2 = "Is It CaSe SeNsItIvE? mAyBe!";
let answer2 = question2.replace(/MAYBE/i, "Yes, but you can use //...//i to make it case insensitive!");
console.log(question2);
console.log(answer2);



/* 4. BOOLEAN */
let yes = true;
let no = false;

let greaterThan = 5 > 4;
console.log(greaterThan);



/* 5. NULL */
// In JavaScript, null is not a “reference to a non-existing object” or a “null pointer” like in some other languages.
// It’s just a special value which represents “nothing”, “empty” or “value unknown”.

let nothing = null;
console.log(nothing);



/* 6. UNDEFINED */
// The meaning of undefined is “value is not assigned”.
// If a variable is declared, but not assigned, then its value is undefined.

let notDecidedYet;
console.log(notDecidedYet);
// Normally, one uses null to assign an “empty” or “unknown” value to a variable, 
// while undefined is reserved as a default initial value for unassigned things.



/* 7. OBJECTS */
// The object type is special.
// All other types are called “primitive” because their values can contain only a single thing 
// (be it a string or a number or whatever). 
// In contrast, objects are used to store collections of data and more complex entities.



/* 8. SYMBOLS */
// The symbol type is used to create unique identifiers for objects. 
// We have to mention it here for the sake of completeness, but also postpone the details till we know objects.