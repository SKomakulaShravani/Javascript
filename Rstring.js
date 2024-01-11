let string = "hello shravani";
let reversedString = string.split('').reduce((acc, char) => char + acc, '');
console.log('Reversed string:', reversedString);

let reversedString1 = '';
for (let i = string.length - 1; i >= 0; i--) {
    reversedString1 += string[i];
}
console.log('Reversed string1:', reversedString1);

//for of loop



for (const char of string) {
    reversedString = char + reversedString1;
}
console.log('Reversed string:', reversedString1);

//reverse each word

let reversedWords1 = string.split(/\s+/).map(word => word.split('').reverse().join('')).join(' ');
console.log('String with reversed words:', reversedWords1);

//using split and foreach


let words = string.split(/\s+/);
console.log(words);
let reversedWords = '';
words.forEach(word => reversedWords += [...word].reverse().join('') + ' ');
console.log('Reversed words:', reversedWords);



