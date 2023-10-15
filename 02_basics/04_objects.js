// Obejcts Singleton and Constructor
// Define as const user = new Object() -- Singleton object
// const user = {} ---- non singleton objetct


const tinderUser = new Object()

tinderUser.id = '123Abc'
tinderUser.name = "Sammy"
tinderUser.isLogedin = false

// console.log(tinderUser)

const newUser = {
    email:"abc@gamil.com",
    name:{
        fullname:{
            fname:'Tejashree',
            lname:'More'
        }
    }
}

// console.log(newUser.name)

const obj1 = {1:'a', 2:'b'}
const obj2 = {3:'a', 4:'b'}

// const obj3 = {obj1, obj2}
// console.log(obj3)
// output : { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

// const obj3 = Object.assign({}, obj1, obj2) // target id {} and source is all object which store in obj3

const obj3 = {...obj1, ...obj2} // Sparde method
// console.log(obj3)


// console.log(Object.keys(tinderUser))
// // output : [ 'id', 'name', 'isLogedin' ] --- type Array of keys
// console.log(Object.values(tinderUser))
// // output : [ '123Abc', 'Sammy', false ]  --- type array
// console.log(Object.entries(tinderUser))
// // Output : [ [ 'id', '123Abc' ], [ 'name', 'Sammy' ], [ 'isLogedin', false ] ] --- array of array
// console.log(tinderUser.hasOwnProperty('loggendin')) // o/p false

const course = {
    name:'Js Basics',
    price:999,
    Instructor:'Smmay'
}
// Thats called destructure of objects 
// Instructor change to teacher from cource object
const {Instructor:Teacher} = course
console.log(Teacher)

//*******REACT EXAMPLE DESTRUCTURING************
// THAT METHOD USED IN REACT : 
// const navbar =  ({company}) => { // that is destructuring

// }
// navbar(company = 'Tejahsree')
// *********************************************




// ***************json****************************
// {
//     'name':'Tejahsree',
//     'course': 'Js Basics',
//     'price':'Free'
// }



// API in array of objetcs
// [
//     {},
//     {},
//     {}
// ]

