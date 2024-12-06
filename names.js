// Array of names
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

// Calculate the average number of letters per name
let totalLetters = 0;
for (let name of names) {
    totalLetters += name.length;
}
let averageLetters = totalLetters / names.length;
console.log('Average Number of Letters per Name:', averageLetters);

// Concatenate all names with spaces
let concatenatedNames = names.join(' ');
console.log('Concatenated Names:', concatenatedNames);
