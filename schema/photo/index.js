const { gql } = require('apollo-server-express')

const photoTypeDefs = gql`
    type Query {
        photos(limit: Int = 10): [Photo!]!
        photo(photoId: Int!): Photo!
    }

    type Photo {
        albumId: Int
        id: Int
        title: String
        url: String
        thumbnailUrl: String
    }
`

const photoResolvers = {
    Query: {
        photos: async (_, args, { dataSources }) => {
            return await dataSources.photoAPI.getPhotos(args)
        },
        photo: async (_, args, { dataSources }) => {
            return await dataSources.photoAPI.getPhoto(args)
        }
    }
}

module.exports = { photoTypeDefs, photoResolvers }