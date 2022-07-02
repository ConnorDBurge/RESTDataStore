const { gql } = require('apollo-server-express')

const userTypeDefs = gql`

    type Query {
        users(limit: Int = 10): [User!]!
        user(username: String!): User
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
        posts: [Post!]!
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
            return dataSources.postAPI.getPosts({ userId: parent.id })
        }
    }
}

module.exports = { userTypeDefs, userResolvers } 