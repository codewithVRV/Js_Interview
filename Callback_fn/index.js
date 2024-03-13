//  ******************** callback function **********


// There is a concept of First class function in js

// we can pass the function as an argument
// We can also return the function from function

/**
 *  
    function outer () {
        console.log("Inside Outer")
        return function () {
            console.log("Inside Inner");
        }
    }

    outer()()
 * 
 */

/**
 * 
    function outer (cb) {
        console.log("Inside Outer")
        cb()
    }

    outer(function () {
        console.log("Inside Inner");
    })
 *  
 */

// We can use cb sync and async both


//    synchronously
// const result = [1, 2, 3].map((item) => item*item )
// console.log(result)




//  asynchronously

function apiPayment(url, cb){
    let obj = new XMLHttpRequest(url)
    if(obj.status == "200"){
        cb(obj.response)
    }
}

function apiOrderConfirm(url, cb) {
    // logic 
}


apiPayment("www.mastercard.com/valid", function (response) {
     let uniqueId = response.id;
     apiOrderConfirm(`www.mastercard.com/id=${uniqueId}`, function (response) {
        console.log(`Your order is ${response.status}`)
     })   
})