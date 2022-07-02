const { RESTDataSource } = require('apollo-datasource-rest')
const { filter } = require('lodash')

class ToDoAPI extends RESTDataSource {
    constructor() {
        super()
        this.baseURL = 'https://jsonplaceholder.typicode.com/todos/'
    }

    async getToDos({ limit }) {
        const data = await this.get('')
        return data.slice(0, limit)
    }

    async getToDo({ id }) {
        return await this.get(`${this.baseURL}/${id}`)
    }

    async getUserTodos({ userId, limit }) {
        const data = await this.get('')
        return filter(data, { userId }).slice(0, limit)
    }
}

module.exports = ToDoAPI