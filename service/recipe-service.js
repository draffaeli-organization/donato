// recipe-service.js

const repositoryModule = require('./../repository')
const repository = repositoryModule.repository
const searchMode = repository.searchMode
const criteriaUtils = repositoryModule.criteriaUtils

function fetch(criteria) {
    let recipes
    if (criteriaUtils.isEmpty(criteria)) {
        console.log(`Fetching all recipes`)
        recipes = repository.retrieveAll()
    } else {
        const sanitizedCriteria = criteriaUtils.sanitize(criteria)
        console.log(`Fetching recipes with "${sanitizedCriteria}" criteria`)
        recipes = repository.retrieve(searchMode.BY_DESCRIPTION, sanitizedCriteria)
    }

    if (recipes && recipes.length) {
        let recipesNames = ""
        recipes.forEach(recipe => recipesNames += "\"" + recipe.name + "\" " )
        console.log('Found ' + recipes.length + ' recipes: ' + recipesNames)
    } else {
        console.log('Recipes not found')
    }

    return recipes
}

function fetchById(id) {
    console.log(`fetching recipe with id ${id} from repository`)
    const recipe = repository.retrieve(searchMode.BY_ID, parseInt(id))
    if (recipe) {
        console.log(`recipe found: ${recipe}` )
    }
    return recipe
}

module.exports.fetch = fetch
module.exports.fetchById = fetchById




