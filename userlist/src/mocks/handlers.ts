import { graphql as executeGraphQL, buildSchema } from 'graphql'
import { graphql, HttpResponse } from 'msw'

const schema = buildSchema(`
  type User {
    id: ID!
    name: String!
  }
 
  type Query {
    getUser: [User]
  }
`)


const user = [{id: "1", name: "ashok"}, {id: "2", name: "arun"}]

export const handlers = [
    graphql.query('getUser', async ({ query, variables }) => {
      const { errors, data } = await executeGraphQL({
        schema,
        source: query,
        variableValues: variables,
        rootValue: {
            getUser: Array.from(user),
        },
      })
   
      return HttpResponse.json({ errors, data })
    }),
  ]