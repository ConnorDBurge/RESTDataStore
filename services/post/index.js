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
        const userPosts = userId ? filter(data, { userId }) : data
        return limit ? userPosts.splice(0, limit) : userPosts
    }
}

module.exports = PostAPI