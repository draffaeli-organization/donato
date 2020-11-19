// recipes.js

const recipeServiceModule = require('./../../service')
const criteriaFactory = recipeServiceModule.criteriaFactory
const service = recipeServiceModule.service
const punctuationValidator = recipeServiceModule.punctuationValidator
const router = require('express').Router();

/*// retrieve recipes
router.get('/recipes', (rq, rs) => {
    console.log('Processing GET /recipes')
    const criteria = criteriaFactory.create(rq.query)
    console.log(`Finding recipes with "${Object.entries(criteria)}"`)
    const result = service.fetch(criteria)
    rs.json(result)
})*/

// retrieve recipes
router.get('/recipes', (rq, rs, next) => {
    console.log('Processing GET /recipes')
    const criteria = criteriaFactory.create(rq.query)
    console.log(`Finding recipes with "${Object.entries(criteria)}"`)
    service.fetchCallBack(criteria, (err, result) => {
        if (err) {
            next(err)
        } else {
            rs.json(result)
        }
    })
})

// retrieve specific recipe
router.get('/recipes/:id', (rq, rs) => {
    const id = rq.params['id']
    console.log(`Processing GET /recipes/${id}`)
    const recipe = service.fetchById(id)
    if (!recipe) {
        console.log(`recipe with id ${id} not found`)
        rs.status(404).send(`Resource ${id} not found`)
    } else {
        rs.json(recipe)
    }
})



// add new punctuation to a recipe
router.post('/recipes/:id/punctuations', (rq, rs) => {
    const id = rq.params['id']
    console.log(`Processing GET /recipes/${id}/punctuation`)
    const punctuationValue = rq.body['value']

    // validate punctuation
    if (!punctuationValidator.isValid(punctuationValue)) {
        rs.status(400).send("invalid '" + punctuationValue + "'. Accepted values are [1,2,3,4,5]")
    } else {
        // find recipe by id
        if (!service.fetchById(id)) {
            console.log(`recipe with id ${id} not found`)
            rs.status(404).send(`Resource ${id} not found`)
        // append punctuation to existing recipe
        } else {
            service.appendPunctuation(id, punctuationValue)
            rs.status(201).send()
        }
    }
})

module.exports = router
