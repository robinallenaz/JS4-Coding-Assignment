// Array of ages
let ages = [3, 9, 23, 64, 2, 8, 28, 93];

// Subtract the first element from the last element
let ageDifference = ages[ages.length - 1] - ages[0];
console.log('Age Difference:', ageDifference);

// Add a new age and repeat the subtraction
ages.push(45);  // Adding a new age
difference = ages[ages.length - 1] - ages[0];
console.log('New Age Difference:', difference);

// Calculate the average age
let sum = 0;
for (let age of ages) {
    sum += age;
}
let averageAge = sum / ages.length;
console.log('Average Age:', averageAge);
