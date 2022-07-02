const { gql } = require('apollo-server-express')

const todoTypeDefs = gql`
    type ToDo {
        userId: Int
        id: Int
        title: String
        completed: Boolean
    }

    extend type Query {
        todo(id: Int!): ToDo!
        todos(limit: Int = 10): [ToDo!]!
        userToDos(userId: Int!, limit: Int = 10): [ToDo!]!
    }
`

const todoResolvers = {
    Query: {
        todo: async (_, args, { dataSources }) => {
            return dataSources.todoAPI.getToDo(args)
        },
        todos: async (_, args, { dataSources }) => {
            return dataSources.todoAPI.getToDos(args);
        },
        userToDos: async (_, args, { dataSources }) => {
            return dataSources.todoAPI.getUserTodos(args)
        }
    }
}

module.exports = { todoTypeDefs, todoResolvers }

