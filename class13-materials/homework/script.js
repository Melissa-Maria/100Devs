// //code supplied
// function ask(question, yes, no) {
//   if (confirm(question)) yes();
//   else no();
// }

// ask(
//   "Do you agree?",
//   function() { alert("You agreed."); },
//   function() { alert("You canceled the execution."); }
// );

// //rewrite with arrow functions
// function ask(question, yes, no) {
//   if (confirm(question)) yes();
//   else no();
// }

// ask(
//     "Do you agree?",
//     () => alert("You agreed."),
//     () => alert("You canceled the execution.")
// );


//JSWay: Loops challanges
//Carousel
// Write a program that launches a carousel for 10 turns, showing the turn number each time.
for(let i = 1; i <= 10; i++){
  console.log(i)
}

// When it's done, improve it so that the number of turns is given by the user.
