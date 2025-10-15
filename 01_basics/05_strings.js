const name = "Aakash"
const repoCount = 50

console.log(name + repoCount + " Value");


console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Aakas-hc')

// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('s'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherSting = gameName.slice(-8, 3)
console.log(anotherSting);

const newStringOne = "  Aakash   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url ="https://ajs.com/aakash%20ajs"

url.replace('%20', '-')
console.log(url.replace('%20', '-'));


console.log(url.includes('Aakash'));

console.log(gameName.split('-'));
