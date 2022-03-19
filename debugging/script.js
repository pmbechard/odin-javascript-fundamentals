/*      DEBUGGING       */

console.log('Before the line-of-code breakpoint');
debugger;
console.log('After the line-of-code breakpoint');

function tester() {
    console.log('This is a test for a function breakpoint:');
    console.log('\tIf the debugger stopped before these logs, test was successful.');
}

// Function debugger not working. Cannot find solution...
// debug(tester);
// tester();

