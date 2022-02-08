const asyncHandler = require('express-async-handler')


//@route GET
const getGoals = asyncHandler ( async (req, res) => {
  res.status(200).json({message: 'Get goals'})
})

//@route POST
const setGoals = asyncHandler ( async (req, res) => {
  if(!req.body.text) {
    res.status(400)
    throw new Error('Please add text field')
  }

  res.status(200).json({message: 'Set this message'})
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