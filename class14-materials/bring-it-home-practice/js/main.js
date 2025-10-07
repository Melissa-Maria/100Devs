// *Variables*
// Create a variable and console log the value
// const name = 'Mel';
// console.log(name);

// Create a variable, add 10 to it, and alert the value
// let num = 52;
// num = num + 10;

// alert(num);

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
// function subFourAndAlert(num1, num2, num3, num4) {
//     let result = num1 - num2 - num3 - num4;
//     alert(result);
// }

// subFourAndAlert(50, 10, 5, 2);

// Create a function that divides one number by another and returns the remainder
// function returnRemainder(num1, num2) {
//     let remainder = num1 % num2;
//     return remainder
// }

// console.log(returnRemainder(5, 2));

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
// function addTwoAndAlert(num1, num2) {
//     let sum = num1 + num2;
//     if(sum > 50){
//         alert('Jumanji')
//     }
// }

// addTwoAndAlert(40, 15);

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function multiplyThree(num1, num2, num3){
    let product = num1 * num2 * num3;
    if(product % 3 === 0){
        alert('ZEBRA')
    }
}

multiplyThree(6, 2, 3);
multiplyThree(4,5,2);
