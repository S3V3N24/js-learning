//arrays

const myArr = [1, 2, 3, 4, 5]
// const myHeros = ['ironman', 'hulk']
// const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr2[3]);

//arrays methods

// myArr.push(7) //used to add a new value in the end
// myArr.pop() //used to remove the last value
// console.log(myArr);

// myArr.unshift(7) //used to enter value in the start.
// myArr.shift()//used to remove the firt value.

// console.log(myArr);

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9));

// const newArr = myArr.join()

// console.log(myArr)
// console.log(newArr);
// console.log(typeof newArr);

//slice and splice

console.log("A", myArr)

const myn1 = myArr.slice(1,3) //this not gonna include 3.

console.log(myn1);
console.log("B", myArr)

const myn2 = myArr.splice(1,3) //remove entered portion from the array.
console.log("C", myArr)
console.log(myn2);












