
const os = require("os")

//runtime  user info 
const user = os.userInfo()
console.log(user)

//Cs system runtime
const runtime = os.uptime()
console.log(runtime , " is the run time ")

// getting systme info by using the os methods inside the object

const currentos ={
    name:os.type(),
    release:os.release(),
    totalmemory:os.totalmem(),
    freemem:os.freemem()
}
console.log(currentos)
