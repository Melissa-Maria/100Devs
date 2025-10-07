// // *Variables*
// // Declare a variable, assign it a boolean, and alert the value
// let boolean = true;

// alert(boolean);

// // Declare a variable, reassign it to your favorite color, and console log the value
// let faveColor = "blue";
// faveColor = "green";

// console.log(faveColor);

// // *Functions*
// // Create a function that takes in 4 numbers and returns the sum of the first 3 numbers divided by the fourth. 
// // Return the result. Call the function.
// function sumThreeAndDivide(num1, num2, num3, num4) {
//     let result = (num1 + num2 + num3) / num4;
//     return result
// }

// console.log(sumThreeAndDivide(5, 4, 1, 2));

// // Create a function that takes in 2 numbers. Console log the first number to the power of the second. Call the function.
// function morePower (num1, num2) {
//     console.log(Math.pow(num1, num2));
// }

// morePower(5, 2);

// *Conditionals*
// Create a function that takes in a boolean and a string. 
// If the boolean is true, alert the string. 
// If the boolean is false, console log the string
// function alertOrLog (boolean, string) {
//     if(boolean){
//         alert(string)
//     } else {
//         console.log(string)
//     }

    //can use a ternary
    // b ? alert(str) : console.log(str)

// }

//or using a function expression
// const alertOrLog = (b, str) => b ? alert(str) : console.log(str)
 


//*Loops*
//below common interview question!!
//Create a function that takes in a number. Console log all values from 1 to that number, but if the number is divisible by 3 log "fizz" instead of that number, if the number is divisible by 5 log "buzz" instead of the number, and if the number is divisible by 3 and 5 log "fizzbuzz" instead of that number
function fizzBuzz (num) {
    //started counter at 1 because it says to go from 1 to that number
    for(let i = 1; i <= num; i++){
        if(i % 3 === 0 && i % 5 === 0){
            console.log("fizzbuzz")
        }else if( i % 3 === 0){
            console.log("fizz")
        }else if( i % 3 === 0){
            console.log("buzz")
        }else{
            console.log(i)
        }
    }
}