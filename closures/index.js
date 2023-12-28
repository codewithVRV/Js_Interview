//  ***************  Clousures ************ 
// In JavaScript, closure provides access to the outer scope of a function from inside the inner function, even after the outer function has closed.
/**
 * 
 * A closure is the combination of a function bundled together  
 * with references to its surrounding state (the lexical environment). 
 * In other words, a closure gives you access to an outer function's scope 
 * from an inner function. 
 * 
 * Lexical scope is the ability for a function scope to access variables 
 * from the parent scope.
 *  
 *                  1. Clousure  
    //  global scope
        function subscribe () {
            const name = "vishnu"    // outer function scope
            function displayName (num) {
                console.log(name, " number is", num) // local scope
            }
            // displayName()
            return displayName;
        }
        subscribe()(5);

        2. clousures chaining

        let a = 5;
        function sum (b) {
            return function (c) {
                return function (d) {
                    return function (e) {
                        console.log( a+b+c+d+e) ;
                    }
                }
            }
        }
        sum(4)(3)(2)(1);


        output based questions

        
        let count = 0;
        (function printCount () {
        if(count === 0) {
            let count = 1; // shadowing
            console.log(count) // 1
        }
        // count = 0
        console.log(count) // 0
        })()

        optimization code using closure

        function find() {
        let a = [];
        for(let i = 0; i < 1000000; i++){
            a[i] = i*i
        }
        return function (index) {
            console.log("element of array a",a[index])
        }
        }
        const closure = find()
        console.time("6")
        closure(6)
        console.timeEnd("6")
        console.time("50")
        closure(50)
        console.timeEnd("50")
 */




