//singleton
// object.create

//object literals
const mySym = Symbol("Key1")
const JsUser ={
    name : "s3v3n",
    "hello" : "india",
    [mySym] : "Key1",
    age : 20,
    location : "haryana",
    email : "xyz@gmail.com",
    isLoggedIn: false,     
    lastLoggedIn: ["monday", "satureday"]   
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["hello"]);
// console.log(JsUser[mySym]);

JsUser.email = "seven@xyz"
// Object.freeze(JsUser) // for freezing any changes.
JsUser.email = "hello@xyz"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello js User");
}

JsUser.greetingTwo = function(){
    console.log(`Hello js User, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

