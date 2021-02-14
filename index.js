const {ApolloServer} = require('apollo-server')

const typeDefs = require('./graphql/typeDefs')
const {port} = require('./utils/config')

const resolvers = {
  Query: {
    name: () => "Hashim"
  }
}

const server = new ApolloServer({typeDefs, resolvers})
server.listen(port).then(res => {
  console.log(`server is running at ${res.url}`)
})