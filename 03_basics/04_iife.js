// immediately invoked function expression (iife)

function chai(){
    console.log(`Data Base connected`);
    
}
chai();

((name) => {
    console.log(`data base two connected ${name}`);
    
})("seven")
