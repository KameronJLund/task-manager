const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connectionUrl = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionUrl, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
    if (error) {
        return console.log('unable to connect to mongoDB')
    }

    const db = client.db(databaseName)

    // db.collection('users').insertOne({
    //     name: 'Kameron',
    //     age: 19
    // }, (error, result) => {
    //     if (error) return console.log('unable to insert user')

    //     console.log(result.ops)
    // })

    // db.collection('users').insertMany([
    //     {
    //         name: 'kameron',
    //         age: 19
    //     }, {
    //         name: 'andrew',
    //         age: 27
    //     },
    // ], (error, result) => {
    //     if (error) console.log('unable to insert users')

    //     console.log(result.ops)
    // })

    db.collection('tasks').insertMany([
        {
            description: 'mop',
            completed: false
        }, {
            description: 'sweep',
            completed: true
        }, {
            description: 'dust',
            completed: false
        },
    ], (error, result) => {
        if (error) console.log('unable to insert collections')

        console.log(result.ops)
    })
})