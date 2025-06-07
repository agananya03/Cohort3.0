const express=require('express')
const app=express();

let errorcount=0;

app.use(function(err,req,res,next){
    res.status(404).send({})
    errorcount = errorcount + 1;
});

app.get('/user' , function(req,res){
    throw new Error("userr not found");
    res.status(200).json({
        name:'john'
    })
})

app.post('/user' , function(req,res){
    res.status(200).json({
        msg:'created dummy user'
    })
});

app.get('/errorcount', function(req,res){
    res.status(200).json({
        errorcount
    });
})

app.listen(3000);
module.exports=app;