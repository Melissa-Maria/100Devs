// *Variables*
// Create a variable and console log the value
let num = 4;
console.log(num);

// Create a variable, add 10 to it, and alert the value
let addAndAlert = 2;
addAndAlert = addAndAlert + 10;
alert(addAndAlert);

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subAndAlert(num1, num2, num3, num4){
    let difference = num1 - num2 - num3 - num4;
    alert(difference);
}

subAndAlert(17, 3, 5, 2);

// Create a function that divides one number by another and returns the remainder
function returnRemainder(num1, num2){
    return num1 % num2;
}

console.log(returnRemainder(5,2))

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function alertJumanji(num1, num2){
    let sum = num1 + num2;
    if(sum > 50){
        alert("Jumanji")
    }else {
        alert("Sum is less than 50...")
    }
}

alertJumanji(45,1);
alertJumanji(60,7);

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function multiplyThree(num1, num2, num3){
    let product = num1 * num2 * num3;
    if(product % 3 === 0){
        alert('ZEBRA')
    }else{
        alert("the product is not divisible by 3")
    }
}

multiplyThree(4, 2, 2)
multiplyThree(10, 2, 3)