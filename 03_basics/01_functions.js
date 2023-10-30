// Definition of function : 
function SayMyName() {
    console.log("H")
    console.log("E")
    console.log("L")
    console.log("L")
    console.log("O")
}

// SayMyName()

// function AddTwoNumber(num1, num2) { // That called Parameters which pass in Function is defined
//     console.log(num1 + num2)
// }

// const result = AddTwoNumber(2, 6) // That called Arguments which pass when call function
// console.log("Result : ", result) // output is undefined because function has no return type

function AddTwoNumber(num1, num2) { 
    numb3 = num1 + num2
    return numb3
}

const result = AddTwoNumber(2, 6) 
// console.log("Result : ", result) // output is 8 because function has return the add two number


function LoginUser(username = "Sam") {
    if(!username){
        return false
    }
    return `${username} Just Logged In...`
}

const res = LoginUser()
const res2 = LoginUser("Tejashree")
if (!res | !res2) {
    console.log("NOT GER RESPONSE FRON ONE OF THEM")
}
console.log(res)
console.log(res2)