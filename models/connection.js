// DATBASE connection 
//////////////////////////////////////
require('dotenv').config() // load env variables 
const mongoose = require ('mongoose') // gives us that db connections and cool methods from CRUD to the data

const DATABASE_URL = process.env.DATABASE_URL
const CONFIG = {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}

// establish our connections 
mongoose.connect(DATABASE_URL, CONFIG)

// log connection events from mongoose 
mongoose.connection
    .on('open', ()=> console.log('Mongoose connected'))
    .on('close', ()=> console.log('Disconnected from Mongoose'))
    .on('error', (error)=> console.log('Mongoose error', error))

// exports mongoose with connections to use in other files 
module.exports = mongoose 