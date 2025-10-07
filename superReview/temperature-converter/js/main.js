//Write your pseduo code first!
document.querySelector('h1'). addEventListener('click', convert);

function convert(){
//get celcius value from input
let enteredVal = Number(document.querySelector('input').value);
//convert celcius to farenheit
let temp = enteredVal * 1.8 + 32;
//show value to user
document.querySelector('h2').innerText = temp;
}
