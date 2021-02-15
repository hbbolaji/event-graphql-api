const {UserInputError} = require('apollo-server')
const Event = require('../../models/event')
const eventValidator = require('../../utils/eventInputValidator')
const resolvers = {
  Query: {
    events: async() => {
      try {
        const events = await Event.find()
       return events
      } catch (err) {
        throw new Error(err)
      }
    }
  },
  Mutation: {
    createEvent: async(parents, {eventInput}) => {
      try {
        const {valid, error} = eventValidator(eventInput)
        console.log({valid, error})
        if (valid) {
          const newEvent = new Event(eventInput)
          const result = await newEvent.save()
          return {
            id: result._id,
            ...result._doc
          }
        } else {
          throw new UserInputError('Empty field', {
            errors: error
          })
        }
      } catch(err) {
        throw new Error(err)
      }
    }
  }
}

module.exports = resolvers