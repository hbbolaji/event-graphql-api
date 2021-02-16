const eventResolvers = require('./events')
const userResolvers = require('./users')
module.exports = {
  Query: {
    ...eventResolvers.Query
  },
  Mutation: {
    ...eventResolvers.Mutation,
    ...userResolvers.Mutation
  }
}