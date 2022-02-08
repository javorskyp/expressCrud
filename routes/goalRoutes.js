const express = require('express')
const router = express.Router()
const { getGoals, setGoals, updateGoals, deleteGoals } = require('../backend/controllers/goal.Controller')

router.route('/').get(getGoals).post(setGoals)
router.route('/:id').put(updateGoals).delete(deleteGoals)

module.exports = router

