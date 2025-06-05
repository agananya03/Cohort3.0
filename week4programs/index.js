
const express= require("express");
const app= express();

var users=[{
    name: 'john',
    kidneys :[{
        healthy:false
    },{
        healthy:true
    }]
}]
app.use(express.json());
app.get('/',function(req,res){
    const johnkidneys=users[0].kidneys;
    const numberofkidneys=johnkidneys.length;
    let healthykidneys=0;
    for(let i=0;i<johnkidneys.length;i++){
        if(johnkidneys[i].length){
            healthykidneys=healthykidneys+1;
        }
    }
    let unhealthykidneys=numberofkidneys-healthykidneys;
    res.json({
        numberofkidneys,
        healthykidneys,
        unhealthykidneys,
    })
})
app.post('/',function(req,res){
    const ishealthy=req.body.ishealthy;
    users[0].kidneys=push({
        healthy: ishealthy
    })
    res.json({
        msg: "Done."
    })
})
app.listen(3000);