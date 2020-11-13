// recipe-service.js

const repositoryModule = require('./../repository')
const repository = repositoryModule.repository
const searchMode = repository.searchMode
const CriteriaType = require('./model/criteria').CriteriaType

// WIP
function sort(criteria) {
    let recipes = fetch(criteria)

    const sort_by = criteria.sort_by
    recipes.sort((a,b) => {
        //a[sort_by]
    })
}

function fetch(criteria) {
    let recipes
    if (criteria.type === CriteriaType.ALL) {
        console.log(`Fetching all recipes`)
        recipes = repository.retrieveAll()
    } else {
        console.log(`Fetching recipes with "${criteria.seachValue}" search text`)
        recipes = repository.retrieve(searchMode.BY_TEXT, criteria.searchValue)
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

module.exports = {fetch, fetchById }




