const { gql } = require('apollo-server-express')

const commentTypeDefs = gql`
    extend type Query {
        comments(limit: Int = 10): [Comment!]!
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
        }
    }
}

module.exports = { commentTypeDefs, commentResolvers }