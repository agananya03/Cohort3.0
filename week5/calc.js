const express=require("express");
const app=express();

app.get('/sum',function(req,res){
const a=parseInt(req.query.a)
const b=parseInt(req.query.b)
res.json({
    sum: a+b
})
})

app.get('/subtract',function(req,res){
const a=parseInt(req.query.a)
const b=parseInt(req.query.b)
res.json({
    subtract: a-b
})
})

app.get('/multiply',function(req,res){
 const a=parseInt(req.query.a)
const b=parseInt(req.query.b)
res.json({
    multiplication: a*b
})
})

app.get('/divide',function(req,res){
const a=parseInt(req.query.a)
const b=parseInt(req.query.b)
res.json({
    div: a/b
})    
})

app.listen(3000);
module.exports=app;