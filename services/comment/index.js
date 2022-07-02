const { RESTDataSource } = require('apollo-datasource-rest')
const { filter } = require('lodash')

class CommentAPI extends RESTDataSource {
    constructor() {
        super()
        this.baseURL = 'https://jsonplaceholder.typicode.com/comments'
    }

    async getComments({ limit }, parent) {
        const data = await this.get('')
        const postId = parent?.postId
        const postComments = postId ? filter(data, { postId }) : data
        return limit ? postComments.splice(0, limit) : postComments
    }

    async getComment({ commentId }) {
        return await this.get(`${this.baseURL}/${commentId}`)
    }
}

module.exports = CommentAPI