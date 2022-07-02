const { RESTDataSource } = require('apollo-datasource-rest')

class UserAPI extends RESTDataSource {
    constructor() {
        super()
        this.baseURL = 'https://jsonplaceholder.typicode.com/users'
    }

    async getUsers({ limit }) {
        const data = await this.get('')
        return limit ? data.slice(0, limit) : data
    }

    async getUser({ userId, username }) {
        const data = await this.get('')
        if (userId) return data.find(user => user.id === userId)
        if (!userId && username) return data.find(user => user.username === username)
    }
}

module.exports = UserAPI