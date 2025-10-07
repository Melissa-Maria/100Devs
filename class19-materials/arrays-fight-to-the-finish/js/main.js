//Create an array of movie titles. Loop through the array and add each element to the h2.

let movies = ['Man on fire', 'Ice Age', 'Moana'];
for(let i = 0; i < movies.length; i++){
    document.querySelector('h2').innerText += movies[i];
}

//Create an array of numbers. Loop through the array and add three to each number and replace the old number.

let numbers = [10, 20, 30];

// numbers.forEach((item, index) => {
//     numbers[index] = item + 3;
// })

//Find the average of all the numbers from question two

let sum = 0;
// numbers.forEach((num) => sum += num);
for(let i = 0; i < numbers.length; i++){
    //first time this runs i would = 0 which would grab 10 and add this to sum, then repeat for next loops
    // sum += numbers[i]
    sum = sum + numbers[i]
} 

//get the average
console.log(sum / numbers.length);