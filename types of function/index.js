// Types of functions 

// 1. function Declaration or named function

function add (a, b) {
    return a+b;
  }
  
  
  // 2. function expression
  // when we store a function inside a variable it is called function express
  
  const second = function addition (a, b) {
    return a+b;
  }
  
  // 3. Annonymouse function. A function without name is called annonymous function
  
  const third = function (a, b) {
    return a + b;
  }
  
  // 4. Arrow function
  
  const forth = (a, b) => a + b;
  /*
  const forth = (a, b) => {
    return a+b;
  }
  Note: when we use curly brace we explicitly use return keyword;
  */
  
  
  // 5. IIFE Imediately invoke function expression
  // we if want to return the value from iife function we can store that function inside an variable
  // and then print that variable for  the output
  (function (a, b) {
    console.log(a+b)
    // return a+b
  })(2, 4)