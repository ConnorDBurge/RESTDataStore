const { RESTDataSource } = require('apollo-datasource-rest')
const { filter } = require('lodash')

class AlbumAPI extends RESTDataSource {
    constructor() {
        super()
        this.baseURL = 'https://jsonplaceholder.typicode.com/albums'
    }

    async getAlbums(args, parent) {
        const data = await this.get('')
        const userId = parent?.userId
        return userId ? filter(data, { userId }) : data
    }

    async getAlbum({ userId, albumId }) {
        const data = await this.get('')
        return data.find(album =>
            album.userId === userId && album.id === albumId)
    }
}

module.exports = AlbumAPI