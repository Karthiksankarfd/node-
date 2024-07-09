// ?modules 
//*They help in organizing and structuring your codebase by allowing you to split it into
//* smaller, manageable chunks. Modules can export functions, objects, or primitive values
// * that can be used by other modules by importing them.

//* commonjs , every file is a module
// * modules -  Encapsulated code - (only share the minimun)

const  names = require ("./fournames")
const sayHi = require ("./5-utils")


sayHi(names.karthik)
sayHi(names.ramesh )
// *here exporting the function by using commonjs module definition