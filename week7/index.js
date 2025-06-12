const express=require('express');
const {UserModel, TodoModel} = require('./db');
const app=express();
const jwt=require('jsonwebtoken');
const mongoose=require("mongoose");
mongoose.connect("mongodb+srv://ananya03:ananya03@cluster0.gpuf17o.mongodb.net/todo-app-database");
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
            id: user._id
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

app.post('/todo', function(req,res){

});

app.get('/todos', function(req,res){

});

app.listen(3000);
