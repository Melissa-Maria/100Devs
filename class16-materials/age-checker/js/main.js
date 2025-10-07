//Create a conditonal that checks their age
//If under 16, tell them they can not drive
//If under 18, tell them they can't hate from outside the club, because they can't even get in
//If under 21, tell them they can not drink
//If under 25, tell them they can not rent cars affordably
//If under 30, tell them they can not rent fancy cars affordably
//If under over 30, tell them there is nothing left to look forward too
// let age = document.querySelector('#danceDanceRevolution').value;

// if(age < 16 ){
//     console.log("You can't drive")
// } else if(age < 18){
//     console.log("You can't hate from outside the club, because you can't even get in")
// } else if(age < 21){
//     console.log("You can't drink")
// } else if(age < 25){
//     console.log("You can't rent cars affordably")
// } else if(age < 30){
//     console.log("You can't rent fancy cars affordably")
// } else {
//     console.log("There is nothing left to look forward to")
// }

//--- Harder
//On click of the h1
//Take the value from the input
//Place the result of the conditional in the paragraph

//Create a conditonal that checks their age
//If under 16, tell them they can not drive
//If under 18, tell them they can't hate from outside the club, because they can't even get in
//If under 21, tell them they can not drink
//If under 25, tell them they can not rent cars affordably
//If under 30, tell them they can not rent fancy cars affordably
//If under over 30, tell them there is nothing left to look forward too



document.querySelector('h1').addEventListener('click', check);

function check(){

let age = document.querySelector('#danceDanceRevolution').value;
let result = document.querySelector('p');

if(age < 16){
    result.innerText = "Tell them they can not drive"
    // console.log("tell them they can not drive")
} else if(age < 18){
    result.innerText = "tell them they can't hate from outside the club, because they can't even get in"
    // console.log("tell them they can't hate from outside the club, because they can't even get in")
} else if(age < 21){
    result.innerText = "tell them they can not drink"
    // console.log("tell them they can not drink")
} else if(age < 25){
    result.innerText = "tell them they can not rent cars affordably"
    // console.log("tell them they can not rent cars affordably")
} else if(age < 30){
    result.innerText = "tell them they can not rent fancy cars affordably"
    // console.log("tell them they can not rent fancy cars affordably")
} else {
    result.innerText = "tell them there is nothing left to look forward too"
    // console.log("tell them there is nothing left to look forward too")
}
}


//--- Harder
//On click of the h1
//Take the value from the input
//Place the result of the conditional in the paragraph


