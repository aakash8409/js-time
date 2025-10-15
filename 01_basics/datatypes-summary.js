// #Primitive datatype

//  types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null 
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)

const bigNumber = 213456787654321345672n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name: "Aakash",
    age: 24,
}

const myFunction = function(){
    console.log("Hello world")
}

console.log(typeof anotherId);


//***************************************************************************

// Stack (Primitive), HEap (Non-Primitive)

let myYoutubename = "Aakashsrivastavadotcom"

let anothername = myYoutubename
anothername = "AjSrivastava"

console.log(myYoutubename);

console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl",
}

let userTwo = userOne

userTwo.email = "Aakash@google.com"

console.log(userOne.email);
console.log(userTwo.email);

