const request = require('supertest')
const Task = require('../src/models/task')
const app = require('../src/app')
const { userOneId, userOne, userTwoId, userTwo, setupDatabase, taskOne, taskOneId } = require('./fixtures/db.js')
const { response } = require('../src/app')

beforeEach(setupDatabase)

test('Should create task for user', async () => {
    const response = await request(app)
        .post('/tasks')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .send({
            description: 'From my test'
        }).expect(201)

    const task = await Task.findById(response.body._id)
    expect(task).not.toBeNull()
    expect(task.completed).toBe(false)
})

test('Should fetch two tasks for user one', async () => {
    const response = await request(app)
        .get('/tasks')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .send()
        .expect(200)

    expect(response.body).toHaveLength(2)
})

test('Should fail to delete another users task', async () => {
    await request(app)
        .delete(`/tasks/${taskOneId}`)
        .set('Authorization', `Bearer ${userTwo.tokens[0].token}`)
        .send()
        .expect(404)

    expect(Task.findById(taskOneId)).not.toBeNull()
})