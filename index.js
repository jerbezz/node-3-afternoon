require('dotenv').config()
const express = require('express')
const massive = require('massive')
const products_controllers = require('./products_controllers')

const app = express()

const {SERVER_PORT, CONNECTION_STRING} = process.env

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('DB set!')
    console.log(db.listTables())
}).catch(err => console.log(err))


app.use(express.json())


app.get('/api/products', products_controllers.getAll)
app.get('/api/products/:id', products_controllers.getOne)
app.put('/api/products/:id', products_controllers.update)
app.post('/api/products', products_controllers.create)
app.delete('/api/products/:id', products_controllers.delete)





app.listen(SERVER_PORT, () => {
console.log(`listening on port ${SERVER_PORT}`)
})
