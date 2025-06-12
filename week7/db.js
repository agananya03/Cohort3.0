const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//const ObjectId = Schema.ObjectId;

const user= new Schema({
    name: String,
    email: {type: String, unique: true},
    password: String
});

const todo = new Schema({
    title: String,
    done: Boolean,
    userID:{
        type: Schema.Types.ObjectId,
    }
});

const UserModel=mongoose.model('users',user);
const TodoModel=mongoose.model('todos',todo);

module.exports = {
     UserModel,
     TodoModel
};