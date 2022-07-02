const { ApolloServer } = require('apollo-server-express')
const express = require('express')

const { typeDefs, resolvers } = require('./schema')
const ToDoAPI = require('./services/todo')
const UserAPI = require('./services/user')
const PostAPI = require('./services/post')
const CommentAPI = require('./services/comment')
const AlbumAPI = require('./services/album')
const PhotoAPI = require('./services/photo')

const expressed = async () => {
    const app = express()
    const server = new ApolloServer({
        typeDefs,
        resolvers,
        dataSources: () => {
            return {
                todoAPI: new ToDoAPI(),
                userAPI: new UserAPI(),
                postAPI: new PostAPI(),
                commentAPI: new CommentAPI(),
                albumAPI: new AlbumAPI(),
                photoAPI: new PhotoAPI(),
            }
        }
    })

    await server.start()
    server.applyMiddleware({ app, path: '/graphql' })

    app.listen({ port: 4001 }, () => {
        console.log(`Server started at http://localhost:4001${server.graphqlPath}`)
    })
}

expressed()