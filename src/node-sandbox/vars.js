/*
 Hoisting / var / let / const
 */

// the following function call will work as expected as the full declaration of f() is hoisted
f();

// the following function call will throw TypeError: fe is not a function
// because at this point fe is just a variable with the value undefined
// fe();
console.log(fe); // undefined

// console.log(v1) // this will have the value of undefined even if the declaration is afterwards
var v1;

// the following line should throw a ReferenceError: L1 is not defined
// at this point we are in the Temporal DeadZone
// console.log(L1)
let L1; // undefined is assigned at this line, not before
console.log(L1) // all good - undefined is printed here

function f() {
    // this is a function DECLARATION
    console.log("function f")
}

// the binding between the variable fe and the function declaration takes place here due to the fact that fe is a var
var fe = function () {
    // this is a function EXPRESSION
    console.log("function fe")
}