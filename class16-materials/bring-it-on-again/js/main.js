// // *Variables*
// // Declare a variable, assign it a value, and alert the value
// let colour = 'green';
// alert(colour);

// // Create a variable, divide it by 10, and console log the value
// let num = 450;
// num = num / 10;

// console.log(num);

// // *Functions*
// // Create a function that multiplys 3 numbers and alerts the product
// function multiplyAlert(num1, num2, num3){
//     alert(num1 * num2 * num3)
// }

// multiplyAlert(3,7,5);

// // Create a function that takes in 4 numbers. Add the first two numbers and subtract the next two. Console log the result
// function fourNum(num1, num2, num3, num4){
//     let result = num1 + num2 - num3 - num4;
//     return result;
// }

// console.log(fourNum(20, 10, 4, 2));

// // *Conditionals*
// // Create a function that takes in 3 numbers. Starting with 100 add the first number, subtract the second, 
// // and divide the third. If the value is greater then 25, console log "WE HAVE A WINNNA"
// function winna(num1, num2, num3){
//     if(100 + num1 - num2 / num3 > 25){
//         console.log("WE HAVE A WINNA")
//     } else {
//         console.log("Sorry no win today")
//     }
// }

// winna(10, 3, 5);

// // Create a function that takes in a day of the week. If it is a weekend alert, "weekend" and if not alert "week day". 
// // Handle capitilization and if the user does not enter a day of the week alert "Try again!"
// function dayOfTheWeek(day){
//     const weekday = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].toLowerCase();
//     const weekend = ["Saturday", "Sunday"].toLowerCase();
//     if(day === weekend){
//         console.log("weekend")
//     } else if(day.value === weekday){
//         console.log("weekday")
//     } 
//      else {
//     console.log("Try again!")
//     }
// }

// dayOfTheWeek();

// //*Loops*
// //Create a function that takes in a number. Console log all values from 1 to that number or greater, but count by 3


// *Variables*
// // Declare a variable, assign it a value, and alert the value
// let faveHobby = "Puzzling";
// alert(faveHobby);

// // Create a variable, divide it by 10, and console log the value
// let divide = 40;
// divide /= 10;
// console.log(divide);

// // *Functions*
// // Create a function that multiplys 3 numbers and alerts the product
// function multiplyThree(num1, num2, num3){
//     let product = num1 * num2 * num3;
//     alert(product);
// }

// multiplyThree(4, 5, 6);

// // Create a function that takes in 4 numbers. Add the first two numbers and subtract the next two. Console log the result
// function arithmetic(num1, num2, num3, num4){
//     let result = (num1 + num2) - num3 - num4;
//     console.log(result);
// }

// arithmetic(18, 4, 2, 3);

// // *Conditionals*
// // Create a function that takes in 3 numbers. Starting with 100 add the first number, subtract the second, 
// // and divide the third. If the value is greater then 25, console log "WE HAVE A WINNNA"
function winna(num1, num2, num3){
    let value = 100 + num1 - num2 / num3;
    if(value > 25){
        console.log("WE HAVE A WINNA")
    } else {
        console.log("Sorry, no win today")
    }
}

winna(50, 3, 2);

// // Create a function that takes in a day of the week. If it is a weekend alert, "weekend" and if not alert "week day". 
// // Handle capitilization and if the user does not enter a day of the week alert "Try again!"
function dayOfTheWeek(day){
    let weekday = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].toLowerCase();
    let weekend = ["Saturday", "Sunday"].toLowerCase();

    if(day === weekday){
        alert("Weekday")
    }else if(day === weekend){
        alert("It's the weekend")
    }else {
        alert("Try again")
    }
}

dayOfTheWeek("SaTURday");

// //*Loops*
// //Create a function that takes in a number. Console log all values from 1 to that number or greater, but count by 3
