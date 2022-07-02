const { merge } = require('lodash')

const { userTypeDefs, userResolvers } = require('./user')
const { todoTypeDefs, todoResolvers } = require('./todo')
const { postTypeDefs, postResolvers } = require('./post')
const { commentTypeDefs, commentResolvers } = require('./comment')

const typeDefs = [
    userTypeDefs,
    todoTypeDefs,
    postTypeDefs,
    commentTypeDefs,
]

const resolvers = merge({},
    userResolvers,
    todoResolvers,
    postResolvers,
    commentResolvers
)

module.exports = {
    typeDefs,
    resolvers,
}