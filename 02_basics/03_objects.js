// singleton : When create litreals may be create a singleton but using constructor not create singleton

// OBJECT LITERLAS : JavaScript Object Literal is a data type used to define objects in JavaScript.

// const js_user = Object.create() ---- That is a constructor object in that sigleton create

// WHat is object : That value access using Key
// Diffrenace Array and Object : - Array has newmeric key only but object can be our custom key also


const mySymb = Symbol("Key1")

const js_user = {
    name:"Tejashree",
    "full name":"Tejashree More",
    [mySymb]:"key1", // Symbol are defines in objects in bracets
    age:25,
    location:'Surat',
    email:'abc@gamil.com',
    isLoggedIn: false,
    lastLoggin: ['Monday', 'Saturday']
} 
// Create object Litrales

// console.log(js_user)
// console.log(js_user.email)
// console.log(js_user['email'])
// console.log(js_user['full name']) // not access using dot

console.log(typeof js_user[mySymb]) // Not access using dot

js_user.email = "tejmore2.tm@gmail.com"
// Object.freeze(js_user) // freeze the object so no one can change the value of this
js_user.email = "tejashree@caretit.com"
// console.log(js_user)
// that give output of "tejmore2.tm@gmail.com" not changed


// Function in Object

js_user.greetings = function() {
    console.log("HELLO JS USERS... YOU ARE LOGGED IN.....")
}

js_user.greetings2 = function() {
    console.log(`Hello Js Userd ${this["full name"]}`)
}

console.log(js_user.greetings2());


