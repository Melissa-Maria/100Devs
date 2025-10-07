// //1. 3,2,1...code!

// //display your name and age
// console.log("Mel");
// console.log(32);

// //Write a program that displays the results of adding, subtracting, multiplying and dividing 6 by 3.
// console.log(6 + 3);
// console.log(6 - 3);
// console.log(6 * 3);
// console.log(6 / 3);


// //Observe the following program and try to predict the values it displays.
// console.log(4 + 5); //9
// console.log("4 + 5"); // 4 + 5
// console.log("4" + "5"); // 45

////////////////////////////////

//2. Play with Variable

//Write a program that asks the user for his first name and his last name. The program then displays them in one sentence.
// let firstName = prompt("Enter your first name");
// let lastName = prompt("Enter your last name");

// alert(`${firstName} ${lastName}`);

// Observe the following program and try to predict the final values of its variables.

// let a = 2; 
// a -= 1;
// a++; // 2
// let b = 8;
// b += 2; // 10
// const c = a + b * b; // 102
// const d = a * b + b; // 30
// const e = a * (b + b); // 40
// const f = a * b / a; // 10
// const g = b / a * a; // 10
// console.log(a, b, c, d, e, f, g); // 2, 10, 102, 30, 40, 10, 10

// Write a program that asks the user for a raw price. After that, it calculates the corresponding final price using a 
// VAT rate of 20.6%.

// let rawPrice = prompt("Please enter the raw price: $");
// let finalPrice = rawPrice * 20.6;

// alert(`$${finalPrice}`);

//Write a program that asks for a temperature in Celsius degrees, then displays it in Fahrenheit degrees.
// let celcius = prompt("Please enter temperature in celcius");
// let farenheit = celcius * 9/5 + 32;

// alert(farenheit);

//Observe the following program.
//Add the necessary code to swap the values of variables number1 and number2

// let number1 = 5;
// let number2 = 3;

// // TODO: type your code here (and nowhere else!)
// number1 = number2;
// number2 = number1 +2;

// console.log(number1); // Should show 3
// console.log(number2); // Should show 5

//////////////////////////////

//3. Add Conditions

//Write a program that accepts a day name from the user, then shows the name of the following day. 
// Incorrect inputs must be taken into account.
// let day = prompt("Enter a day of the week");

// if(day === "monday"){
//     console.log("tuesday")
// } else if(day === "tuesday"){
//     console.log("wednesday")
// } else if(day === "wednesday"){
//     console.log("thursday")
// } else if(day === "thursday"){
//     console.log("friday")
// } else if(day === "friday"){
//     console.log("saturday")
// }else if(day === "saturday"){
//     console.log("sunday")
// } else if(day === "sunday"){
//     console.log("monday")
// }else{
//     console.log("That is not a day of the week. Please try again.")
// }

//Write a program that accepts two numbers, then compares their values and displays an appropriate message in all cases.
// function compare (num1, num2){
//     if(num1 >= num2){
//         console.log("Number one is larger!")
//     } else if(num1 <= num2){
//         console.log("Uh oh, number two is bigger")
//     } else {
//         console.log("No number entered, try again.")
//     }
// }

// Take a look at the following program.

// let nb1 = Number(prompt("Enter nb1:"));
// let nb2 = Number(prompt("Enter nb2:"));
// let nb3 = Number(prompt("Enter nb3:"));

// if (nb1 > nb2) {
//   nb1 = nb3 * 2;
// } else {
//   nb1++;
//   if (nb2 > nb3) {
//     nb1 += nb3 * 3;
//   } else {
//     nb1 = 0;
//     nb3 = nb3 * 2 + nb2;
//   }
// }
// console.log(nb1, nb2, nb3);

// Before executing it, try to guess the final values of variables nb1, nb2 and nb3 depending on their initial values. 
// Complete the following table.

// nb1=nb2=nb3=4 -> 0, 4, 12
// nb1=4,nb2=3,nb3=2  -> 4, 3, 2			
// nb1=2,nb2=4,nb3=0 -> 3, 4, 0

// Write a program that accepts a month number (between 1 and 12), then shows the number of days of that month. 
// Leap years are excluded. Incorrect inputs must be taken into account.


//Write a program that asks for a time under the form of three information (hours, minutes, seconds). The program calculates and shows the time one second after. Incorrect inputs must be taken into account.

