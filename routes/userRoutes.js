const express = require('express')
const router = express.Router()
const { registerUser } = require ('../backend/controllers/userController')

router.post('/', registerUser)

module.exports = router