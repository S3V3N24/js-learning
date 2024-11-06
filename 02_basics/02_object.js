//singleton
// object.create

//object literals
const mySym = Symbol("Key1")
const JsUser ={
    name : "s3v3n",
    "hello" : "india",
    age : 20,
    location : "haryana",
    email : "xyz@gmail.com",
    isLoggedIn: false,     
    lastLoggedIn: ["monday", "satureday"]   
}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["hello"]);
console.log(JsUser[mySym]);
