// *Variables*
// Create a variable and console log the value
// let age = 32;

// console.log(age);

// Create a variable, add 10 to it, and alert the value
// let num = 6;
// num += 10;

// alert(num);

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
// function subFour(num1, num2, num3, num4){
//     alert(num1 - num2 - num3 - num4)
// }

// subFour(15, 2, 3, 6);

// Create a function that divides one number by another and returns the remainder
function divdeAndReturnRemainder(num1, num2){
    return num1 % num2;
}

console.log(divdeAndReturnRemainder(5, 2));

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
// function alertJumanji(num1, num2){
//     let sum = num1 + num2;
//     if(sum > 50){
//         alert("Jumanji")
//     }
// }

// alertJumanji(50, 17);

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
// function multiplyThree(num1, num2, num3){
//     let product = num1 * num2 * num3;
//     if(product % 3 === 0){
//         alert("ZEBRA")
//     }
// }

// multiplyThree(5, 2, 3);

//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in
function logWord(word, num){
    for(let i = 1; i <= num; i++){
        console.log(word)
    }
}

logWord("mug", 5);