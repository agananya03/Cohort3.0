const express=require('express')
const app=express();
let requestcount=0;


app.use(function(req,res,next){
    requestcount=requestcount+1;
    next();
})

app.get('/user',function(req,res){
    res.status(200).json({
        name:'john'
    })
});

app.post('/user' , function(req,res){
    res.status(200).json({
        msg:'created dummy user'
    })
});

app.get('/requestcount', function(req,res){
    res.status(200).json({
        requestcount
    });
});

app.listen(3000);
module.exports=app;