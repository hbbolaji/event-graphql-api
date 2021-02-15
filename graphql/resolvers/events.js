const {UserInputError} = require('apollo-server')
const Event = require('../../models/event')
const eventValidator = require('../../utils/eventInputValidator')
const resolvers = {
  Query: {
    events: async() => {
      try {
        const events = await Event.find().sort({name: 1})
       return events
      } catch (err) {
        throw new Error(err)
      }
    }
  },
  Mutation: {
    createEvent: async(_, {eventInput}) => {
      try {
        const {valid, error} = eventValidator(eventInput)
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
    },
    deleteEvent: async(_, {id}) => {
      try {
        await Event.findByIdAndRemove(id, {
          useFindAndModify: false
        })
        return 'Event is Deleted!'
      } catch(err) {
        throw new Error(err)
      }
    },
    updateEvent: async(_, {id, newEvent} ) => {
      try {
        await Event.findByIdAndUpdate(id, newEvent)
        
        return {
          id, ...newEvent
        }
      } catch(err) {
        throw new Error(err)
      }
    }
  }
}

module.exports = resolvers