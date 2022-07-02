const { RESTDataSource } = require('apollo-datasource-rest')
const { filter } = require('lodash')

class PostAPI extends RESTDataSource {
    constructor() {
        super()
        this.baseURL = 'https://jsonplaceholder.typicode.com/posts'
    }

    async getPosts({ limit }, parent) {
        const data = await this.get('')
        const userId = parent?.userId
        const posts = userId ? filter(data, { userId }) : data
        return limit ? posts.splice(0, limit) : posts
    }

    async getPost({ postId }) {
        return await this.get(`${this.baseURL}/${postId}`)
    }
}

module.exports = PostAPI