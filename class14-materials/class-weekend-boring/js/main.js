 //Handle Capital Letters, Place result in DOM, add a check for humpday (Wed)

// document.querySelector('#check').addEventListener('click', check)

// function check() {

//   const day = document.querySelector('#day').value.toLowerCase();

//   if(day === "tuesday" || day === "thursday"){
//     // console.log("YOU HAVE CLASS")
//     document.querySelector('#placeToSee').innerText = "YOU HAVE CLASS";
//   }else if( day === "saturday" || day === "sunday"){
//     // console.log("Its The Weekend")
//     document.querySelector('#placeToSee').innerText = "It's the weekend";
//   }else{
//     // console.log("BORING")
//     document.querySelector('#placeToSee').innerText = "BORING";
//   }

// }

 //Handle Capital Letters, Place result in DOM, add a check for humpday (Wed)

document.querySelector('#check').addEventListener('click', checkDay);

function checkDay() {
  let day = document.querySelector('#day').value.toLowerCase();

  if(day === 'tuesday' || day === 'thursday'){
    document.querySelector('#placeToSee').innerText = "Class Day"
  } else if (day === 'wednesday'){
    document.querySelector('#placeToSee').innerText = "It's hump day!"
  } else if(day === 'saturday' || day === 'sunday'){
    document.querySelector('#placeToSee').innerText = "Yay, it's the weekend!!"
  } else {
    document.querySelector('#placeToSee').innerText = "Another boring day"
  }
}
