// // 1. Musketeers
// // Write a program that:
// //     Creates an array named musketeers containing values "Athos", "Porthos" and "Aramis".
// let musketeers = ["Athos", "Porthos", "Aramis"];
// //     Shows each array element using a for loop.
// for (let i = 0; i < musketeers.length; i++) {
//   console.log(musketeers[i])
  
// ;}
// //     Adds the "D'Artagnan" value to the array.
// musketeers.push("D'Artagnan");
// console.log(musketeers);
// //     Shows each array element using the forEach() method.
// musketeers.forEach(musketeer => {
//   console.log(musketeer);
// });
// //     Remove poor Aramis.
// musketeers.splice(2,1);
// console.log(musketeers);
// //     Shows each array element using a for-of loop.
// for(musketeer of musketeers){
//     console.log(musketeer);
// }


     

// 2. Sum of values
// Write a program that creates the following array, then calculates and shows the sum of its 
// values (42 in that case).
// const values = [3, 11, 7, 2, 9, 10];

const values = [3, 11, 7, 2, 9, 10];
let sum = 0;
for(let i = 0; i < values.length; i++){
    sum += values[i];
}

console.log(sum);

// 3. Array maximum
// Write a program that creates the following array, then calculates and shows the array's maximum value.
// const values = [3, 11, 7, 2, 9, 10];