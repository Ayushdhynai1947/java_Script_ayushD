// console.log(" we can use java script now ")


// //variable declaration
// a =99;
// console.log(a)
// console.log(" hello how are you ,my self ayush ")



// // no declaration is allowd but value is to be assigned when 
// let names = 45;
// names = 32;
// console.log(names)

// //data types  string 
// names = "ayush ";
// console.log(typeof(names))

// //let key word(let ,var ,const) for variable declaration any key word is used
// let names;
// console.log(names)
// ///////////////////////
// const heelo =78;
// console.log(heelo)
// //////
// let hi ;
// hi = 45;
// console.log(hi)
// //////
// var names =89;
// names =61;
// console.log(names)


// /////////////////////////////////operator in java scrypt////////////////////
// //arthematic 
// ///relational opeatoer bitwide oprator

// //4 bitwise operator (and(&))
// let a = 12;
// let n =6;
// console.log(a&n)

// /////////////////////
// var  k = 12;
// var t =6;
// console.log(k>t && k!=t && k==t)


// //////////////// condtional statment 
// let   d = 45;
// let s = 34;
// if(d!=s){
//     console.log(' a is not equal to b')
// }
// else{
//     console.log(' a is equal to  b ')
// }



///////////////////////how to take value input from user//////////////////////////////////////////////////
// const prompt = require('prompt-sync')()
// let value = prompt("enter the value ")
// console.log(value)


///parseInt is used for conversion string to int




//// compare three value and finf the greatest between them 
const prompt = require('prompt-sync')()
let a = parseInt(prompt("Enter the value"));
let b = parseInt(prompt("Enter the value"));
let c = parseInt(prompt("Enter the value"));
if(a > b && a > c ){
    console.log(a);
}
else if(b > c && b > a){
    console.log(b);
}
else{
    console.log(c);
}


