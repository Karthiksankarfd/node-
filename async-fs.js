const{readFile,writeFile} = require("fs")

// creating asynchronous pattern 
// *first parameter is the path
// *second parameter utf-8 encoding 
// *third is a call back function (err, result)=>{}
readFile("./content/first.txt", "utf-8", (err,result)=>{
    if(err){
        console.log(err)
        return;
    }
    const first = result
    readFile("./content/second.txt", "utf-8", (err, result)=>{
        if(err){
            console.log(err)
            return;
        }
        const second = result
    })

    writeFile("./content/result-async.txt", "utf-8", (err, result)=>{
        if(err){
            console.log(err)
            return;
        }
        console.log(result)
    })
})
// ! this above code contains call back hell => call back function nested inside another callback