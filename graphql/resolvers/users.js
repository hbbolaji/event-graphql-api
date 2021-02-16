const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {UserInputError} = require('apollo-server')

const User = require('../../models/user')
const {validateUserInput} = require('../../utils/userValidation')
const {secret} = require('../../utils/config')

const dummy = {
  username: "hashim",
  email: 'hashim@contact.com',
  createdAt: 'thursday',
  token: 'token'
}

module.exports = {
  Mutation: {
    createUser: async(_, {userInput}) => {
      try{
        // validate user input
        const {errors, valid} = validateUserInput(userInput)
        // check if user does not exist
        if (valid) {
          const user = await User.findOne({email: userInput.email})
          if (!user) {
            // hash password
            const password = await bcrypt.hash(userInput.password, 14)
            const newUser = {
              username: userInput.username,
              email: userInput.email,
              password: password
            }
            const user = new User(newUser)
            const res = await user.save()

            // get tokens and return
            const token = jwt.sign({
              username: res.username,
              id: res._id,
              email: res.email
            }, secret, {expiresIn: '1h'})

            return {
              id: res._id,
              username: res.username,
              email: res.email,
              token
            }

          } else {
            throw new UserInputError('User Already Exist', {
              errors: {
                user: "This email already has an account registered to it"
              }
            })
          }
        } else {
          throw new UserInputError('Invalid Input', {errors})
        }
      } catch(err) {
        throw new Error(err)
      }
    }
  }
}