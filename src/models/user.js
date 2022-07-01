const mongoose = require('mongoose')
const validator = require('validator')

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        trim: true
    },
    age: {
        type: Number,
        validate(value) {
            if (value < 0) throw new Error('Age must be a positive number')
        },
        default: 0
    },
    email: {
        type: String,
        required: true,
        validate(value) {
            if (!validator.isEmail(value)) throw new Error('email is not valid')
        },
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        trim: true,
        validate(value) {
            if (value.toLowerCase().includes('password')) throw new Error('password cannot include password')
            if (value.length <= 6) throw new Error('password must be 7+ chars')
        }
    }
})

module.exports = User