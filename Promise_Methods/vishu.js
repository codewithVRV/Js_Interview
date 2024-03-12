
/**
 * Promise.all() 
 * It takes an iterable object and returns an array
 * with values of all fullfilled promise;
 * If anyone promise gets rejected it will return 
 * value of rejected promise;
 * No Matter How many Promises are resolved before it.
 */

/**
 *  Promise.allSettled()
 *  It takes an iterable object and returns an array
 *  of object with all fullfilled promise.
 *  No matter how many promise are resolved or rejected;
 */


/**
 *  Promise.any();
 *  It takes an iterable object and return the value of only first 
 *  fullfilled promise;
 *  If all of are rejected then it will return aggregated;
 */

/**
 *  Promise.race();
 *  It takes an iterable object and returns the value first promise;
 *  whether it is fullfilled or rejected;
 */

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(1);
    }, 3000)
})

const p2 = Promise.reject(2)

const p3 = 3;

const p4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Last Promised")
    }, 5000)
})

const arr = [p1, p2, p3, p4];


Promise.all(arr)
.then((result) => {
    console.log("Array of resolved Promise", result)
})
.catch((err) => {
    console.log("Error caught:->",err); // Outputs: AggregateError: All promises were rejected
    // console.log(err.errors); // Outputs: ["Promise 1 failed", "Promise 2 failed", "Promise 3 failed"]
});

