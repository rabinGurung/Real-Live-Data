const express = require('express')
const app = express()
require('dotenv').config({ debug: process.env.DEBUG })
const bodyparser = require('body-parser')
const {insertUser,getUsers} = require('./databaseController/user')
const {generateHash, compareHash} = require('./auth/hash/hash')

// this is the access control
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next()
})
app.use(bodyparser.json())



app.get('/getUsers',getUsers)
app.post('/addUser',generateHash,insertUser)


app.listen(process.env.port, () => console.log('server is ready') )
module.exports = app