const express = require('express')
const router = express.Router() // create a router
const itemControllers = require('../controllers/items')

// routes to controllers
// the '/items' route will run the getTodos controller
// which will fetch the data from your database
router.get('/items', itemControllers.getTodos)
router.get('/item/:id', itemControllers.getTodo)
router.post('/item', itemControllers.createTodo)
router.patch('/item/:id/:title/:description', itemControllers.editTodo)
router.delete('/item/:id', itemControllers.deleteTodo)

module.exports = router

