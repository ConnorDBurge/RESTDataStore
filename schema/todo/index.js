const { gql } = require('apollo-server-express')

const todoTypeDefs = gql`
    extend type Query {
        todos(limit: Int = 10): [ToDo!]!
        todo(id: Int!): ToDo!
    }

    type ToDo {
        userId: Int
        id: Int
        title: String
        completed: Boolean
    }
`

const todoResolvers = {
    Query: {
        todo: async (_, args, { dataSources }) => {
            return dataSources.todoAPI.getToDo(args)
        },
        todos: async (_, args, { dataSources }) => {
            return dataSources.todoAPI.getToDos(args);
        }
    }
}

module.exports = { todoTypeDefs, todoResolvers }

