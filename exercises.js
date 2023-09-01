/*Exercise 1
    Objective: Create JS Functions

    Instructions: Write a JavaScript function called greet that takes a name as an argument and returns a greeting message. For example, if the name is "John", the function should return "Hello, John!".*/

function greet(name) {
  return (`Hello, ${name}!`)
}
console.log(greet('John'))

// Exercise 2
// Objective: Create JS Functions

// Instructions: Write a JavaScript function called multiply that takes two numbers as arguments and returns their product. Test the function with different inputs.

const multiply = (a, b) => a * b;

console.log(multiply(3,4));
console.log(multiply(7,2));

// Exercise 3
// Objective: Create JS Objects

// Instructions: Create a JavaScript object called person with properties for name, age, and gender. Assign appropriate values to the properties and display the object on the console.

let person = {
  name: "abraham",
  age: 30,
  gender: 'male',
};

console.log(person);

// Exercise 4
// Objective: Create JS Objects

// Instructions: Create a JavaScript object called car with properties for make, model, and year. Assign appropriate values to the properties and display the object on the console.

let car = {
  make: 'GMC',
  model: 'Yukon',
  year: 2016
}

console.log(car);

// Exercise 5
// Objective: Create JS Functions
// Instructions: Write a JavaScript function called reverseString that takes a string as an argument and returns the reverse of the string. For example, if the input is "Hello", the function should return "olleH".

function reverseString(string){
  return string.split('').reverse().join('')
}

console.log(reverseString('Hello'));
console.log(reverseString('Fantastic'));
console.log(reverseString('racecar'))



// Exercise 6
// Objective: Create JS Functions
// Instructions: Write a JavaScript function called calculateArea that takes the radius of a circle as an argument and returns the area of the circle. Use the formula A = π * r^2.

function calculateArea(radius){
  return (Math.PI * radius**2).toFixed(2);
}

console.log(calculateArea(4));


// Exercise 7
// Objective: Grasp Common JS Built-in Objects & Methods
// Instructions: Use the Date object to display the current date and time on the console.

console.log(Date())

// Exercise 8
// Objective: Grasp Common JS Built-in Objects & Methods
// Instructions: Use the Math object to generate a random number between 1 and 10 and display it on the console.

console.log(Math.floor(Math.random()*10))


// Exercise 10
// Aim: Create a function that takes in an argument and uses string interpolation to print that arguments value somewhere in a text string
// [ ] Create a function
// [ ] Have that function take in an argument
// [ ] Print a statement that uses the variable along with some other text

function printString(color){
  console.log (`The color chosen is ${color}!`)
}

printString('red')

// Exercise 11
// Aim: Create an application that, on button click, runs a function that prints out a users name, age, and occupation
// [ ] Create the HTML with a button
// [ ] Create a function that takes in a user object
// [ ] Print each item in the user object out in a string to the console

const button = document.createElement('button');
button.textContent ='Start Function';
document.body.appendChild(button);
button.addEventListener('click', printUserObj)

function printUserObj(user){
  for ( const value in person){
    console.log(`${value}: ${person[value]}`)
  }

}

// Exercise 12
// Aim: Create a function that takes an object and returns the keys and values as separate arrays. Return the keys sorted alphabetically and their corresponding values in the same order.

function returnKeysandValues(object){
  return Object.keys(object).sort().reduce((result, key) => {
    result[key] = object[key];
    return result;
  }, {});
}
console.log(returnKeysandValues({
  zebra: 9,
  bear: 2,
  chair: 5,
  fuzzy: 3
}))

// Exercise 13
// Objective Reverse Words in a Sentence:

// Given an input string, reverse the string word by word. Define a function that does this.

// Exercise 14
// Objective Balanced Parentheses

// Given a string containing just the characters '(', ')', ', ', '[' and ']', determine if the input string is valid (i.e., has balanced parentheses). Write a unction that determines this.

// Exercise 15
// Objective Anagram

// Write a function that checks whether two given words are anagrams of each other.

// Exercise 16
// Objective Fizzbuzz

// Write a function that prints the numbers from 1 to 100. But for multiples of three, instead of the number, print "Fizz"; for the multiples of five, print "Buzz". For numbers which are multiples of both three and five, print "FizzBuzz".

// Exercise 17
// Objective Palindrome

// Write a function that checks if a given word or phrase is a palindrome (reads the same backward as forward, ignoring spaces, punctuation, and capitalization).

// Exercise 18
// Use String.prototype.split() and other String methods to reverse the words in a sentence.