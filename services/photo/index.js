const { RESTDataSource } = require('apollo-datasource-rest')
const { filter } = require('lodash')

class PhotoAPI extends RESTDataSource {
    constructor() {
        super()
        this.baseURL = 'https://jsonplaceholder.typicode.com/photos'
    }

    async getPhotos({ limit }, parent) {
        const data = await this.get('')
        const albumId = parent?.albumId
        const photos = albumId ? filter(data, { albumId }) : data
        return limit ? photos.splice(0, limit) : photos
    }

    async getPhoto({ photoId }) {
        return await this.get(`${this.baseURL}/${photoId}`)
    }
}

module.exports = PhotoAPI