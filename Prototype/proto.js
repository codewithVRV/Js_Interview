let obj1 = {
    name: "vishnu"
}

let obj2 = {
    name: "neha",
    __proto__: obj1
}
// obj2.__proto__ = obj1  we can use this method also


let obj3 = {
    name: "atul",
}

Object.setPrototypeOf(obj3, obj2)
/**
 * In this method first parameter is child and second 
 * parameter is parent.
 * obj3 is child of obj2
 */

let obj4 = Object.create(obj3, {
    name: {
        value: "Rahul"
    }
})
