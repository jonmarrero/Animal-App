///////////////////////////////
// animals models 
//////////////////////////////

// require mongoose connection to the connection.js file 
const mongoose = require('./connection')


const { Schema, model } = mongoose // destructuring, grabbing model and Schema off mongoose variable 


const animalsSchema = new Schema({
    species: String, 
    location: String, 
    lifeExpectancy: Number, 
    extinct: Boolean
})

const animal = model('Animal', animalsSchema)

module.exports = animal