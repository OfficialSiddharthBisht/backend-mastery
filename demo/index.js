const http = require("http");

const port = 5000;
// creating a server will only work when we hit the endpoint
const server = http.createServer((req,res)=>{
    console.log("Server is working");
    console.log("URL", req.url);
    if(req.url === "/"){
        res.end("homepage")
    }
    if(req.url === "/about"){
        res.end("<h1>About Page</h1>")
    }
    else{
    res.end("Will not give the error page by this")
    }
})


server.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})