// const prompt = require('prompt-sync')();
// let number = Number(prompt("Enter any number: "));

// switch (number) {
//     case 1:
//         console.log("hello");
//         break;
//     case 2:
//         console.log("hi");
//         break;
//     case 3:
//         console.log("bye");
//         break;
//     default:
//         console.log("Invalid number");
// }





//////////////////////calculater/////////////////////////////////

const prompt = require('prompt-sync')();
let choice = prompt("enter any symbol");
let a = 9
let b = 10


switch(choice){

    case '+':
        console.log(a+b) 
        break;
    case '-':
        console.log(a-b)
        break;
    case '*':
        console.log(a*b);
        break;

    case '/':
        console.log(a/b);
        break;

}