const express = require('express')
const router = express.Router()
const { getGoals } = require('../backend/controllers/goal.Controller')


router.get('/', getGoals)

router.post('/', (req, res) => {
  res.status(200).json({message: 'Set this message'})
})

router.put('/:id', (req, res) => {
  res.status(200).json({message: `Update this message ${req.params.id}`})
})

router.delete('/:id', (req, res) => {
  res.status(200).json({message: `Delete this message ${req.params.id}`})
})

module.exports = router

