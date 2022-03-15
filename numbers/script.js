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


// Number Object Methods
const lotsOfDecimals = 1.234567891023456789;
console.log(lotsOfDecimals.toFixed(3));

const userAgeString = "30";
const userAgeInt = Number(userAgeString);
console.log(typeof userAgeString, typeof userAgeInt);


/*
COMPARISON OPERATORS:
    ===	    Strict equality	Tests whether the left and right values are identical to one another	                5 === 2 + 4
    !==	    Strict-non-equality	Tests whether the left and right values are not identical to one another	        5 !== 2 + 3
    <	    Less than	Tests whether the left value is smaller than the right one.	                                10 < 6
    >	    Greater than	Tests whether the left value is greater than the right one.	                            10 > 20
    <=	    Less than or equal to	Tests whether the left value is smaller than or equal to the right one.	        3 <= 2
    >=	    Greater than or equal to	Tests whether the left value is greater than or equal to the right one.     5 >= 4


Note: You may see some people using == and != in their tests for equality and non-equality. 
These are valid operators in JavaScript, but they differ from ===/!==. 
The former versions test whether the values are the same but not whether the values' datatypes are the same. 
The latter, strict versions test the equality of both the values and their datatypes. 
The strict versions tend to result in fewer errors, so we recommend you use them.
*/


// + can be used as a unary operator to covert other datatypes to numbers
//  similar to Number() but shorter and cleaner
console.log(+true);
console.log(+'100');
console.log(+'');


let input1 = '1';
let input2 = '2';
console.log(input1 + input2);
console.log(+input1 + +input2);


// Weird Stuff with the Assignment Operator and more
let num1 = 1, num2 = 2, num3 = 3;
let result = num1 + (num2 *= num3);
console.log(num1, num2, num3, result);

a = b = c = 123;
console.log(a, b, c);

a = 2;
a *= 3 + 5;
console.log(a);     // returns 16 (i.e. 2 * (3 + 5)) because shorthand operators are lower in precedence

a = (1 + 2, 3 + 4);
console.log(a);