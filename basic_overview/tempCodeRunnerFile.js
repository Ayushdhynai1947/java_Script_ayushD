const prompt = require('prompt-sync')()
let a = parseInt(prompt("Enter the value"));
let b = parseInt(prompt("Enter the value"));
let c = parseInt(prompt("Enter the value"));
if((a > b && a < c ) || (a > c && a < b)){
    console.log(a);
}
else if((b > c && b < a)||(b < c && b > a)){
    console.log(b);
}
else{
    console.log(c);
    
}

