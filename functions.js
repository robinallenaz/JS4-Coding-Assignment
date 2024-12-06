// Function to concatenate a word n times
function repeatWord(word, n) {
    return word.repeat(n);
}
console.log('Repeat Word:', repeatWord('Hello', 3));

// Function to return a full name
function fullName(firstName, lastName) {
    return firstName + ' ' + lastName;
}
console.log('Full Name:', fullName('John', 'Doe'));

// Function to check if sum of array is greater than 100
function isSumGreaterThan100(numbers) {
    let sum = numbers.reduce((acc, num) => acc + num, 0);
    return sum > 100;
}
console.log('Is Sum Greater Than 100:', isSumGreaterThan100([10, 20, 30, 40]));

// Function to calculate average of an array
function averageArray(numbers) {
    let sum = numbers.reduce((acc, num) => acc + num, 0);
    return sum / numbers.length;
}
console.log('Average of Array:', averageArray([10, 20, 30, 40]));

// Function to compare averages of two arrays
function compareAverages(arr1, arr2) {
    let avg1 = averageArray(arr1);
    let avg2 = averageArray(arr2);
    return avg1 > avg2;
}
console.log('Compare Averages:', compareAverages([10, 20, 30], [5, 15, 25]));

// Function willBuyDrink
function willBuyDrink(isHotOutside, moneyInPocket) {
    return isHotOutside && moneyInPocket > 10.50;
}
console.log('Will Buy Drink:', willBuyDrink(true, 11));

// Custom function: Check if a number is even
// This function checks if a given number is even and returns true if it is, otherwise false.
function isEven(number) {
    return number % 2 === 0;
}
console.log('Is Even:', isEven(4));
