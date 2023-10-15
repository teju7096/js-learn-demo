const marveHero = ["thor", "ironman", 'spiderman']
const dcHero = ["batman", "superman", "flash"]

marveHero.push(dcHero) // output : array of array 
console.log(marveHero)
//Output : [ 'thor', 'ironman', 'spiderman', [ 'batman', 'superman', 'flash' ] ]

allHero = marveHero.concat(dcHero) // output give new array with all element
console.log(allHero)
// output : [ 'thor', 'ironman', 'spiderman', 'batman', 'superman', 'flash' ]


// In place of concat you can use sprade method also that give same o/p like concate
all_new_hero = [...marveHero,...dcHero]
console.log(all_new_hero)
// output : [ 'thor', 'ironman', 'spiderman', 'batman', 'superman', 'flash' ]

let another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
let real_another_array = another_array.flat(Infinity) 
// saprate all element indevidual in array like concate and sprade
// in place of Infinity you can add depth of solve the erray like 1,2 and so on

console.log(real_another_array)

console.log(Array.isArray("Tejashree")) 
// That give o/p false because that is not array
console.log(Array.from("Tejashree"))
// That gives o/p array of that name with saprete element

console.log(Array.from({'name': 'Tejashree'})) // Intresting
// That give the o/p empty array because that is distionary so not can be converted
// You have to give keys or value specific to convert the array


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3))
