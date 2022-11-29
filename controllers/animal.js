// bring in express 
const express = require('express')
// bring in your animals 
const animal = require('../models/animal')

////////////////////////
// create router variable to attach routes 
///////////////////////
const router = express.Router()



///////////////////////
// actual routes below 
//////////////////////


router.get('/seed', (req, res) => {

})


// index route using the .then method 
router.get('/', (req, res) => {

    // get all animals from mongo and send them back to index.ejs
    animal.find({})
    .then((animals) => {
        //res.json(animals)
        res.render('animals/index.ejs', {animals})
    })
    .catch(err => console.log(err)) // this is how we catch an error from the .then
})


// new route
router.get("/new", (req, res) => {
    res.render("animals/new.ejs")
})


// post route 
router.post('/animals', (req, res) => {

    // req.body.extinct = req.body.extinct === 'on' ? true : false

    animal.create(req.body, (err, createdAnimal) => {
        console.log(createdAnimal)
        res.redirect('/animals')
    })
})


// edit route 
router.get('/:id/edit', (req, res) => {
    // get the id from params
    const id = req.params.id
    // find the animal and send it to the edit.ejs file to prepopulate the form 
    animal.findById(id, (err, foundAnimal) => {
        // res.json(foundAnimal)
        // render the template and send it to animal
        res.render('animals/edit.ejs', { animal: foundAnimal })
    })
})


// update route  
router.put('/:id', (req, res) => {
    // get the id from params 
    const id = req.params.id
    // check if the etinct property should be true or false
    req.body.extinct = req.body.extinct === 'on' ? true : false
    // update the animal 
    animal.findByIdAndUpdate(id, req.body, { new: true }, (err, updatedAnimal) => {
        // the console.log shows the updated animal working in my terminal 
        console.log(updatedAnimal, err)
        // redirect me back to the main page of animals and it will show me the updated animal 
        res.redirect('/animals')
    })
})


// show route 
router.get('/:id', (req, res) => {

    // go and get animal from the database
    animal.findById(req.params.id)
    .then((animal) => {
        // res.json(animal)
        res.render('animals/show.ejs', {animal})
    })
})


// destroy route (delete route) method 1 
router.delete('/:id', (req, res) => {
    // get the id from params 
    const id = req.params.id
    // delete the animal 
    animal.findByIdAndDelete(id, (err, deletedAnimal) => {
        // the console.log shows me my route is working in my terminal 
        console.log(err, deletedAnimal)
        // redirect me back to my main page of animals 
        res.redirect('/animals')
    })
})


// destroy route method 2 
// fruit.findByIdAndDelte(req.params.id)
// .then((deletedFruit) => {
    // console.log(err, deletedFruit)
    // res.redirect('/fruits')
// })
// .catch(err => console.log(err))


// destroy route method 3 async await 
// router.delete('/fruits/:id', async (req, res) => {
 // const deletedFruit = await fruit.findByIdAndDelete(req.params.id)
//if(deletedFruit)
//  res.redirect('/fruits')   
// })



//////////////////////
// exports this router to use in other files 
///////////////////
module.exports = router