const { RESTDataSource } = require('apollo-datasource-rest')
const { filter } = require('lodash')

class ToDoAPI extends RESTDataSource {
    constructor() {
        super()
        this.baseURL = 'https://jsonplaceholder.typicode.com/todos/'
    }

    async getToDos({ limit }, parent) {
        const data = await this.get('')
        const userId = parent?.userId
        const todos = userId ? filter(data, { userId }) : data
        return limit ? todos.splice(0, limit) : todos
    }

    async getToDo({ id }) {
        return await this.get(`${this.baseURL}/${id}`)
    }
}

module.exports = ToDoAPI