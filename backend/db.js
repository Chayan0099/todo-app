const mongoose = require('mongoose'); 
const { string } = require('zod');
// mongodb+srv://chayansarkar2003:i8_rJtTsJyMi6xb@todo-app.1azgij1.mongodb.net/
mongoose.connect('mongodb+srv://chayansarkar2003:i8_rJtTsJyMi6xb@todo-app.1azgij1.mongodb.net/'); 
const todoSchema = mongoose.Schema({
    title: String, 
    description: String, 
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema); 
module.exports = { 
    todo
}