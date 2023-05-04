const express = require('express')
const mongodb = require('mongodb-legacy')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use (express.static('public'));

app.listen(3000, () => {
    console.log('escuchando en el  3000');   
})

const MongoClient = mongodb.MongoClient;

MongoClient.connect('mongodb://127.0.0.1:27017',(err, client)=>{

if(error != undefined) {
    throw new Error(error)
} else {
    console.log('connected to Database')
    app.locals.db = client.db('martes')
}
})