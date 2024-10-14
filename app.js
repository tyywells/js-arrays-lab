/*
Exercise 1: Define an empty array

1) Create an empty array and assign it to a variable called `foods`.

Exercise 1 has been completed for you:
*/

const foods = [];  

console.log('Exercise 1 result:', foods);

foods.push('pizza', 'cheeseburger');
console.log('Excercise 2 result:', foods);

foods.unshift('taco');
console.log('Excercise 3 result:', foods);

let favFood = foods[1];
 console.log('Exercise 4 result:', favFood);

 foods.splice(2, 0, 'tofu');
 console.log('Exercise 5 result:', foods);

 foods.splice(1, 1, 'sushi', 'cupcake');

console.log('Exercise 6 result:', foods);
 
foods.slice(1, -2);
let yummy = foods.slice(1, -2);
console.log('Exercise 7 result:', yummy);

let soyIdx = foods.indexOf('tofu');
console.log('Exercise 8 result:', soyIdx);

let allFoods = foods.join(' ->');
console.log('Exercise 9 result:', allFoods);

//console.log(foods.includes('soup'));
let hasSoup=foods.includes('soup')
console.log('Exercise 10 results:', hasSoup);

const nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90];
let odds = []
nums.forEach((num) => num % 2 === 1 && odds.push(num));
console.log('Exercise 11 result:', odds);


let fizz = [];
let buzz = [];
let fizzbuzz = [];

nums.forEach((num) => num % 3 === 0 && fizz.push(num));
nums.forEach((num) => num % 5 === 0 && buzz.push(num));
nums.forEach((num) => (num % 5 === 0) && (num % 3 === 0) && fizzbuzz.push(num));

console.log('Exercise 12 results:');
console.log('   fizz:', fizz);
console.log('   buzz:', buzz);
console.log('   fizzbuzz:', fizzbuzz);

const numArrays = [
	[100, 5, 23],
	[15, 21, 72, 9],
	[45, 66],
	[7, 81, 90]
];
const numlist = [numArrays[3][0], numArrays [3][1], numArrays [3][2]];
//a better way to solve this is to access the entire last nested array without individualy
//listing each individual element so the easier and more reliable way to access the last
//nested array would be:
//const numList= numArrays[numArrays.length - 1];
//this way, even if the numArrays get editted, this will ALWAYS print the final array even 
//if another array gets added 
console.log('Exercise 13 result:', numlist);

let num = [numArrays[2][1]];
console.log('Exercise 14 result:', num);

let total = 0;
numArrays.forEach(innerArray => {
    innerArray.forEach(num => {
        total += num;
    });
});
console.log('Exercise 15 result:\n', total);
