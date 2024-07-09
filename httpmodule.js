const http = require("http");

// Create an HTTP server
const server = http.createServer((req, res) => {
// ?req and res are the objects
// ?req is an gaint object

// Send the response body

// based on the url request we can send the response
// ?the url method will give the url request info 
// *The req.url property in Node.js is part of the request object (req) 
// *that is passed to the callback function when an HTTP server receives a request. 
// *It contains the URL of the incoming request, which includes the path and the query string
  if (req.url === "/") {
    res.end("Hello, World!\n");
  } else if (req.url === "/about") {
    res.end("This is about page");
  } else if (req.url === "/contact") {
    res.end("This is contact page");
  } else {
    res.end(`<h1>We cant found the page</h1> <br/>
        <a href = "/" >Go Back To Home</>
        `);
  }
});

// The server listens on port 3000
server.listen(3000, () => {
  console.log("Server running at http://localhost:3000/");
});
