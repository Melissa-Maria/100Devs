//---Easy
//create a function that subtracts two numbers and alerts the difference
function subtractTwo(num1, num2) {
    let difference = num1 - num2
    alert(difference)

}

// subtractTwo(5, 2);
// subtractTwo(100, 33);

//create a function that divides three numbers and console logs the quotient
function divideThree(num1, num2, num3){
    let quotient = num1 / num2 / num3;
    console.log(quotient)
}

divideThree(10, 2, 1);

//create a function that multiplys three numbers and returns the product
function multiplysThree(num1, num2, num3){
    let product = num1 * num2 * num3
    return product;
}

console.log(multiplysThree(4, 2, 3)) ;

//---Medium
//create a function that takes in three numbers. Add the first two numbers 
// and return the remainder of dividing the sum of the first two numbers by the third number
function arithmetic(num1, num2, num3){
    let result = (num1 + num2) % num3;
    return result;
}

console.log(arithmetic(5,2,1))

//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater than 100 add the sum of the last two numbers and console log the value. 
// If the product is less that 100, subtract the difference of the last two numbers and console log the value. If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number
