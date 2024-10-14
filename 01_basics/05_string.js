// const name = "seven"
// const repoCount = 60

// console.log(name + repoCount + "value") // this is an old method. do not use.

// console.log(`hello my name is ${name} and my repo count is ${repoCount}`) //prefer this method.

// const gameName = new String('Seven') //another method for declaring string.

// console.log(gameName[2]); //same as line 14

// console.log(gameName.__prot__); //.__prot__


// console.log(gameName.length);

// console.log(gameName.toUpperCase());

// console.log(gameName.charAt(2)); //same as line 10

// const newGame = gameName.substring(-4,4)
// console.log(newGame)  // use to bring letters. couldn't be negative

// const oldGame = gameName.slice(-1,6)
// console.log(oldGame); //use to bring letters. could bring negative letter.

// const newString = ("     seven    ")
// console.log(newString);
// console.log(newString.trim()); //Trim used for removing unwanted spaces between the letters.

const url = 'seven@1234%20.com' //i want to replace %20 so.
console.log(url.replace('%20', '-'))

console.log(url.includes('seven'))// to find if such keywords exist in the string.

console.log(url.includes('89'))