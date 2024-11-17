//  if statement
//  >, <, >=, <=, !=, ===(for strict checking), !==.

// const temperature = 40

// if (temperature === 60) {
//      console.log("temp is below 40");
// } else {
//     console.log("temp is above 50");
    
// }

//  console.log("executed");


// const score = "200"   

// if (score > 200) {      //function scope
//     let power = "fly"
//     console.log(`user has power ${power}`);
    
// }
//     console.log(`user has power ${power}`);

const balance = 1000

if(balance > 500) console.log("test");  //implicite scope

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("allowed to buy course");
    
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("user is logged in");
    
}