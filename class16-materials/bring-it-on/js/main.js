// // *Variables*
// // Create a variable and console log the value
// const name = "Mel";
// console.log(name);

// // Create a variable, add 10 to it, and alert the value
// let secondNum = 5;
// secondNum = secondNum + 10;
// alert(secondNum);

// // *Functions*
// // Create a function that subtracts 4 numbers and alerts the difference
// function subFourNumsAndAlert(n1, n2, n3, n4){
//     alert(n1- n2- n3- n4)
// }

// subFourNumsAndAlert(5, 4, 3, 2);

// // Create a function that divides one number by another and returns the remainder
// function getTheRemainder(n1, n2){
//     return n1 % n2
// }
// console.log(getTheRemainder(12, 3));

// // *Conditionals*
// // Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
// function addTwoAlert(n1, n2){
//     if(n1 + n2 > 50){
// alert('Jumanji')
//     }
// }
// addTwoAlert(50, 1);

// // Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
// function multiplyAlert(n1, n2, n3){
//     let product= n1 * n2 * n3;
//     if(product % 3 === 0){
//         alert('ZEBRA');
//     }
// }

// multiplyAlert(6, 5, 4);

// //*Loops*
// //Create a function that takes in a word and a number. 
// // Console log the word x times where x was the number passed in
// function logWord(word, num){
//     for(i = 1; i <= num; i++){
//         console.log(word)
//     }
// }

// logWord("Frog", 4);

// *Variables*
// // Create a variable and console log the value
let age = 32;
console.log(age);

// // Create a variable, add 10 to it, and alert the value
let num = 5;
num = num + 10;
alert(num);

// // *Functions*
// // Create a function that subtracts 4 numbers and alerts the difference
function subFour(num1, num2, num3, num4){
    alert(num1 - num2 - num3 - num4)
}

subFour(70, 6, 10, 8)

// // Create a function that divides one number by another and returns the remainder
function returnRemainder(num1, num2){
    return num1 % num2;
}

console.log(returnRemainder(10,7))

// // *Conditionals*
// // Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function jumanji(num1, num2){
    let sum = num1 + num2;
    if(sum > 50){
        alert("Jumanji")
    }
}

jumanji(45,2)
jumanji(30,45)


// // Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function multiplyThree(num1, num2, num3){
    let product = num1 * num2 * num3;
    if(product % 3 === 0){
        alert('ZEBRA')
    }else{
        alert('Sorry, result is not divisible by 3')
    }
}

multiplyThree(10, 4, 5)
multiplyThree(10, 2, 3)

// //*Loops*
// //Create a function that takes in a word and a number. 
// // Console log the word x times where x was the number passed in
function logWord(word, num){
    for(let i = 1; i <= num; i++){
        console.log(word)
    }
}

logWord("coffee", 4)




