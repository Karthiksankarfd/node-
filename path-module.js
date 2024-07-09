const path = require("path")
//this returns a platform specific value   = /
console.log(path.sep)

// this will give you filepath by join the whole path
const filepath = path.join("content","subfolder","text.txt" )
console.log(filepath, "This is the file path name")

// this will give you the basefile of the filepath
// here the base name is text.txt s
const basename = path.basename(filepath)
console.log(basename,"this is the base file")

// this will give you the absolute filepath
// __dirname will give us the 
const absolutepath = path.resolve(__dirname ,"content","subfolder","text.txt")
console.log(absolutepath)
