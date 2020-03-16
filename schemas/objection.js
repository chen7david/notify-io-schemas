module.exports = (SchemaBuilder) => {

    const schema = new SchemaBuilder()

    schema.create('UniqueViolationError', {
        en: (noun) => `${noun} is already in use!`, 
        zh: (noun) => `${noun}已被占用`,
    })

    return schema

}