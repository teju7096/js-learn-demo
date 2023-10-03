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
