// //Create a function that grabs the number of snacks from the input and tells you to stop that many times

// //first set up eventListener
// document.querySelector('#help').addEventListener("click", stopSnacking);

// //second set up function
// function stopSnacking() {
//     //grab value out of the input
//     //wrap input in number to ensure input is a number 
//     let numOfSnacks = Number(document.querySelector('input').value)

//     //make innText of stops empty before running loop
//     document.querySelector('#stops').innerText = "";

//     //now add loop!
//     for(let i = 1; i <= numOfSnacks; i++){
//         document.querySelector('#stops').innerText += ' STOP!'
//     }
// }

// stopSnacking();

//Create a function that grabs the number of snacks from the input and tells you to stop that many times

// //first set up eventListener
// document.querySelector('#help').addEventListener('click', stopSnacking);

// //second set up function
// function stopSnacking(){

// let numOfSnacks = Number(document.querySelector('input').value);

// document.querySelector('#stops').innerText = "";

// for(let i = 0; i <= numOfSnacks; i++){
// document.querySelector('#stops').innerText += 'STOP!';
// }

// }

//Create a function that grabs the number of snacks from the input and tells you to stop that many times


// //first set up eventListener
document.querySelector('#help').addEventListener('click', stop);

// //second set up function
function stop(){
    let numOfSnacks = Number(document.querySelector('input').value);
    document.querySelector('#stops').innerText = "";
    for(let i = 1; i <= numOfSnacks; i++){
        document.querySelector('#stops').innerText += ' STOP!';
    }
}



