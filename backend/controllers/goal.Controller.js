//@route GET
const getGoals = (req, res) => {
  res.status(200).json({message: 'Get goals'})
}

//@route POST
const setGoals = (req, res) => {
  if(!req.body.text) {
    res.status(400)
    throw new Error('Please add text field')
  }

  res.status(200).json({message: 'Set this message'})
}

//@route PUT
const updateGoals = (req, res) => {
  res.status(200).json({message: `Update this message ${req.params.id}`})
}

//@route DELETE
const deleteGoals = (req, res) => {
  res.status(200).json({message: `Delete this message ${req.params.id}`})
}



module.exports = {
  getGoals,
  setGoals,
  updateGoals,
  deleteGoals,
}