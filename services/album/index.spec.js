const AlbumAPI = require('./')
const { rawAlbums, parsedAlbums } = require('../../__fixtures__/albums')

describe('dataSources.albumAPI', () => {
    let client

    beforeAll(() => {
        client = new AlbumAPI()
        client.initialize({ context: {} }, undefined)
        client.get = jest.fn()
    })

    afterEach(() => {
        jest.clearAllMocks()
    })

    describe('getAlbums', () => {
        test('successful', async () => {
            client.get.mockResolvedValue(rawAlbums)
            const response = await client.getAlbums()
            expect(client.get).toHaveBeenCalledWith(``)
            expect(response).toEqual(rawAlbums)
        })
    })

    describe('getAlbum', () => {
        test('successful', async () => {
            client.get.mockResolvedValue(rawAlbums[0])
            const args = { albumId: 1 }
            const response = await client.getAlbum(args)

            expect(client.get).toHaveBeenCalledWith(`${client.baseURL}/${args.albumId}`)
            expect(response).toEqual(rawAlbums[0])
        })
    })
});
