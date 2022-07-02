const { gql } = require('apollo-server-express')

const postTypeDefs = gql`
    extend type Query {
        posts(limit: Int = 10): [Post!]!
        post(postId: Int!): Post!
    }

    type Post {
        userId: Int
        id: Int
        title: String
        body: String
        comments(limit: Int = 10): [Comment!]!
    }
`

const postResolvers = {
    Query: {
        posts: async (_, args, { dataSources }) => {
            return dataSources.postAPI.getPosts(args)
        },
        post: async (_, args, { dataSources }) => {
            return dataSources.postAPI.getPost(args)
        }
    },
    Post: {
        comments: async (parent, args, { dataSources }) => {
            return dataSources.commentAPI.getComments(args, { postId: parent.id })
        }
    }
}

module.exports = { postTypeDefs, postResolvers }