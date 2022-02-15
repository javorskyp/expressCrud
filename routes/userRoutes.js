const express = require('express')
const router = express.Router()
const { registerUser, loginUser, getUser } = require ('../backend/controllers/userController')
const { protect } = require('../backend/middleware/authMiddleware')

router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/user', protect, getUser)


module.exports = router