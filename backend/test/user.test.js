const request = require('supertest')
const app = require('../app')
const User = require('../models/user')

const { userOneId, userOne, setupDatabase } = require('./fixture/db')

beforeEach(setupDatabase)
test('Should signup a new user', async() => {
    await request(app).post('/api/user/signup').send({

        email: undefined,
        password: 'asdasd'
    }).expect(400)
})
test('Should check a user email', async() => {

    await request(app).post('/api/user/signup').send({

        email: 'imniyozbek@gmail.com',
        password: 'MyPass77777!'

    }).expect(400)

})
