// Create an Object
let userObject = {
    firstName: "Peyton",
    lastName: "Bechard",
    age: 29,
    location: "China",
    nationality: "Canada",
    "preferred language": "Python",
};

// Access and Change an Object's Properties
console.log(userObject.firstName);
userObject.firstName = "Michael";
console.log(userObject.firstName);
console.log(userObject["preferred language"]);

// Add New Properties
userObject.isAdmin = true;
console.log(userObject);

// Delete Properties
delete userObject.lastName;
delete userObject["preferred language"]; 
console.log(userObject);

// Square Brackets
let loc = "location";
console.log(userObject[loc]);   // var use doesn't work with the dot notation


let languages = {
    python: "Great choice!",
    java: "hm...",
};

let language = prompt("Python or Java?", "python");
alert(languages[language.toLowerCase()]);


// Shorthand 

function makeUser(name, email) {
    return {
        name,       // same as name: name,
        email,
    };
}

let user = makeUser("Johnny", 50)
console.log(user);

// Special Cases: Object key names have no limitations

let special = {
    0: "zero",
    let: "let",
    return: "return",
};

console.log(special[0], special["0"], special.let, special.return);

// Check for Property
console.log("let" in special);
console.log("for" in special);

// Looping
for (let key in userObject) {
    console.log(`${key}: ${userObject[key]}`);
}

// Ordering
let numbers = {
    "3": "three",
    "1": "one",
    "4": "four",
    "2": "two",
    "5": "five",
};

for (let prop in numbers) {
    console.log(prop, numbers[prop]);   // prints ordered list
}
// if the keys are non-integer, then they are listed in the creation order
