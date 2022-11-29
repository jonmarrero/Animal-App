require('dotenv').config()
const mongoose = require('./connection')
const animal = require('./animal')


mongoose.connection.on('open', () => {

     // define data we want to put in the database 
    const startingAnimals = [
        {
            species:'Lion', 
            location: 'Africa', 
            lifeExpectancy: 16, 
            extinct: false
        },
        {
            species:'Cheetah', 
            location: 'Africa/Asia', 
            lifeExpectancy: 12, 
            extinct: false
        },
        {
            species:'Siberian Tiger', 
            location: 'Eastern Russia', 
            lifeExpectancy: 15, 
            extinct: false
        },
        {
            species:'Grizzly Bears', 
            location: 'U.S.A', 
            lifeExpectancy: 30, 
            extinct: false
        },
        {
            species:'Anaconda', 
            location: 'South America', 
            lifeExpectancy: 10, 
            extinct: false
        },
        {
            species:'Great White Shark', 
            location: 'Atlantic Ocean', 
            lifeExpectancy: 73, 
            extinct: false
        },
        {
            species:'Bald Eagle', 
            location: 'North America', 
            lifeExpectancy: 30, 
            extinct: false
        }
    ]

    //delete all animals 
    animal.deleteMany({}, (err, data) => {

        // create new animals once old animals are deleted
        animal.create(startingAnimals, (err, createdAnimals) => {
            // log the animals  to the terminal to make sure it works 
            console.log(createdAnimals)
        })
    })
})