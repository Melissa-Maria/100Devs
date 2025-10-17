// Musketeers
// Write a program that:
//     Creates an array named musketeers containing values "Athos", "Porthos" and "Aramis".
let musketeers = ["Athos", "Porthos", "Aramis"];
//     Shows each array element using a for loop.
for (let i = 0; i < musketeers.length; i++) {
  console.log(musketeers[i])
  
;}
//     Adds the "D'Artagnan" value to the array.
musketeers.push("D'Artagnan");
console.log(musketeers);
//     Shows each array element using the forEach() method.
musketeers.forEach(musketeer => {
  console.log(musketeer);
});
//     Remove poor Aramis.
musketeers.splice(2,1);
console.log(musketeers);
//     Shows each array element using a for-of loop.
for(musketeer of musketeers){
    console.log(musketeer);
}