import Plants from "./plants"
import { GraphQLScalarType } from "graphql"
import { Kind } from "graphql/language"

export const plantsResolvers = {
  Query: {
    async plants() {
      try {
        return await Plants.find()
      } catch (error) {
        console.log(error)
      }
    }
  },

  Date: new GraphQLScalarType({
    name: "Date",
    description: "Date custom scalar",
    parseValue(value) {
      return new Date(value) // value from the client
    },
    serialize(value) {
      return value.getTime() //value sent to the client
    },
    parseLiteral(ast) {
      if (ast.kind === Kind.INT) {
        return new Date(ast.value)
      }
      return null
    }
  })
}
