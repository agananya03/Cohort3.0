const express=require('express');
const app=express();
const jwt=require('jsonwebtoken'); 

const JWT_SECRET="randomtext";

app.use(express.json());
const users=[];

// function generatetoken(){
//     //generate a random token for user after every sign in
// }

app.post('/signup',function(req,res){
const username=req.body.username;
const password=req.body.password;
 
users.push({
    username: username,
    password: password
})

res.json({
    message: " you are signed in"
})

})

app.post('/signin',function(req,res){
const username=req.body.username;
const password=req.body.password;

let founduser=null;
for(let i=0;i<users.length;i++){
if(users[i].username==username && users[i].password==password){
    founduser=users[i];
}
}
if(founduser){
    const token=jwt.sign({  //converted the username to jwt
        username: username
    }, JWT_SECRET);

    //founduser.token=token;
    res.json({
        token: token
    })
}else{
    res.status(403).send({
        message:" invalid username or password"
    })
}
console.log(users);
// const user=users.find(function(u){
// if(u.username==username) return true;
// else return false;
// })
 })

 app.get('/me',function(req,res){
    const token=req.headers.token;
    const decodedInformation=jwt.verify(token , JWT_SECRET); //converted jwt to  username
    const username = decodedInformation.username;
    let founduser=null;
    for(let i=0;i<users.length;i++){
        if(users[i].username == username){
            founduser=users[i];
        }
    }
    if(founduser){
        res.json({
            username: founduser.username,
            password: founduser.password
        })
    } else{
        res.json({
            message:"token invalid"
        })
    }
 })

app.listen(3000);
