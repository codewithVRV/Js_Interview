const obj = {
    name: "Vishnu",

}

const printDetails = function ( work) {
    console.log(`${this.name} ${work} `)
}

// *********** Pollyfill for Call ************
Object.prototype.myCall = function (scope, ...args){
    scope.vishnu = this;
    return scope.vishnu(...args)
}

// ***************** Pollyfill for Apply *************
Object.prototype.myApply = function (scope, args){
    scope.vishnu = this
    return scope.vishnu(...args)
}


// ******************* Pollyfill for Bind **************
Object.prototype.myBind = function (scope, ...args) {
    scope.vishnu = this;
    return function () {
        return scope.vishnu(...args)
    }
}
printDetails.myCall(obj, "Software engineer")

printDetails.myApply(obj, ["engineer"])


const result = printDetails.myBind(obj, "Teacher")
result()

const atul = {
    name: "Atul kumar"
}

const atulResult = printDetails.myBind(atul,"Intelligence");
atulResult()