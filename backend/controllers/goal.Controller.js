const asyncHandler = require('express-async-handler')
const Goal = require('../model/goalModel')
const User = require('../model/userModel')

//@route GET
const getGoals = asyncHandler ( async (req, res) => {
  const goals = await Goal.find({ user: req.user.id})

  res.status(200).json(goals)
})

//@route POST
const setGoals = asyncHandler ( async (req, res) => {
  if(!req.body.text) {
    res.status(400)
    throw new Error('Please add text field')
  }
  const goal = await Goal.create ({
    text: req.body.text,
    user: req.user.id,
  })
  res.status(200).json(goal)
})

//@route PUT
const updateGoals = asyncHandler ( async (req, res) => {
const goal = await Goal.findById(req.params.id)

if (!goal) {
  res.status(400)
  throw new Error('Not found goal')
}
const user = await User.findById('req.user.id')

if(!user) {
  res.status(401)
  throw new Error('not found user')
}

if (goal.user.tosString() !== user.id) {
  res.status(401)
  throw new Error('user is not authorized')
}

const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
  new: true,
})

  res.status(200).json(updatedGoal)
})

//@route DELETE
const deleteGoals = asyncHandler ( async (req, res) => {

  const goal = await Goal.findById(req.params.id)

if (!goal) {
  res.status(400)
  throw new Error('Not found goal')
}

const user = await User.findById('req.user.id')

if(!user) {
  res.status(401)
  throw new Error('not found user')
}

if (goal.user.tosString() !== user.id) {
  res.status(401)
  throw new Error('user is not authorized')
}

await goal.remove()

  res.status(200).json({id: req.params.id})
})



module.exports = {
  getGoals,
  setGoals,
  updateGoals,
  deleteGoals,
}