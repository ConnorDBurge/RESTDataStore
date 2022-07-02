const { RESTDataSource } = require('apollo-datasource-rest')
const { filter } = require('lodash')

class PhotoAPI extends RESTDataSource {
    constructor() {
        super()
        this.baseURL = 'https://jsonplaceholder.typicode.com/photos'
    }

    async getPhotos(args, parent) {
        const data = await this.get('')
        const albumId = parent?.albumId
        return albumId ? filter(data, { albumId }) : data
    }
}

module.exports = PhotoAPI