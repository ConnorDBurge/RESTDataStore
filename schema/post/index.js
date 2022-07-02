const { gql } = require('apollo-server-express')

const postTypeDefs = gql`
    extend type Query {
        posts(limit: Int): [Post!]!
    }

    type Post {
        userId: Int
        id: Int
        title: String
        body: String
        comments: [Comment!]!
    }
`

const postResolvers = {
    Query: {
        posts: async (_, args, { dataSources }) => {
            return dataSources.postAPI.getPosts(args)
        }
    },
    Post: {
        comments: async (parent, args, { dataSources }) => {
            return dataSources.commentAPI.getComments(args, { postId: parent.id })
        }
    }
}

module.exports = { postTypeDefs, postResolvers }