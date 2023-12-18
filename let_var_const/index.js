// ********** Scope of var, let and const ******

/**
 * var is function scope, let and const are block scope
 */

{
    const a = 10;
}
// console.log(a) // ReferenceError: a is not defined


// variable shadwoing

function test () {
    let a = "hello";
    if(true){
        let a = "hi"
        console.log(a)
    }
    console.log(a);

}
// test()


// ******************  Declaration *******************

var a; // we can re declare with var keyword in same scope
var a; // we can re declare with var keyword in same scope



// let b; // cannot re-declare block-scoped variable b in same scope
// let b; // cannot re-declare block-scoped variable b in same scope



// const c; // we cannnot re declare with const keyword in same scope
// const c; // declaration must be initialize if use const keyword

/**
 *  here we are declare a variable using let keyword in two scope.
 * 
        let a;
        {
            let a;
        }
It is allowed;

**/ 

// **********  Declaration without initialisation ***********

/**
    var a;  // we can declare without initialisation
    let a; // we can declare withou initialisation
    const a; // we can not const declaration without initialastion
 */



// **************** Hoisting ****************

/**
 *  During the creation phase js engine moves your varialbes and function declaration to
 *  top of you code. This is know as hoisting.
 * 
    console.log(count) // undefined
    var count = 1;

    console.log(count) // ReferenceError: Cannot access 'count' before initialization
    let count = 1; 
    still let is hoisted why let's talk about

    Temporal deadzone:-  is a specific period in the execution of JavaScript code 
    where variables declared with let and const exist but cannot be accessed 
    or assigned any value.

    function abc () {
        console.log(a,b,c) // ReferenceError: Cannot access 'b' before initialization
        const c = 30;
        let b = 20;
        var a = 10;
    }
    abc()
 *  
 */
















