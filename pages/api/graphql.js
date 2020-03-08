import { ApolloServer, gql } from "apollo-server-micro"
import { mergeResolvers, mergeTypeDefs } from "graphql-toolkit"
import connectDb from "../../lib/mongoose"

import { plantsMutations } from "../../api/plants/mutations"
import { plantsResolvers } from "../../api/plants/resolvers"
import Plants from "../../api/plants/Plants.graphql"

const typeDefs = Plants

const resolvers = mergeResolvers([plantsMutations, plantsResolvers])

const apolloServer = new ApolloServer({ typeDefs, resolvers })

export const config = {
  api: {
    bodyParser: false
  }
}

const server = apolloServer.createHandler({ path: "/api/graphql" })
export default connectDb(server)
