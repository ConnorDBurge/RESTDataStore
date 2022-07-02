const { merge } = require('lodash')

const { userTypeDefs, userResolvers } = require('./user')
const { todoTypeDefs, todoResolvers } = require('./todo')
const { postTypeDefs, postResolvers } = require('./post')
const { commentTypeDefs, commentResolvers } = require('./comment')
const { albumTypeDefs, albumResolvers } = require('./album')
const { photoTypeDefs, photoResolvers } = require('./photo')

const typeDefs = [
    userTypeDefs,
    todoTypeDefs,
    postTypeDefs,
    commentTypeDefs,
    albumTypeDefs,
    photoTypeDefs,
]

const resolvers = merge({},
    userResolvers,
    todoResolvers,
    postResolvers,
    commentResolvers,
    albumResolvers,
    photoResolvers
)

module.exports = {
    typeDefs,
    resolvers,
}