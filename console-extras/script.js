const p = document.querySelector('p');
p.addEventListener('click', changeColor)

function changeColor() {
    if (p.style.color == 'green') {
        p.style.color = 'black';
        p.style.fontSize = '16px';
    } else {
       p.style.color = 'green';
        p.style.fontSize = '50px';
    }
}

// Formatting in the console log
console.log('Hello, I am a %s string', '💩');    // ctrl+cmd+space for emoji menu
console.log('%c I am styled!', 'font-size: 25px; background: red; font-family: Verdana;');

// Console notifications
console.warn('Be careful now, ya hear?');
console.error('Catch!');
console.info('If ya don\'t know, now ya know');

// Testing
console.assert(1 == 1, 'This will not print because the assertion results in \'true\'.');
console.assert(1 == 2, 'This will print because the assertion results in \'false\'.');

// Clear
console.clear();

// Logging DOM Elements
console.log(p);
console.dir(p);

// Grouping
console.group('group1');
console.log('1. In the group! 😃');
console.log('2. In the group! 😃');
console.log('3. In the group! 😃');
console.log('4. In the group! 😃');
console.log('5. In the group! 😃');
console.groupEnd('group1');
console.log('Not in the group 😔');

console.groupCollapsed('group2');
console.log('1. In the group! 😃');
console.log('2. In the group! 😃');
console.log('3. In the group! 😃');
console.log('4. In the group! 😃');
console.log('5. In the group! 😃');
console.groupEnd('group2');
console.log('Not in the collapsed group 😔');

// Counting
console.count('Hi');
console.count('Hi');
console.count('Ho');
console.count('Hi');
console.count('Ho');
console.count('Ho');
console.count('Hi');
console.count('Hi');
console.count('Hi');
console.count('Hi');
console.count('Ho');
console.count('Ho');
console.count('Hi');
console.count('Hi');
console.count('Ho');

// Timing

console.time('sleeper timer');
sleeper(3);

function sleeper(ms) {
    setTimeout(() => {  console.timeEnd('sleeper timer'); }, 2000);
}

// Arrays can be displayed in tables using console.table()