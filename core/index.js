const serve = require('koa-static')
const path = require('path')
const router = require('../router')

class InitServer {
    static init(app) {
        InitServer.initStatic(app)
        InitServer.initRoute(app)
    }

    static initStatic(app) {
        const staticPath = path.join(__dirname, '../static')
        app.use(serve(staticPath))
    }

    static initRoute(app){
        app.use(router.routes(), router.allowedMethods())
    }
}

module.exports = InitServer