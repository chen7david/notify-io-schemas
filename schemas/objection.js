const { Schema } = require('notis')

const schema = new Schema()

schema.create('UniqueViolationError', {
    en: (noun) => `${noun} is already in use!`, 
    zh: (noun) => `${noun}已被占用`,
})

module.exports = schema