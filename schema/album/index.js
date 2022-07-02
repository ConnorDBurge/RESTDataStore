const { gql } = require('apollo-server-express')

const albumTypeDefs = gql`
    extend type Query {
        albums: [Album!]!
        album(userId: Int!, albumId: Int!): Album!
    }

    type Album {
        userId: Int
        id: Int
        title: String
        photos: [Photo!]!
    }
`

const albumResolvers = {
    Query: {
        albums: async (_, args, { dataSources }) => {
            return await dataSources.albumAPI.getAlbums(args)
        },
        album: async (_, args, { dataSources }) => {
            return await dataSources.albumAPI.getAlbum(args)
        }
    },
    Album: {
        photos: async (parent, args, { dataSources }) => {
            return await dataSources.photoAPI.getPhotos(args, { albumId: parent.id })
        }
    }
}

module.exports = { albumTypeDefs, albumResolvers }