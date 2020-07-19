const Router = require('koa-router')

const xhr = new Router({
    prefix: 'xhr'
})

xhr.get('/', (ctx, next) => {
    ctx.body = 'ok'
})

xhr.get('/get', (ctx, next) => {
    ctx.body = {
        method: 'get',
        data: 'get data'
    }
})

xhr.post('/post', (ctx, next) => {
    ctx.body = {
        method: 'post',
        data: 'post data'
    }
})

module.exports = xhr