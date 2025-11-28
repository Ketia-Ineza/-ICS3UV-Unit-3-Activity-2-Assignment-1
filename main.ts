// Program to round numbers and format them

// Numbers
const num1 = 8.5467;
const num2 = 9.6382;
const num3 = 18.5146;
const num4 = 125.496;

// Round numbers to specified decimal places
const round1 = num1.toFixed(3);
const round2 = num2.toFixed(5);
const round3 = num3.toFixed(1);
const round4 = num4.toFixed(1);

// Display rounded numbers
console.log(round1.padStart(10, ' ')); // Field size 10
console.log(round2.padStart(8, ' '));  // Field size 8
console.log(round3.padStart(6, ' '));  // Field size 6
console.log(round4.padStart(3, ' '));  // Field size 3