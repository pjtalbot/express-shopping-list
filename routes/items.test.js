process.env.NODE_ENV = 'test'
// sets node environment to testing
const Item = require('../item')

const request = require('supertest')




const app = require('../app')
let items = require('../fakeDb')

beforeEach(function() {
    let oreos = new Item('oreos', 4.00)
    // jest
})

afterEach(function() {
    items.length = 0;
})

// getting all items
// getting a single cat
    // success
    // failure


describe("test /items", () => {
    test('get all cats', async () => {
        const res = await request(app).get('/items')
       

        expect(res.statusCode).toEqual(200)
        expect(res.body.items.length).toBe(1)
    })

    test('POST cats', async () => {
        const res = await request(app).post('/items').send({ name: "doritos", price: 4})

        let allItems = await request(app).get('/items')

        expect(allItems.body.items.length).toEqual(2)
    })
    test('GET specific item', async () => {
        const res = await request(app).get('/items/oreos')
        expect(res.statusCode).toEqual(200)
        
        expect(res.body['item']['price']).toEqual(4.00)
    })

    test('patch item', async () => {

        const res = await request(app).patch('/items/oreos').send({ name: 'yummyRitos', price: 3})
        let allItems = await request(app).get('/items')

        expect(res.statusCode).toEqual(200)
        expect(allItems.body.items.length).toBe(1)
        const updatedItem = await request(app).get('/items/yummyRitos')
        
        expect(updatedItem.body['item']['price']).toEqual(3)
        expect(updatedItem.body['item']['name']).toEqual('yummyRitos')
    })

    test('delete Item', async () => {

        let allItems = await request(app).get('/items')
        expect(allItems.body.items.length).toBe(1)

        const res = await request(app).delete('/items/oreos')

        let newAllItems = await request(app).get('/items')
        console.log(newAllItems)

        expect(newAllItems.body.items.length).toEqual(0)
        

    })

})

