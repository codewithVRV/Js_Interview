// *****************  Function ****************

/**
 * 
 *     1. function declaration
 *  
 *      functin neha (num){
 *           return num*num
 *      }
 * 
 *    2. What is function expression 
 *     when a function is assigned to a variable
 *     
 *      const square = function (n){
            return n*n
        }

     3. First class function 
     when functions in that language are treated like any other variable. 
     For example, a function can be passed as an argument to other functions, 
     can be returned by another function and can be assigned as a value to a variable.

     function square (n) {
        return n*n;
    }

    function displaySquare (fn){
        console.log("Square is", fn(5))
    }

    displaySquare(square)


    4. IIFE function

    (function sum(n){
        console.log(n*n)
    })(5)
 *  
    5.  function Scope

    var num1 = 20, num2 = 3, num3 = "vishnu"
    function multiply(){
        return num1 * num2;
    }
    console.log(multiply())

    function getScore () {
        var num1 = 2, num2 = 3;
        function add() {
            return num3 + " scored " + (num1 + num2)
        }
        return add()
    }

    console.log(getScore())

    6. function scope o/p based question
    for(let i = 0; i < 5; i++){
    setTimeout(function () {
        console.log(i)
    }, i*1000)
    
    output is 0, 1, 2, 3, 4

    for(var i = 0; i < 5; i++){
    setTimeout(function () {
        console.log(i)
    }, i*1000)
    
    output is 5, 5, 5, 5, 5

    7. function Hoisted top of the code before execution
    neha()
    function neha (){
        console.log("hey, vishnu")
    }

    8. Tricky questions
    var x = 20;
    function neha () {
        console.log(x)
        var x = 20;
    }

    neha() // undefined


    9. callback function
    A callback function is a function passed into another function as an argument, 
    which is then invoked inside the outer function to complete 
    some kind of routine or action.

    function greeting () {
        console.log("hello vishnu")
    }
    function receiveGreetings (callback) {
        callback()
    }
    receiveGreetings(greeting)
    }

    10. Arrow function. Introuduced in ES6 version
    11. Regular vs Arrow function

    1. we have to explicitly return form regular function when we return implicityly in arrow
    2. we have access of arguments in regular function whenever we don't have access of it.
    3. we don't use this keyword with arrow function becuase it's point to global scope.

 */











