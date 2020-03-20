module.exports = (SchemaBuilder) => {

    const schema = new SchemaBuilder()

    schema.create('unknown', {
        en: (code) =>`unknown error, something went wrong - ER${code}`,
        zh: (code) =>`服务器有误 - ER${code}`,
    })

    schema.create('invalid', {
        en: (noun) =>`invalid ${noun}!`,
        zh: (noun) =>`${noun}格式有误`,
    })

    schema.create('incorrect', {
        en: (noun) =>`incorrect ${noun}!`,
        zh: (noun) =>`${noun}不正确`,
    })

    schema.create('required', {
        en: (noun) =>`${noun} required!`,
        zh: (noun) =>`要求${noun}`,
    })

    schema.create('login', {
        en: (noun) =>`welcome back ${noun}!`,
        zh: (noun) =>`欢迎${noun}`,
    })

    schema.create('logout', {
        en: (noun) =>`doodbye ${noun}, hope to see you again soon!`,
        zh: (noun) =>`再见${noun}, 希望很快能再见`,
    })

    schema.create('verified', {
        en: (noun) =>`${noun} verification complete!`,
        zh: (noun) =>`${noun}验证成功!`,
    })

    schema.create('verification_required', {
        en: (noun) =>`${noun} verification incomplete!`,
        zh: (noun) =>`${noun}验证未完成`,
    })

    // CRUD

    schema.create('created', {
        en: (noun) =>`successfully created new ${noun}!`,
        zh: (noun) =>`新${noun}创建成功！`,
    })

    schema.create('create_failed', {
        en: (noun) =>`faild to create new ${noun}!`,
        zh: (noun) =>`新${noun}创建失败！`,
    })

    schema.create('updated', {
        en: (noun) =>`successfully updated ${noun}!`,
        zh: (noun) =>`${noun}信息更新成功`,
    })

    schema.create('update_faild', {
        en: (noun) =>`faild to update ${noun}!`,
        zh: (noun) =>`${noun}信息更新失败`,
    })

    schema.create('deleted', {
        en: (noun) =>`successfully deleted ${noun}!`,
        zh: (noun) =>`${noun}删除成功`,
    })

    schema.create('delete_faild', {
        en: (noun) =>`faild to delete ${noun}!`,
        zh: (noun) =>`${noun}删除失败`,
    })

    return schema

}