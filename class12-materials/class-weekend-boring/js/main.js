// // event listener for button 
// document.querySelector('#check').addEventListener('click', check)

// function check() {

//   //gets value out of the input
//   const day = document.querySelector('#day').value.toLowerCase();

//   //Conditionals go here
//   if (day === "tuesday" || day === "thursday") {
//     //alert("Its a class day")
//     document.querySelector('#placeToSee').innerText = "Class Day";
//   } else if (day === "saturday" || day === "sunday"){
//     //alert("It's the weekend!!")
//     document.querySelector('#placeToSee').innerText = "It's the weekend!";
//   } else {
//     //alert("Boring day")
//     document.querySelector('#placeToSee').innerText = "Boringggggg";
//   }

// }


// //rewrite javaScript!
// document.querySelector('#check').addEventListener("click", checkDay);

// function checkDay(){
//   // console.log('hey');
//   const day = document.querySelector('#day').value.toLowerCase();

//   if (day === "tuesday" || day === "thursday") {
//     document.querySelector('#placeToSee').innerText = "Get to class, it's a class day";
//   } else if ( day === "saturday" || day === "sunday"){
//     document.querySelector('#placeToSee').innerText = "Yay, it's the weekend!!!";
//   } else {
//     document.querySelector('#placeToSee').innerText = "Boringgg";
//   }
// }

// document.querySelector('#check').addEventListener("click", checkDay);

// function checkDay(){
//   const day = document.querySelector('#day').value.toLowerCase();

//   if(day === "tuesday" || day === "thursday"){
//     document.querySelector('#placeToSee').innerText = "Class Day";
//   } else if (day === "saturday" || day === "sunday"){
//     document.querySelector('#placeToSee').innerText = "Yay, it's the weekend!!"
//   } else {
//     document.querySelector('#placeToSee').innerText = "Another boring day"
//   }
// }



document.querySelector('#check').addEventListener('click', check);

function check(){
  let day = document.querySelector('#day').value.toLowerCase();

  if(day === "tuesday" || day === "thursday"){
    document.querySelector('#placeToSee').innerText = "Class Day";
    document.querySelector('#placeToSee').style.color = "violet";
  } else if (day === "saturday" || day === "sunday"){
    document.querySelector("#placeToSee").innerText = "Yay it's the weekend!!"
    document.querySelector('#placeToSee').style.color = "green";
  } else {
    document.querySelector('#placeToSee').innerText = "Another boring day"
  }
}


