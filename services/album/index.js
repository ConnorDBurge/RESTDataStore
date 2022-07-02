const { RESTDataSource } = require('apollo-datasource-rest')
const { filter } = require('lodash')

class AlbumAPI extends RESTDataSource {
    constructor() {
        super()
        this.baseURL = 'https://jsonplaceholder.typicode.com/albums'
    }

    async getAlbums({ limit }, parent) {
        const data = await this.get('')
        const userId = parent?.userId
        const albums = userId ? filter(data, { userId }) : data
        return limit ? albums.splice(0, limit) : albums
    }

    async getAlbum({ albumId }) {
        return await this.get(`${baseURL}/${albumId}`)
    }
}

module.exports = AlbumAPI