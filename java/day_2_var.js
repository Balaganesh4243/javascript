VARIABLE:
Variable is a container for storing values. It is also used for accessing and manipulating data.

TYPES OF VARIABLES IN JAVASCRIPT:
// There are three types of variables in JavaScript:
1. var
2. let
3. const

// var: It is used to declare a variable that can be re-declared and re-assigned. It has function scope or global scope.
// let: It is used to declare a variable that cannot be re-declared but can be re-assigned. It has block scope.
// const: It is used to declare a variable that cannot be re-declared and re-assigned. It has block scope.

// The main difference between var, let, and const is their scope and re-declaration/assignment behavior.
// var is function-scoped or globally-scoped, while let and const are block-scoped.
// let allows re-assignment but not re-declaration, while const does not allow either re-assignment or re-declaration.

EXAMPLES:

// Example of var, let, and const:
var x = 10; // var can be re-declared and re-assigned
let y = 20; // let can be re-assigned but not re-declared
const z = 30; // const cannot be re-declared or re-assigned

// Example of scope:
function example() {
var a = 10; // var is function-scoped
let b = 20; // let is block-scoped
if (true) {
    var c = 30; // var is still accessible here
    let d = 40; // let is not accessible outside this block
}
console.log(a); // 10
console.log(b); // 20
console.log(c); // 30
// console.log(d); // ReferenceError: d is not defined
}

// Example of re-declaration and re-assignment:
var e = 50; // var can be re-declared
var e = 60; // re-declaration is allowed
let f = 70; // let can be re-assigned
f = 80; // re-assignment is allowed
// const g = 90; // const cannot be re-declared or re-assigned
// const g = 100; // SyntaxError: Identifier 'g' has already been declared
// g = 110; // TypeError: Assignment to constant variable
// console.log(e); // 60
// console.log(f); // 80
// console.log(g); // 90


RULES FOR NAMING VARIABLES:
// 1. Variable names can contain letters, digits, underscores (_), and dollar signs ($).
// 2. Variable names must start with a letter, underscore (_), or dollar sign ($).
// 3. Variable names cannot start with a digit.
// 4. Variable names are case-sensitive (e.g., myVar and myvar are different variables).
// 5. Variable names cannot be a reserved keyword (e.g., var, let, const, function, if, else, etc.).
// 6. Variable names should be descriptive and meaningful to improve code readability.
// 7. Variable names should not contain spaces or special characters (except for underscores and dollar signs).
// 8. Variable names should not exceed a reasonable length to maintain clarity and avoid confusion.
// 9. It is a good practice to use camelCase for variable names (e.g., myVariableName) for better readability.
// 10. Avoid using single-letter variable names except for loop counters or temporary variables (e.g., i, j, k).
