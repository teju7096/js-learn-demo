//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunc = function() {
    console.log("Hello Tejashreeeeeee");
}
// FUnction type od is return function but its call in js as "Object Function"
console.log(typeof myFunc)


// for read which data type return value
// https://262.ecma-international.org/5.1/#sec-11.4.3



// +++++++++++++MEMORY++++++++++++++++

//1. STACK -- All primitive types use STACK memory -- copy of a value
//2. HEAP -- All non-primitive types use HEAP memory -- refrence of a value


let MyLession = "Javascript"
let AnotherLession = MyLession

MyLession = "Python"

console.table([MyLession,AnotherLession])

let userOne = {
    email:"user1@gameil.com",
    upi:'up@sbi'
}

let userTwo = userOne

userTwo.email = "tejmore2.tm@gamil.com"

console.table([userOne.email,userTwo.email])

// So conclude : 
// STACK : When assigne one value to another variable and then change this another variable so first varibale not change
// HEAP : When assigne one value to another variable and then change this another variable so all values change because that give address for that value