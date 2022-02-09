const asyncHandler = require('express-async-handler')

const Goal = require('../model/goalModel')

//@route GET
const getGoals = asyncHandler ( async (req, res) => {
  const goals = await Goal.find()

  res.status(200).json(goals)
})

//@route POST
const setGoals = asyncHandler ( async (req, res) => {
  if(!req.body.text) {
    res.status(400)
    throw new Error('Please add text field')
  }
  const goal = await Goal.create ({
    text: req.body.text
  })

  res.status(200).json(goal)
})

//@route PUT
const updateGoals = asyncHandler ( async (req, res) => {
  res.status(200).json({message: `Update this message ${req.params.id}`})
})

//@route DELETE
const deleteGoals = asyncHandler ( async (req, res) => {
  res.status(200).json({message: `Delete this message ${req.params.id}`})
})



module.exports = {
  getGoals,
  setGoals,
  updateGoals,
  deleteGoals,
}