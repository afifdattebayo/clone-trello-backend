const router = require('express').Router()
const { getAll, create, getOne, update, destroy } = require("./controller")
const { validateCreate, validateOne, validateUpdate } = require("./validator")
router.get('/todos', getAll)
router.post('/todos', validateCreate, create)
router.get('/todos/:id', validateOne ,getOne)
router.put('/todos/:id', validateUpdate, update)
router.delete('/todos/:id', validateOne, destroy)

module.exports = router