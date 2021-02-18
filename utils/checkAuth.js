const jwt = require('jsonwebtoken')
const {AuthenticationError} = require('apollo-server')
const {secret} = require('./config')


module.exports = (context) => {
  const authHeader = context.req.headers.authorisation
  if (authHeader) {
    const user = jwt.verify(authHeader, secret)
    return user
  } else {
    throw new AuthenticationError('Invalid or Expired Token', {
      errors: {
        user: 'you are not logged in'
      }
    })
  }
}