let { SchemaBuilder } = require('notify-io')

schema = new SchemaBuilder()

schema.create('any.required', {
    en: (noun) => `${noun} is required`, 
    zh: (noun) => `得提供${noun}`,
})

schema.create('string.empty', {
    en: (noun) => `${noun} is not allowed to be empty`, 
    zh: (noun) => `${noun}不能为空`,
})

schema.create('boolean.base', {
    en: (noun) => `${noun} must be a boolean`, 
    zh: (noun) => `${noun}必须是布尔值`,
})

schema.create('number.base', {
    en: (noun) => `${noun} must be a number`, 
    zh: (noun) => `${noun}必须是数字`,
})

schema.create('array.base', {
    en: (noun) => `${noun} must be an array`, 
    zh: (noun) => `${noun}必须是数组`,
})

schema.create('number.integer', {
    en: (noun) => `${noun} must be an integer`, 
    zh: (noun) => `${noun}必须是整数`,
})

schema.create('string.min', {
    en: ({label, limit}) => `${label} length must be at least ${limit} characters long`, 
    zh: ({label, limit}) => `${label}至少得是${limit}字幕组成的`,
})

schema.create('string.max', {
    en: ({label, limit}) => `${label} length must be less than or equal to ${limit} characters long`, 
    zh: ({label, limit}) => `${label}不能超过${limit}个字母`,
})

schema.create('any.only', {
    en: ({label, ref}) => `${label} and ${ref} must match`, 
    zh: ({label, ref}) => `${label}和${ref}得相等`
})

module.exports = schema