// This is not as simple as it seems... Look at the following results to see for yourself:

//     14h17m59s should give 14h18m0s
//     6h59m59s should give 7h0m0s
//     23h59m59s should give 0h0m0s (midnight)

////////////////////////////

//4. Repeat Statements
//Try to code each exercise twice, once with a while loop and the other with a for, 
// to see for yourself which one is the most appropriate.

//Write a program that launches a carousel for 10 turns, showing the turn number each time.
//When it's done, improve it so that the number of turns is given by the user.
// let num = 1;
// while(num <= 10){
//     console.log(num);
//     num++;
// }

// for(let i = 1; i <=10; i++){
//     console.log(i)
// }

//Check the following program that shows even numbers (divisible by 2) between 1 and 10.

// for (let i = 1; i <= 10; i++) {
//   if (i % 2 === 0) {
//     console.log(`${i} is even`);
//   }
// }
// This program uses the modulo operator %, which calculates the remainder after division of 
// one number by another. It's often used to assess number parity.

// console.log(10 % 2); // 0 because 10 = 5 * 2 + 0
// console.log(11 % 2); // 1 because 11 = 5 * 2 + 1
// console.log(18 % 3); // 0 because 18 = 3 * 6 + 0
// console.log(19 % 3); // 1 because 19 = 3 * 6 + 1
// console.log(20 % 3); // 2 because 20 = 3 * 6 + 2

// Improve the program so that it also shows odd numbers. Improve it again to replace the initial 
// number 1 by a number given by the user.
// for (let i = 1; i <= 10; i++) {
//   if (i % 2 === 0) {
//     console.log(`${i} is even`);
//   } else if(i % 2 === 1){
//     console.log(`${i} is odd`)
//   }
// }

//Write a program that continues to ask the user for a number until the entered number is less than or equal to 100.
//When you are done with the above, improve the program so that the terminating number is between 50 and 100.
// let num = "";
// while(num > 100){
//     num = prompt("Please enter a number less than 100")
// }

//Write a program that asks the user for a number, then shows the multiplication table for this number.
//When you are done, improve the program so it only accepts numbers between 2 and 9 (use the previous exercise as a blueprint).


//Write a program that plays "neither yes, nor no" with the user. Specifically, the program asks the user to enter text until either 
//"yes" or "no" is typed, which ends the game.


// Write a program that shows all numbers between 1 and 100 with the following exceptions:
//     It shows "Fizz" instead if the number is divisible by 3.
//     It shows "Buzz" instead if the number is divisible by 5 and not by 3.
// When it's done, improve it so that the program shows "FizzBuzz" instead for numbers divisible both by 3 and by 5.

////////////////////

//5. Write functions
// Complete the following program so that it asks the user for his first and last names, then show the result of 
// the sayHello() function.

// Say hello to the user
// function sayHello(firstName, lastName) {
//   const message = `Hello, ${firstName} ${lastName}!`;
//   return message;
// }

// TODO: ask user for first and last name
// let firstName = prompt("Please enter your first name");
// let lastName = prompt("Please enter your last name")
// // TODO: call sayHello() and show its result
// console.log(sayHello(firstName, lastName));


//Complete the following program so that the square1() and square2() functions work properly.

// Square the given number x
function square1(x) {
  // TODO: complete the function code
  let result = x * x;
  return result;
}

// Square the given number x
// TODO: complete the function code
const square2 = x => x * x;

console.log(square1(0)); // Must show 0
console.log(square1(2)); // Must show 4
console.log(square1(5)); // Must show 25

console.log(square2(0)); // Must show 0
console.log(square2(2)); // Must show 4
console.log(square2(5)); // Must show 25

//When it's done, update the program so that it shows the square of every number between 0 and 10.
for(let i = 0; i <= 10; i++){
    
    console.log(i);
}

//Let's pretend the JavaScript Math.min() function doesn’t exist. Complete the following program so that the min() 
// function returns the minimum of its two received numbers.

// TODO: write the min() function
function min(num1, num2) {
    if(num1 < num2) {
        return num1;
    } else {
        return num2;
    }
}
console.log(min(4.5, 5)); // Must show 4.5
console.log(min(19, 9));  // Must show 9
console.log(min(1, 1));   // Must show 1


