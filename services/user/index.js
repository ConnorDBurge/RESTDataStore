const { RESTDataSource } = require('apollo-datasource-rest')

class UserAPI extends RESTDataSource {
    constructor() {
        super()
        this.baseURL = 'https://jsonplaceholder.typicode.com/users'
    }

    async getUsers({ limit }) {
        const data = await this.get('')
        return data.slice(0, limit)
    }

    async getUser({ username }) {
        const data = await this.get('')
        return data.find(user => user.username === username)
    }
}

module.exports = UserAPI