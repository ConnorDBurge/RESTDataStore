const { gql } = require('apollo-server-express')

const commentTypeDefs = gql`
    extend type Query {
        comments(limit: Int = 10): [Comment!]!
        comment(commentId: Int!): Comment!
    }

    type Comment {
        postId: Int
        id: Int
        name: String
        email: String
        body: String
    }
`

const commentResolvers = {
    Query: {
        comments: async (_, args, { dataSources }) => {
            return dataSources.commentAPI.getComments(args)
        },
        comment: async (_, args, { dataSources }) => {
            return dataSources.commentAPI.getComment(args)
        }
    }
}

module.exports = { commentTypeDefs, commentResolvers }