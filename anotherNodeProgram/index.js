var express = require('express')
const config = require('./config/appconfig')
const fs = require('fs')
const mongoose = require('mongoose')
mongoose.set('useCreateIndex', true)
const bodyParser = require('body-parser')
const cookies = require('cookie-parser')
const helmet = require('helmet')
//importing middleware
const globalMiddleware = require('./middlewares/errorHndler')
const routeLogger = require('./routeLogger/routeLogger')
//creating instance of expressJs
var app = express();
//middleware
app.use(bodyParser.json());
app.use(cookies());
//for security purpose middleware
app.use(helmet())

//using global error handler middleware
app.use(globalMiddleware.errorHandler)
app.use(routeLogger.logIp)

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));
//including route module
const routePath = './route'
fs.readdirSync(routePath).forEach(function (file) {
    if (~file.indexOf('.js')) {
        console.log(routePath + '/' + file)
        let route = require(routePath + '/' + file)
        route.router(app)
    }
});

//using route level middleware
app.use(globalMiddleware.notFoundHandler)

//declaring schema into our application
let modelPath = './schema'
fs.readdirSync(modelPath).forEach(function (file) {
    if (file.indexOf('.js'))
        console.log(modelPath + '/' + file)
    require(modelPath + '/' + file)
});


app.listen(config.port, () => {
    console.log('app is listening on port 8081')
    //connecting to database through mongoose
    let db = mongoose.connect(config.dataBase, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
});
//checking whether the connection is made by mongoose or not
const db = mongoose.connection
db.once('open', _ => {
    console.log('Database connected:', config.dataBase)
})

db.on('error', err => {
    console.error('connection error:', err)
})