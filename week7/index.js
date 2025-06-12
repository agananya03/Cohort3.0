const bcrypt=require("bcrypt");
const express = require('express');
const { UserModel, TodoModel } = require('./db');
const jwt = require('jsonwebtoken');
const mongoose = require("mongoose");

const app = express();
const JWT_SECRET = "ananya30";

app.use(express.json());
mongoose.connect("mongodb+srv://ananya03:ananya03@cluster0.gpuf17o.mongodb.net/todo-app-database")
  
app.post('/signup', async function(req, res) {
  const { email, password, name } = req.body;
    const hashpassword= await bcrypt.hash(password , 5)
    console.log(hashpassword);
  await UserModel.create({ 
    email: email,
    password: hashpassword, 
    name: name });

  res.json({ message: "You are signed up" });
});

app.post('/signin', async function(req, res) {
  const { email, password } = req.body;

  const user = await UserModel.findOne({
     email: email
    });

    if(!user){
        res.status(403).json({
            message: "user does not exist in db"
        })
        return
    }
    const passmatch = await bcrypt.compare(password,user.password);

  if (passmatch) {
    const token = jwt.sign({ id: user._id.toString() }, JWT_SECRET);
    res.json({ token });
  } else {
    res.status(403).json({ message: "you can't sign in" });
  }
});

function auth(req, res, next) {
  const token = req.headers.token;
  try {
    const decodedData = jwt.verify(token, JWT_SECRET);
    req.userID = decodedData.id;
    next();
  } catch (err) {
    res.status(403).json({ message: "Incorrect credentials" });
  }
}

app.post('/todo', auth, function(req, res) {
  const { title, done } = req.body;
  TodoModel.create({ title, userID: req.userID, done });
  res.json({ userID: req.userID });
});

app.get('/todos', auth, async function(req, res) {
  const todos = await TodoModel.find({ userID: req.userID });
  res.json({ todos });
});

app.listen(3000, () => console.log("Server running on port 3000"));
