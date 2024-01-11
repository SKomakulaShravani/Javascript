const key = 'dynamicKey';

const obj = {
  // Shorthand property names
  prop1: 'value1',

  // Computed property names
  [key]: 'dynamicValue',

  // Method definition
  greet() {
    console.log('Hello!');
  }
};

console.log(obj);  // Output: { prop1: 'value1', dynamicKey: 'dynamicValue', greet: [Function: greet] }
