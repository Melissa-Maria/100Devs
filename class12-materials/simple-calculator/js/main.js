// let total = 0

// document.querySelector('#pumpkin').addEventListener('click', makeZero)
// document.querySelector('#dominosPizza').addEventListener('click', jumanji)
// document.querySelector('#zebra').addEventListener('click', add9)
// document.querySelector('#cantThinkOfAnything').addEventListener('click', sub2)

// function makeZero() {
//   total = 0
//   document.querySelector('#placeToPutResult').innerText = total
// }

// function jumanji() {
//   total = total + 3
//   document.querySelector('#placeToPutResult').innerText = total
// }

// function add9() {
//   total = total + 9
//   document.querySelector('#placeToPutResult').innerHTML = total
// }

// function sub2() {
//   total = total - 2
//   document.querySelector('#placeToPutResult').innerHTML = total
// }


// let total = 0;

// document.querySelector('#pumpkin').addEventListener('click', makeZero);
// document.querySelector('#dominosPizza').addEventListener('click', addThree);
// document.querySelector('#zebra').addEventListener('click', addNine);
// document.querySelector('#cantThinkOfAnything').addEventListener('click', subTwo);
// document.querySelector('#frog').addEventListener('click', subFive);

// function makeZero(){
//   total = 0;
//   document.querySelector('#placeToPutResult').innerText = total;
// }

// function addThree(){
//   total = total + 3;
//   document.querySelector('#placeToPutResult').innerText = total;
// }

// function addNine(){
//   total = total + 9;
//   document.querySelector('#placeToPutResult').innerText = total;
// }

// function subTwo(){
//   total = total - 2;
//   document.querySelector('#placeToPutResult').innerText = total;
// }

// function subFive(){
//   total = total - 5;
//   document.querySelector('#placeToPutResult').innerText = total;
// }

// let total = 0;

// document.querySelector('#pumpkin').addEventListener("click", zero);
// document.querySelector('#dominosPizza').addEventListener("click", plusThree);
// document.querySelector('#zebra').addEventListener("click", plusNine);
// document.querySelector('#cantThinkOfAnything').addEventListener("click", minusTwo);
// document.querySelector('#frog').addEventListener("click", minusFive);

// function zero(){
// let total = 0;
// document.querySelector('#placeToPutResult').innerText = total;
// }

// function plusThree(){
//   total = total + 3;
//   document.querySelector('#placeToPutResult').innerText = total;
// }

// function plusNine(){
//   total = total + 9;
//   document.querySelector('#placeToPutResult').innerText = total;
// }

// function minusTwo(){
//   total = total - 2;
//   document.querySelector('#placeToPutResult').innerText = total;
// }

// function minusFive(){
//   total = total - 5;
//   document.querySelector('#placeToPutResult').innerText = total;
// }

let total = 0;

document.querySelector('#pumpkin').addEventListener('click', zero);
document.querySelector('#dominosPizza').addEventListener('click', plusThree);
document.querySelector('#zebra').addEventListener('click', plusNine);
document.querySelector('#cantThinkOfAnything').addEventListener('click', minusTwo);
document.querySelector('#frog').addEventListener('click', minusFive);
document.querySelector('#crunch').addEventListener('click', timesTwo);

function zero(){
  total = 0;
  document.querySelector('#placeToPutResult').innerText = total;
}

function plusThree(){
  total = total + 3;
  document.querySelector('#placeToPutResult').innerText = total;
}

function plusNine(){
  total = total + 9;
  document.querySelector('#placeToPutResult').innerText = total;
}

function minusTwo(){
  total = total - 2;
  document.querySelector('#placeToPutResult').innerText = total;
}

function minusFive(){
  total = total - 5;
  document.querySelector('#placeToPutResult').innerText = total;
}

function timesTwo(){
  total = total * 2;
  document.querySelector('#placeToPutResult').innerText = total;
}