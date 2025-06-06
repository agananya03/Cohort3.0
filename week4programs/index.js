
// const express= require("express");
// const app= express();

// var users=[{
//     name: 'john',
//     kidneys :[{
//         healthy:false
//     },{
//         healthy:true
//     }]
// }]
// app.use(express.json());
// app.get('/',function(req,res){
//     const johnkidneys=users[0].kidneys;
//     const numberofkidneys=johnkidneys.length;
//     let healthykidneys=0;
//     for(let i=0;i<johnkidneys.length;i++){
//         if(johnkidneys[i].length){
//             healthykidneys=healthykidneys+1;
//         }
//     }
//     let unhealthykidneys=numberofkidneys-healthykidneys;
//     res.json({
//         numberofkidneys,
//         healthykidneys,
//         unhealthykidneys,
//     })
// })
// app.post('/',function(req,res){
//     const ishealthy=req.body.ishealthy;
//     users[0].kidneys=push({
//         healthy: ishealthy
//     })
//     res.json({
//         msg: "Done."
//     })
// })
// app.put('/',function(req,res){
//     for(let i=0;i<users[0].kidneys.length;i++){
//         users[0].kidneys[i].healthy=true;
//     }
//     res.json({
//         msg:"updated to healthy";
//     })
// })
// app.delete('/',function(req,res){
//     const newkidneys=[];
//     for(let i=0;i<users[0].kidneys.length;i++){
//         if(users[0].kidneys[i].healthy){
//             newkidneys.push({
//                 healthy:true
//             })
//         }
//     }
//     users[0].kidneys=newkidneys;
//     res.json({
//         msg  : "done/"
//     })
// })
// app.listen(3000);

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

app.get('/ride1',function(){
    if(oldenough(requestAnimationFrame.query.age)){
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

app.listen(3000);