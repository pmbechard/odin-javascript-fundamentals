/*          ARRAYS           */

// Creating Arrays
const cars = ["Audi", "Lexus", "BMW", "Mercedes"];
console.log(cars);

const friends = [
    "Jonathon",
    "Jacob",
    "Jacklyn",
    "Jerome",
];
console.log(friends);

// Starting with an empty list
const foods = [];
foods[0] = "Pizza";
foods[1] = "Hamburger";
foods[2] = "Tacos";
console.log(foods);

// Accessing Array Items
let foodChoice = foods[2];
console.log(foodChoice);

// Modifying Array Items
foods[1] = "Ribs";
console.log(foods);

// Adding Array Items
foods.push("Noodles");      
// foods[foods.length] = "Noodles";
// same as above ^^
console.log(foods);

// Removing Array Items
const stack = ["first", "second", "third"];
let next = stack.pop();
console.log(next);

const queue = ["first", "second", "third"];
let upNext = queue.shift();
console.log(upNext);

// Insert Array Items (at the beginning)
const numbers = [1, 2, 3, 4];
console.log(numbers);
numbers.unshift(0);
console.log(numbers);

// Concatenate Arrays
const part1 = ["one", "two", "three"];
const part2 = ["four", "five", "six"];
const part3 = ["seven", "eight", "nine"];
const combineTwoArrays = part1.concat(part2);
console.log(combineTwoArrays);
const combineThreeArrays = part1.concat(part2, part3);
console.log(combineThreeArrays);
const combineAll = combineThreeArrays.concat("ten");
console.log(combineAll);
// The concat() method does not change the existing arrays. It always returns a new array.

// Splicing
const spliceMe = ["a", "b", "c", "d", "e", "f"];
console.log(spliceMe);
spliceMe.splice(1, 2, "bc") // replaces b and c with bc
console.log(spliceMe);
// Removing Items with Splice
spliceMe.splice(3, 1);  // removes e
console.log(spliceMe);

// Slicing
const sliceMe = ["first", "second", "third", "fourth", "fifth", "sixth"];
const newSlice = sliceMe.slice(1, 4);
console.log(newSlice);      // >["second", "third", "fourth"]

// The first parameter defines the position where new elements should be added (spliced in).
// The second parameter defines how many elements should be removed.
// The rest of the parameters define the new elements to be added.


// A note on the 'new' keyword
// const cars = new Array("Audi", "Lexus", "BMW", "Mercedes");
// The above statement can be used to initialize the same list as above
// However, something like the list below has a different meaning:
// const numbers = new Array(10);
// The above array will be an array with 10 undefined elements

// Array Type
console.log(typeof foods);  // >object
// but JS arrays are different from objects...
// Compare to an object (which is more like a Python dictionary):
const myObj = {
    firstName: "Peyton", 
    lastName: "Bechard",
    age: 29,
};
console.log(myObj.firstName);
// Arrays can store objects
// So use these instead:
console.log(Array.isArray(foods));      // true
console.log(foods instanceof Array);    // true


// Methods and Properties of Arrays:
console.log(`Number of food items: ${foods.length}`);
console.log(cars.sort());
console.log(cars[cars.length - 1]); // cannot use [-1]
console.log(foods.toString());      // >Pizza,Ribs,Tacos,Noodles
console.log(foods.join(" + "));     // >Pizza + Ribs + Tacos + Noodles





/*          LOOPING         */

// For Loops
for (let i = 0; i < cars.length; i++) {
    console.log(`I want to buy a ${cars[i]}.`)
}

// For Each Loops
    // iterable.forEach(myFunc)
    // function myFunc(iter) { ... }

foods.forEach( (food) => console.log(`Let's eat some ${food.toLowerCase()}!`) );

friends.forEach(greetFriends);

function greetFriends(friend) {
    console.log(`Welcome, ${friend}! Thanks for coming.`)
}



