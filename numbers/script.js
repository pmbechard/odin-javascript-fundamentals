// NUMBERS

let x = 5; 
console.log(x);     // 5
console.log(x++);   // 5
console.log(x);     // 6
console.log(++x);   // 7

let y = 50 + 100 * x;
console.log(y);

let z = 5;
console.log(y / z)

let a = 3;
console.log(z / a);

/*
JavaScript has only one type of number. 
Numbers can be written with or without decimals.
*/

let b = 123e5;
console.log(b);
let c = 123e-5;
console.log(c);

let inaccurate = 0.2 + 0.1;
console.log(inaccurate);
let accurate = (0.2 * 10 + 0.1 * 10) / 10;
console.log(accurate);

x = 10;
y = 20;
z = "30";
console.log(x + y + z)

// JavaScript will try to convert strings to numbers in all numeric operations:

x = "100";
y = "10";
console.log(x / y);
// But this will not work because of concatenation:
console.log(x + y);

let notANumber = 100 / "Apple";
console.log(notANumber);
console.log(isNaN(notANumber));
// Watch out for NaN. If you use NaN in a mathematical operation, 
// the result will also be NaN

console.log(typeof notANumber); // returns number
console.log(typeof isNaN(notANumber));

let infinity = 10 / 0;
console.log(infinity);
console.log( typeof infinity);
// can also have -Infinity

// JavaScript interprets numeric constants as hexadecimal if they are preceded by 0x.
let hex = 0xFF;             
console.log(typeof hex);    // number

// The toString() method can output numbers from base 2 to 36
let base10 = 32;
console.log("Binary (base2) of " + base10 + " (base10) = " + base10.toString(2))

// Number objects can be created with the new keyword

let numberObject1 = new Number(123);
let numberObject2 = new Number(123);
let numberObject3 = 123;
console.log(numberObject1 == numberObject2);    // false
console.log(numberObject1 === numberObject2);    // false
console.log(numberObject1 == numberObject3);    // true
console.log(numberObject1 === numberObject3);    // false
