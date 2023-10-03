//let score = "33abc"   // Value get NaN
// let score = null     // Value get 0
//let score = undefined //Value get NaN
//let score = true      // Value get 1
let score = "Tejashree" //Value get NaN


console.log(typeof score)
console.log(typeof(score));


let ValueInNumber = Number(score)


console.log(ValueInNumber)
console.log(typeof(ValueInNumber))


/*
"33" => 33
"33abc" => NaN
true => 1; false => 0;
1 => true; 0 => false;
"" => false
"Tejashree" => true
*/
//****************OPRATIONS**********************************

let value = 3
let negValue = -value

console.log(negValue)
console.log("hello"+" tejashree")

console.log("1"+2) // op : 12
console.log(1 + "2") // op: 12
console.log("1" + 2 + 3) // op : 123
console.log(1 + 2 + "3") // o/p : 33
console.log(+true) // o/p : 1
console.log(+"") // o/p : 0

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion