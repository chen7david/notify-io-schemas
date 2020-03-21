# Notify-IO Schemas
Notify-IO Schemas are predefined schemas that can be easily included in your projects.

```js
const { Notify, SchemaBuilder } = require('notify-io')
const { ObjectionSchema, JoiSchema, DefaultSchema } = require('notify-io-schemas')

const schema = new SchemaBuilder().merege({
    ObjectionSchema: ObjectionSchema(SchemaBuilder),
    JoiSchema: JoiSchema(SchemaBuilder),
})

Notify.loadSchema(schema)

const notify = new Notify('validation')
notify
    .message('any.required', 'password', 'password')

console.log(notify)
console.log(schema.keys()) // to see all the keys registered on a schema
```
output:

```js
{
  lang: 'en',
  state: 'validation',
  messages: [
    { message: 'password is required', key: 'password' }
  ]
}

```