//Complete the following program so that it offers the four basic arithmetical operations: 
//addition, subtraction, multiplication and division. You can use either a function declaration or a function expression.

// TODO: complete program
function calculate(num1, X, num2) {
    if(X == "+"){
        return num1 + num2
    } else if(X == "-"){
        return num1 - num2
    } else if(X == "*"){
        return num1 * num2
    }else {
        return num1 / num2
    }
}

console.log(calculate(4, "+", 6));  // Must show 10
console.log(calculate(4, "-", 6));  // Must show -2
console.log(calculate(2, "*", 0));  // Must show 0
console.log(calculate(12, "/", 0)); // Must show Infinity

// Write a program containing two functions to calculate the circumference and area of a circle defined by its radius. 
// Test it using user input.

// Here are some tips for solving this exercise:
    // Circumference and area calculation formulas should be part of your secondary school memories... Or a Google click away :)
    // The value of number π (Pi) is obtained with Math.PI in JavaScript.
    // You might want to use the exponentiation operator ** to perform computations
console.log(2 ** 3); // 8: 2 * 2 * 2
console.log(3 ** 2); // 9: 3 * 3

let radius = Number(prompt("what is the radius of your circle?"))

function circumference(radius){
    return Number((2 * Math.PI) * radius).toFixed(2);
}

// console.log(circumference(radius));

function area(radius){
    return Number(Math.PI * (radius ** 2)).toFixed(2);
}

// console.log(area(radius))
alert(`The circumference of your circle is ${circumference(radius)} and the area is ${area(radius)}`)




//homework from codecademy
// If you’d like extra practice, try this:

//     Convert celsius to the Newton scale using the equation below

// Newton = Celsius * (33/100)

//     Round down the Newton temperature using the .floor() method
//     Use console.log and string interpolation to log the temperature in newton to the console


//Eloquent JS practice exercises- Chapter 2
// 1. Write a loop that makes seven calls to console.log to output the following triangle:

// #
// ##
// ###
// ####
// #####
// ######
// #######

for (let char = '#'; char.length < 8; char += "#")
    console.log(char);

// .2 FizzBuzz
// Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. 
// For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), 
// print "Buzz" instead.
// When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5 
// (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).

for (let num = 0; num <= 100; num++){
    if(num % 3 === 0 && num % 5 === 0){
        console.log("Fizz Buzz")
    }else if(num % 3 === 0){
        console.log("Fizz")
    } else if(num % 5 === 0){
        console.log("Buzz")
    }else{
        console.log(num)
    }
}

// 3.Chessboard
// Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. 
// At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.
let size = 8;
let board = "";

for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    if ((x + y) % 2 == 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}

console.log(board);

// 4. Minimum
// The previous chapter introduced the standard function Math.min that returns its smallest argument. 
// We can build something like that now. Write a function min that takes two arguments and returns their minimum.
function min(num1, num2) {
  if (num1 < num2) return num1;
  else return num2;
}

// 5. Recursion
// We’ve seen that % (the remainder operator) can be used to test whether a number is even or odd by using % 2 to see whether it’s 
// divisible by two. Here’s another way to define whether a positive whole number is even or odd:

//     Zero is even.
//     One is odd.
//     For any other number N, its evenness is the same as N - 2.

// Define a recursive function isEven corresponding to this description. The function should accept a single parameter 
// (a positive, whole number) and return a Boolean.

// Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way to fix this?

function isEven(num){
  if(num == 0){
    return true;
}else if(num == 1){
  return false;
}else if(num < 0){
  return isEven(-num);
}else{
    return isEven(num - 2);
}
}


console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));

// 6.Bean counting
// You can get the Nth character, or letter, from a string by writing "string"[N]. 
// The returned value will be a string containing only one character (for example, "b"). 
// The first character has position 0, which causes the last one to be found at position string.length - 1. 
// In other words, a two-character string has length 2, and its characters have positions 0 and 1.

// Write a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase 
// “B” characters there are in the string.

// Next, write a function called countChar that behaves like countBs, except it takes a second argument that indicates the 
// character that is to be counted (rather than counting only uppercase “B” characters). Rewrite countBs to make use of this 
// new function.

function countChar(string, ch) {
  let counted = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] == ch) {
      counted += 1;
    }
  }
  return counted;
}

function countBs(string) {
  return countChar(string, "B");
}

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4