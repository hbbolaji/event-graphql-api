const {gql} = require('apollo-server')

const typeDefs = gql`
  input UserInput {
    username: String!
    email: String!
    password: String!
    confirmPassword: String!
  }
  input EventInput {
    name: String!
    location: String!
    image: String!
    description: String!
    date: String!
    contact: String!
  }
  type User {
    id: ID!
    username: String!
    email: String!
    token: String!
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
    deleteEvent(id: ID): String
    updateEvent(id: ID newEvent: EventInput): Event!
    createUser(userInput: UserInput): User!
    loginUser(email: String!, password: String!): User!
  }
`
module.exports = typeDefs