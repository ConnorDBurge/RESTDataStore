const { gql } = require('apollo-server-express')

const userTypeDefs = gql`

    type Query {
        users(limit: Int = 10): [User!]!
        user(userId: Int, username: String): User
    }

    type User {
        id: Int
        name: String
        username: String
        address: Address
        email: String
        phone: String
        website: String
        company: Company
        posts(limit: Int = 10): [Post!]!
        albums(limit: Int = 10) : [Album!]!
        todos(limit: Int = 10) : [ToDo!]!
    }

    type Address {
        street: String
        suite: String
        city: String
        zipcode: String
        geo: Geo
    }

    type Company {
        name: String
        catchPhrase: String
        bs: String
    }

    type Geo {
        lat: String
        lng: String
    }
`

const userResolvers = {
    Query: {
        users: async (_, args, { dataSources }) => {
            return dataSources.userAPI.getUsers(args)
        },
        user: async (_, args, { dataSources }) => {
            return dataSources.userAPI.getUser(args)
        }
    },
    User: {
        posts: async (parent, args, { dataSources }) => {
            return dataSources.postAPI.getPosts(args, { userId: parent.id })
        },
        albums: async (parent, args, { dataSources }) => {
            return dataSources.albumAPI.getAlbums(args, { userId: parent.id })
        },
        todos: async (parent, args, { dataSources }) => {
            return dataSources.todosAPI.getTodos(args, { userId: parent.id })
        }
    }
}

module.exports = { userTypeDefs, userResolvers } 