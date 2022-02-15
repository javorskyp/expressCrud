const jwt = require('jsonwebtoken')
const brypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../model/userModel')
const bcrypt = require('bcryptjs/dist/bcrypt')

const registerUser = asyncHandler ( async (req, res) => {
  const {name, email, password } = req.body 

  if (!name || !email || !password) {
    res.status(400)
    throw new Error('Please add all fields')
  }

  const userExist = await User.findOne({email}) 

  if(userExist) {
    res.status(400)
    throw new Error('User exist')
  }

  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)
  const user = await User.create({
    name,
    email,
    password: hashedPassword
  })

  if(user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email
    })
  } else {
    res.status(400)
    throw new Error('Fault user data')
  }
})

  const loginUser = asyncHandler ( async (req, res) => {
  const {email, password} = req.body
  const user = await User.findOne({email})

  if (user && (await bcrypt.compare(password, user.password))) {
    res.json ({
      _id: user.id,
      name: user.name,
      email: user.email
    })
  } else {
    res.status(400)
    throw new Error('Fault email data')
  }
})


const getUser = asyncHandler ( async (req, res) => {
  res.json({message: 'Data User'})
})


module.exports = {
  registerUser,
  loginUser,
  getUser
}