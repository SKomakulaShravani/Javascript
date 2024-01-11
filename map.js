const numbers = [1, 2, 3, 4, 5];

// Array methods
const doubled = numbers.map(num => num * 2);
const filtered = numbers.filter(num => num % 2 === 0);

console.log(doubled);   // Output: [2, 4, 6, 8, 10]
console.log(filtered);  // Output: [2, 4]
