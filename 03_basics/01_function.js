// function PrintThis(){
// console.log("s");
// console.log("e");
// console.log("v");
// console.log("e");
// console.log("n");
// }

// function addTwoNumbers(number1 , number2){
// console.log(number1 + number2);
// }
//  addTwoNumbers(3,7)  

function addTwoNumbers(number1 , number2){
// let result = number1 +number2
// return number1 + number2

return number1 + number2

}
const result = addTwoNumbers(3,7)


// console.log("Result: ", result);

function userLoggedin(username){
    if(username === undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} user is logged in`

}

// console.log(userLoggedin());

function calculateCartPrice(...numb1){ //basic this ... converter it into array.
    return numb1
}
 console.log(calculateCartPrice(200, 300, 600));
 