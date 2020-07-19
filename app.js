const Koa = require('koa')
const InitServer = require('./core')

const { log } = require('./utils/util')

const app = new Koa()

InitServer.init(app)

const port = 3000
app.listen(port, () => {
    log(`server is running at ${port}`)
})