const express=require('express')
const app=express();

let numberofrequestbyuser={}
setInterval(() => {
    numberofrequestbyuser={}
}, 1000);

app.use(function(req,res,next){
    const userid=req.headers["user-id"];
    if(numberofrequestbyuser[userid]){
     numberofrequestbyuser[userid] = numberofrequestbyuser[userid] + 1;   
     if(numberofrequestbyuser[userid]>5){
            res.status(400).send("noentry");
        }
        else{
            next();
        }
    }
    else{
        numberofrequestbyuser[userid]=1;
        next();
    }
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
app.listen(3000);
module.exports=app;