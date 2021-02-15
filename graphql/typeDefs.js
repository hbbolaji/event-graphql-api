const {gql} = require('apollo-server')

const typeDefs = gql`
  input EventInput {
    name: String!
    location: String!
    image: String!
    description: String!
    date: String!
    contact: String!
  }
  type Event {
    id: ID!
    name: String!
    location: String!
    image: String!
    description: String!
    date: String!
    contact: String!
  }
  type Query {
    events: [Event!]
  }
  type Mutation {
    createEvent(eventInput: EventInput): Event!
  }
`
module.exports = typeDefs