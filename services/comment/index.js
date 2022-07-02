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
        return postId ? filter(data, { postId }) : data
    }
}

module.exports = CommentAPI