//working with variables
let name = "John";
let admin = name;

alert(admin);

//giving the right name
let ourPlanet = "Earth";
let currentUserName = "Mel";

//rewrite usins ? or ||
// function checkAge(age) {
//     if (age > 18) {
//       return true;
//     } else {
//       return confirm('Did parents allow you?');
//     }
//   }
function checkAge(age) {
    return (age > 18) || confirm('Did parents allow you?');
  }

  //Function min(a,b)
  function min(a,b){
    if (a < b){
        return a;
    } else {
        return b;
    }
  }

  //Function pow(x,n)
  function pow(x,n){
    
  }