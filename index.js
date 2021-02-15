const {ApolloServer} = require('apollo-server')

const connection = require('./utils/connectDB')
const typeDefs = require('./graphql/typeDefs')
const resolvers = require('./graphql/resolvers/')
const {port} = require('./utils/config')

connection()


const server = new ApolloServer({typeDefs, resolvers})
server.listen(port).then(res => {
  console.log(`server is running at ${res.url}`)
})