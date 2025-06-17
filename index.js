/*
===========================
   Chapter 1
===========================
*/

// 1. Declare an empty array using JS literal notation to store student names in future.
// let studentNames = [];

// 2. Declare an empty array using JS object notation to store student names in future.
// let studentNames = new Array();

// 3. Declare and initialize a strings array.
// let stringsArray = ["Apple", "Banana", "Cherry"];

// 4. Declare and initialize a numbers array.
// let numbersArray = [1, 2, 3, 4, 5];

// 5. Declare and initialize a boolean array.
// let booleanArray = [true, false, true];

// 6. Declare and initialize a mixed array.
// let mixedArray = ["Hello", 42, true, null];

// 7. Declare and Initialize an array and store available education qualifications in Pakistan.
// let qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil.", "PhD"];

// 8. Store 3 student names and scores, then calculate percentage.
// let students = ["Michael", "John", "Tony"];
// let scores = [320, 230, 480];
// let totalMarks = 500;
// for (let i = 0; i < students.length; i++) {
//     let percentage = (scores[i] / totalMarks) * 100;
//     console.log(`Score of ${students[i]} is ${scores[i]}. Percentage: ${percentage}%`);
// }

/*
===========================
   Chapter 2
===========================
*/

// 9. Color array manipulations...

/*
===========================
   Chapter 3
===========================
*/

// 10. Sort student scores
// let scores = [320, 230, 480, 120];
// scores.sort((a, b) => a - b);
// console.log("Ordered Scores of Students:", scores);

// 11. Initialize and copy city names
// let cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
// let selectedCities = cities.slice(2, 4);
// console.log("Selected cities list:", selectedCities);

// 12. Create a string from array
// let arr = ["This", "is", "my", "cat"];
// console.log(arr.join(" "));

// 13. FIFO
// let devices = ["keyboard", "mouse", "printer", "monitor"];
// while (devices.length) {
//     console.log("Out:", devices.shift());
// }

// 14. LIFO
// let devices2 = ["keyboard", "mouse", "printer", "monitor"];
// while (devices2.length) {
//     console.log("Out:", devices2.pop());
// }

// 15. Dropdown for manufacturers
// let manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
// document.write("<select>");
// manufacturers.forEach(m => document.write(`<option>${m}</option>`));
// document.write("</select>");

/*
===========================
   Chapter 17-20 (Active)
===========================
*/

// 1. Declare and initialize an empty multidimensional array.
let multiArray = [[], [], []];

// 2. Matrix representation
let matrix = [
  [0, 1, 2, 3],
  [1, 0, 1, 2],
  [2, 1, 0, 1],
];

// 3. Counting from 1 to 10
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// 4. Multiplication table
let num = 2;
let len = 15;
console.log(`Multiplication table of ${num} Length ${len}`);
for (let i = 1; i <= len; i++) {
  console.log(`${num} x ${i} = ${num * i}`);
}

// 5. Print array items using loop
let fruits = ["apple", "banana", "mango", "orange", "strawberry"];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
for (let i = 0; i < fruits.length; i++) {
  console.log(`Element at index ${i} is ${fruits[i]}`);
}

// 6. Generate series
let counting = [],
  rev = [],
  even = [],
  odd = [],
  series = [];
for (let i = 1; i <= 20; i++) {
  if (i <= 15) counting.push(i);
  if (i <= 10) rev.unshift(i);
  if (i % 2 === 0) even.push(i);
  if (i % 2 !== 0) odd.push(i);
  if (i % 2 === 0) series.push(i + "k");
}
console.log("Counting:", counting.join(", "));
console.log("Reverse counting:", rev.join(", "));
console.log("Even:", even.join(", "));
console.log("Odd:", odd.join(", "));
console.log("Series:", series.join(", "));

// 7. Bakery search
let A = ["cake", "apple pie", "cookie", "chips", "patties"];
let userInput = prompt(
  "Welcome to ABC Bakery. What do you want to order?"
).toLowerCase();
let found = false;
for (let i = 0; i < A.length; i++) {
  if (A[i].toLowerCase() === userInput) {
    found = true;
    alert(`${userInput} is available at index ${i} in our bakery`);
    break;
  }
}
if (!found) {
  alert(`We are sorry. ${userInput} is not available in our bakery`);
}

// 8. Largest number
let nums = [24, 53, 78, 91, 12];
let max = Math.max(...nums);
console.log("Array items:", nums.join(", "));
console.log("The largest number is", max);

// 9. Smallest number
let min = Math.min(...nums);
console.log("The smallest number is", min);

// 10. Multiples of 5 from 1 to 100
for (let i = 5; i <= 100; i += 5) {
  console.log(i);
}
