// function greet(text){
//     console.log(`Welcome to our website ` + text);
// }

// console.log(`rest of the code`);


// function signup(){
//     let name = prompt(`What is your name`);
//     greet(name);
// }
// // 
// // 
// // 
// signup();

function max(number1 = 0, number2 = 0){
    if(number1 > number2){
        return number1;
    }
    else{
        return number2;
    }
}

let inbox = max(3);
console.log(inbox);