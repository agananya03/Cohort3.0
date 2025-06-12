require('dotenv').config();
const express = require('express');
const { UserModel, TodoModel } = require('./db');
const jwt = require('jsonwebtoken');
const mongoose = require("mongoose");

const app = express();
const JWT_SECRET = "ananya30";

app.use(express.json());
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("MongoDB connection error:", err));
app.post('/signup', async function(req, res) {
  const { email, password, name } = req.body;

  await UserModel.create({ email, password, name });

  res.json({ message: "You are signed up" });
});

app.post('/signin', async function(req, res) {
  const { email, password } = req.body;

  const user = await UserModel.findOne({ email, password });

  if (user) {
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
