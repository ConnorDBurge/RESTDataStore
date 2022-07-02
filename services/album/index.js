const { RESTDataSource } = require('apollo-datasource-rest')
const { filter, slice } = require('lodash')

class AlbumAPI extends RESTDataSource {
    constructor() {
        super()
        this.baseURL = 'https://jsonplaceholder.typicode.com/albums'
    }

    async getAlbums(args, parent) {
        const data = await this.get('')
        const userId = parent?.userId
        const albums = userId ? filter(data, { userId }) : data
        return args?.limit ? slice(0, args?.limit) : albums
    }

    async getAlbum({ albumId }) {
        return await this.get(`${this.baseURL}/${albumId}`)
    }
}

module.exports = AlbumAPI