// //Write your pseduo code first! 


// //only on click
// document.querySelector('#yell').addEventListener('click', run);

// function run() {
//     // console.log("Hello");
// //grab temp value from input
// let temp = document.querySelector('#firstName').value;

// //convert from F to C
// temp = temp * 9/5 + 32;

// //show result in DOM
// document.querySelector('#placeToYell').innerText = temp;
// }

//pseudo code first!!

//run on click
document.querySelector('#yell').addEventListener('click', findTemp);

function findTemp(){
//grab value from input
let temp = document.querySelector('#firstName').value;

//convert value from F to C
temp = temp * 9/5 + 32;

//show answer in DOM 
document.querySelector('#placeToYell').innerText = temp;
}




