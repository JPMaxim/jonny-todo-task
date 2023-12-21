// handler functions that will be executed 

const Todo = require("../models/todo")

const getTodos = async (req, res) => {
    // find all items from a mongoose Model method 
    const items = await Todo.find({})
    // respond with an object that has a message and the items from the DB
    res.json({
        message: "all items",
        todos: items
    })
}

const getTodo = async (req, res) => {
    // get id from ':id' param from the route (the :id in the route path)
    const { id } = req.params
    // find todo with Model.findById()
    const todo = await Todo.findById(id)
    // response (res) with .json with the todo found
    res.status(200).json(todo)
}

const createTodo = async (req,res) => {
    // get the text from the req.params
    const { text } = req.params
    // create new todo object with model
    const todoObject = new Todo({
        text
    })
    // await for it to be saved
    const newTodo = await todoObject.save()
    // respond with json()
    res.status(200).json(newTodo)
}

const editTodo = async (req, res,) => {
    // get id from ':id' param from the route
    const  id = req.params.id
    // get text from ':text' param from the route
    const  text = req.params.text
    console.log(req.params)
    // use mongoose model method findByIdAndUpdate
    const item = await Todo.updateOne({"_id": id}, {$set:{text: text}})
    // other method: .findByIdAndUpdate(id, {text: req.params.text})

    res.status(200).json(item)
}

const deleteTodo = async (req, res) => {
    // get id from ':id' param from the route
    const { id } = req.params
    // use mongoose model method findByIdAndDelete
    const todo = await Todo.findByIdAndDelete(id)
    res.status(200).json(todo)
}

module.exports = {
    createTodo,
    getTodos,
    editTodo,
    deleteTodo,
    getTodo
}