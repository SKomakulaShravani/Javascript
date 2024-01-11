//Default parameters allow us to specify default values for function parameters.
const quantity = 100;
const cost = (quantity, price = 1) => {
   console.log(quantity * price);
}; 
cost(quantity);//100

cost(quantity, 20);//2000

//another example 
function greet(name = 'Guest') {
   console.log(`Hello, ${name}!`);
 }
 
 greet();          // Output: Hello, Guest!
 greet('Bob');     // Output: Hello, Bob!
 