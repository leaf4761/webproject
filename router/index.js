const Router = require('koa-router')
const xhr = require('./xhr')

const router = new Router({
    prefix: '/api/v1'
})

router.use('/', xhr.routes(), xhr.allowedMethods())

module.exports = router