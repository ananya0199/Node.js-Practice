const http = require('http');

const port =3000;

const server = http.createServer((req,res)=>{
    if(req.url ="/"){
        res.write("Server responded");
        res.end()
    }
});
server.listen(port,()=>{
    console.log(`Server running on port ${port}`);
})