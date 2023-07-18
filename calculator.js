const express  = require("express");
const bodyParser = require('body-parser')
const app = express();
const port = 3000;

app.get("/", (req,res)=>{
    res.send("Server responded")
})
app.use(bodyParser());

app.get("/add",(req,res)=>{
    let sum = req.body.num1 + req.body.num2
    res.send(`Result: ${sum}`)
})

app.get("/sub",(req,res)=>{
    let sub = req.body.num1 - req.body.num2
    res.send(`Result: ${sub}`)
})

app.get("/multiply",(req,res)=>{
    let multiply = req.body.num1 * req.body.num2
    res.send(`Result: ${multiply}`)
})

app.get("/]divide",(req,res)=>{
    let multiply = req.body.num1 / req.body.num2
    res.send(`Result: ${multiply}`)
})

app.listen(port,()=>{
    console.log(`Server responded on port ${port}`);
})