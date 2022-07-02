const { RESTDataSource } = require('apollo-datasource-rest')
const { filter } = require('lodash')

class PostAPI extends RESTDataSource {
    constructor() {
        super()
        this.baseURL = 'https://jsonplaceholder.typicode.com/posts'
    }

    async getPosts(args, parent) {
        const data = await this.get('')
        const userId = parent?.userId
        return userId ? filter(data, { userId }) : data
    }
}

module.exports = PostAPI