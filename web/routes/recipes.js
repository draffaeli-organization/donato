// recipes.js

const recipeService = require('./../../service')
const router = require('express').Router();

// retrieve recipes
router.get('/recipes', (rq, rs) => {
    console.log('Processing GET /recipes')
    let criteria = rq.query.criteria
    rs.json(recipeService.fetch(criteria))
})

// retrieve specific recipe
router.get('/recipes/:id', (rq, rs) => {
    const id = rq.params['id']
    console.log(`Processing GET /recipes/${id}`)

    const recipe = recipeService.fetchById(id)
    if (!recipe) {
        console.log(`recipe with id ${id} not found`)
        rs.status(404).send(`Resource ${id} not found`)
    } else {
        rs.json(recipe)
    }
})

// add new punctuation to a recipe
router.post('/recipes/:id/punctuation', (rq, rs) => {
    rs.send(`very soon you can add a punctuation`)
})

module.exports = router
