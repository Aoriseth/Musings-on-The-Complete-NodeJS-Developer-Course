const fs = require("fs")
// const book = {
//     title:"Ego is the enemy",
//     author:"Ryan Holiday"
// }

// const bookJson = JSON.stringify(book)
// fs.writeFileSync("1 - json.json",bookJson)
// console.log(bookJson)

// const bookJson = fs.readFileSync("1 - json.json")
// const parsedData = JSON.parse(bookJson)
// console.log(parsedData.title)


const person = fs.readFileSync("sample.json")
const parsedData = JSON.parse(person)
console.log(parsedData.name)

parsedData.name = "Lennart"
parsedData.age = 25

const newPerson = JSON.stringify(parsedData)
fs.writeFileSync("sample.json",newPerson)