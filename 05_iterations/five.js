// const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( (item) => { //i used arrow function here. 
//         console.log(item);
    
// })
// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNums = myNums.filter((num) => num > 4)
// console.log(newNums); 

// const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumbers.map( (num) => num+10)
// console.log(newNums);

//chaining
const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNums = myNumbers
.map((num) => num*10)
.map((num) => num + 1)
.filter((num) => num >= 40)
console.log(newNums);