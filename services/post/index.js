const { RESTDataSource } = require('apollo-datasource-rest')
const { filter } = require('lodash')

class PostAPI extends RESTDataSource {
    constructor() {
        super()
        this.baseURL = 'https://jsonplaceholder.typicode.com/posts'
    }

    async getPosts({ userId }) {
        let data = await this.get('')
        return userId ? filter(data, { userId }) : data
    }
}

module.exports = PostAPI