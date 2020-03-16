# Notify-IO Schemas
Notify-IO Schemas are predefined schemas that can be easily included in your projects.

```js
const { NotifyIO, SchemaBuilder } = require('notify-io')
const { ObjectionSchema, JoiSchema } = require('notify-io-schemas')

const schema = new SchemaBuilder().merege({
    ObjectionSchema: ObjectionSchema(SchemaBuilder),
    JoiSchema: JoiSchema(SchemaBuilder),
})

NotifyIO.loadSchema(schema)

const notify = new NotifyIO('validation')
notify
    .message('any.required', 'password', 'password')

console.log(notify)
```

output:

```js
{
  lang: 'en',
  state: 'validation',
  messages: [ { message: 'password is required', key: 'password' } ]
}
```