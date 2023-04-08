// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// We make a variable called name and set it to 'Dane' as a string.
// We make a conditional in which if the name 'Dane' exactly matches 'Mary', the console.log will output 'Hi, Mary!'
// We add an additional parameter to the conditional in which if the name 'Dane' does not exactly match 'Mary', the console.log will output 'How do you do?'
// Because the assigned name 'Dane' does not exactly match 'Mary', the console.log will output 'How do you do?'

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// We make a variable called secret but do not assign it a value.
// We make a variable called code and set it to 123 as a number.
// We make a conditional in which if code exactly matches number value 123, secret is set to 'super' and value of code is multiplied by 2.
// We add another conditional in which if the code is greater than number value 250, secret is set to 'duper'.
// We console.log 'secret'. 
// Because the number value of code exactly matches 123, the first conditional will be run and the number value of code will now equal 246.
// Because the number value of 246 is still < 250, only the first conditional is met. console.log(secret) will output 'super'.

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// We make a variable called isStudent and set it to true as a boolean.
// We make a variable called age and set it to 34 as a number.
// We make a variable called zip and set it to 55407 as a number.
// We make a conditional 1 in which if isStudent is exactly true AND zip is greater than value 80000, console.log will output 'You're a student on the West Coast!'.
// We add conditional 2 (if conditional 1 is not met): If isStudent is exactly false or age is less than value 30, console.log will output 'What are your hobbies?'.
// We add conditional 3 (if conditionals 1 + 2 are not met): If isStudent is exactly true, console.log will output 'Welcome to Prime!'.
// We add conditional 4 (if conditionals 1 + 2 + 3 are not met): If all above conditionals are not met, the console.log will output 'How about the weather?'.
// Because conditionals 1-2 are not met but conditional 3 is met, the console.log will ignore conditional 4 and output 'Welcome to Prime!'.

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*

// FIX - colorOne is set to 'red' and colorTwo is set to 'blue', but the instructions state they are swapped.
// FIX - Should be let colorOne = 'blue' and let colorTwo = 'red'
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
// FIX - Only colorOne is set to 'purple', but the instructions state both colorOne and colorTwo are set to 'purple'.
// FIX - Should be colorOne = 'purple' && colorTwo = 'purple';
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;

if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/

