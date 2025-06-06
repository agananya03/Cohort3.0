const express=require("express");
const app=express();


function oldenough(age){
    if(age>=14){
        return true;
    }
    else {
        return false;
    }
}

app.get('/ride1',function(req,res){
    if(oldenough(req.query.age)){
        res.json({
        msg: "yoh have riden the ride 1"
    })
    }
    else{
        res.status(411).json({
            msg:"you are not of eligible age"
        })
    }
})

app.listen(3001);