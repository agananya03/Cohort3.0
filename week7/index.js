const express=require('express');
const {UserModel, TodoModel} = require('./db');
const app=express();
const jwt=require('jsonwebtoken');
const mongoose=require("mongoose");
require('dotenv').config();
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error(err));
//mongoose.connect("mongodb+srv://ananya03:ananya03@cluster0.gpuf17o.mongodb.net/todo-app-database");
app.use(express.json());
const JWT_SECRET="ananya30";

app.post('/signup', async function(req,res){
    const email=req.body.email;
    const password=req.body.password
    const name=req.body.name;

    await UserModel.create({
        email: email,
        password: password,
        name: name
    })

    res.json({
        message: "You are signed up"
    });

});

app.post('/signin', async function(req,res){
     const email=req.body.email;
     const password=req.body.password;

    const user= await UserModel.findOne({
        email: email,
        password: password
    })
    console.log(user);
    if(user){
        const token =jwt.sign({
            id: user._id.toString()
        },JWT_SECRET);
        res.json({
             token
        });
    } else{
        res.status(403).json({
          message: "you can't sign in"  
        })
    }

});

app.post('/todo',auth, function(req,res){
    const userID=req.userID;
    const title=req.body.title;
    const done=req.body.done;
    TodoModel.create({
        title,
        userID,
        done
    })
    res.json({
        userID: userID
    })
});

app.get('/todos',auth, async function(req,res){
    const userID=req.userID;
    const todos =await TodoModel.find({
        userID: userID
    })
    req.json({
       todos
    })
});

function auth(req,res,next){
const token=req.headers.token;
const decodeddata=jwt.verify(token,JWT_SECRET);
if(decodeddata){
    req.userID= decodeddata.id;
    next();
} else{
    req.status(403).json({
        message:"Incorrect credentials"
    })
}
}

app.listen(3000);
