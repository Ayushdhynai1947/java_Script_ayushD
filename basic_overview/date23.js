// const prompt = require('prompt-sync')()
// let a = parseInt(prompt("Enter the value"));
// let b = parseInt(prompt("Enter the value"));
// let c = parseInt(prompt("Enter the value"));
// if((a > b && a < c ) || (a > c && a < b)){
//     console.log(a);
// }
// else if((b > c && b < a)||(b < c && b > a)){
//     console.log(b);
// }
// else{
//     console.log(c);
    
// }

////////leap year/////////////////////////////////////////////////////



const prompt = require('prompt-sync')()
let a = Number(prompt("Enter your year"));
if(a%4==0){
    if(y%100==0){
        if(a%400==0){
            console.log("Leap year ")
        }
        else{
            console.log("not a leap year ")
        }


    }
    else{
        console.log("leap year ")
    }
}
else{

    console.log('nto a leap year ')
}
