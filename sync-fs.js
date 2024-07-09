const{readFileSync, WriteFileSync, writeFileSync} = require("fs")

// for reading the file
// first - the file path , language
const first = readFileSync("./content/first.txt", "utf-8")
const second = readFileSync("./content/second.txt", "utf-8")
console.log(first, second)

// write a file 
writeFileSync("./content/result-sync.txt", `this is the result ${first}, ${second}` ,{flag :"a"})

// writeFileSync("./content/result-sync.txt", "this is the result" ,{flag :"a"})
