// //Write your pseduo code first! 

// //My practice pseudo code
// // user needs a spce to enter value  
// // click button to submit value
// // when the button is clicked need to do math equation to convert c to F 
// // once this conversion is done show answer in DOM

// //Leons explanation
// // 0c --> 32F
// document.querySelector('#yell').addEventListener('click', convert)

// function convert(){
//     // need value in celcius
//     let temp = document.querySelector('#cel').value

//     //conver from celcius to farenheit
//     temp = temp * 9/5 + 32;

//     //show it
//     document.querySelector("#placeToYell").innerText = temp;
// }

// // 0c --> 32F
document.querySelector('#yell').addEventListener('click', convert);

function convert(){
    // need value in celcius
    let temp = document.querySelector('#cel').value;

    //convert from celcius to farenheit
    temp = temp * 9/5 + 32;
 
    //show it
    document.querySelector("#placeToYell").innerText = temp;
}




