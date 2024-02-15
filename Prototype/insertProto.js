// Note : chain follow child to parent 
/**
 * Top most obj will be the child and the last 
 * obj will be the parent.
 *  Top to down:-> Child to parent
 */
let vishnu = {
    name: "vishnu"
}
let neha = {
    name: "neha"
}
neha.__proto__ = vishnu;

let aman = {
    name: "aman"
}
aman.__proto__ = neha

let sachin = {
    name: "sachin",
    __proto__: aman
}
let deepak = {
    name: "deepak"
}

let atul = {
    name: "atul",
}

deepak.__proto__ = sachin

Object.setPrototypeOf(atul, deepak)

let nonu = {
    name: "Shashikant"
}
nonu.__proto__ = atul

let rahul = Object.create(nonu, {
    name: {
        value: "Rahul"
    }
})
