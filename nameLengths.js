// Create nameLengths array
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
let nameLengths = [];
for (let name of names) {
    nameLengths.push(name.length);
}
console.log('Name Lengths:', nameLengths);

// Calculate the sum of all elements in nameLengths
let sumOfLengths = 0;
for (let length of nameLengths) {
    sumOfLengths += length;
}
console.log('Sum of Name Lengths:', sumOfLengths);
