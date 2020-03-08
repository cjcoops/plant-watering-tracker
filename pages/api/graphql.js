import { ApolloServer, gql } from "apollo-server-micro"
import connectDb from "../../lib/mongoose"

const typeDefs = gql`
  type Query {
    sayHello: String
  }
`

const resolvers = {
  Query: {
    sayHello: () => {
      return "Hello Level Up!"
    }
  }
}

const apolloServer = new ApolloServer({ typeDefs, resolvers })

export const config = {
  api: {
    bodyParser: false
  }
}

const server = apolloServer.createHandler({ path: "/api/graphql" })
export default connectDb(server)
