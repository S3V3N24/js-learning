//primitive

// 7 types : string, number, boolean, null, undefined, symbol, bigint.

//refenrence (non-primitive)

// const score = 100
// const scoreValue = 104.6

// let userLoggedIn = false
// let userEmail;

// const id = Symbol('987')
// const anotherId = Symbol('987')

// console.log(id === anotherId)

// array, objects, functions 


// array => ["xyz"] 

//object 
// let myobj = {
//     name: (""),
//     age : 1,
// }
//  const myFunction = function(){
//     console.log("Hello World")
//  }

//  console.log(typeof myFunction);

//++++++++++++++++++++++++++++++++++++++++++++++++

// let myName = "Alexa"
// let yourName = myName

// yourName = "padoshinaam" 
// console.log(myName)
// console.log(yourName)

//reference 

let infoMe = {
   naam: "aps7"
}

let infoAnother = infoMe
infoAnother.naam = "aps7@xyz"
console.log(infoMe.naam)
console.log(infoAnother.naam)
