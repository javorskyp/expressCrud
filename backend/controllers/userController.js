const jwt = require('jsonwebtoken')
const brypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../model/userModel')

const registerUser = asyncHandler ( async (req, res) => {
  const {name, email, password } = req.body 

  if (!name || !email || !password) {
    res.status(400)
    throw new Error('Please add all fields')
  }

  res.json({message: 'Register User'})
})

const loginUser = asyncHandler ( async (req, res) => {
  res.json({message: 'Login User'})
})


const getUser = asyncHandler ( async (req, res) => {
  res.json({message: 'Data User'})
})


module.exports = {
  registerUser,
  loginUser,
  getUser
}