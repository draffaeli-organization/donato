// recipe-repository
// json file-system impl

// TODO: improve to use fs.promises
const fs = require('fs')
const path = require('path')

const filePath = path.join(__dirname, 'data/recipes.json')
const encoding = 'utf8'

function retrieveAll() {
    console.log('Retrieving recipes data from json file')
    let recipes
    try {
        const fileContent = fs.readFileSync(filePath, encoding)
        console.log(`File content retrieved ${fileContent}`)
        recipes = JSON.parse(fileContent).items;
    } catch (err) {
        console.log("Error trying to read file " + filePath)
        console.log(err)
        throw err
    }

    return recipes;
}

function retrieve(mode, value) {
    console.log(`Filtering "${mode}" using "${value}"`)
    let result

    const allRecipes = retrieveAll()
    switch (mode) {
        case searchMode.BY_ID:
            console.log(`Filtering by recipe id "${value}"`)
            result = allRecipes.filter(recipe => recipe.id === value)[0]
            break
        case searchMode.BY_TEXT:
            const lowerCaseValue = value.toLowerCase()
            console.log(`Filtering by recipe name, description and/or ingredients for "${lowerCaseValue}"`)
            result = allRecipes.filter(recipe =>
                recipe.name.toLowerCase().includes(lowerCaseValue) ||
                recipe.description.toLowerCase().includes(lowerCaseValue) ||
                recipe.ingredients.some(ig => ig.name.toLowerCase().includes(lowerCaseValue))
            )
            break
    }

    return result;
}

// TODO: refactor and improve
// TODO: missing ut
function addPunctuation(id, punctuationValue) {
    fs.readFile(filePath, encoding, function readFileCallback(err, data){
        if (err){
            console.log(err);
        } else {
            let recipesJson = JSON.parse(data);
            let recipeToUpdate = recipesJson.items.filter(rc => rc.id === parseInt(id))[0]
            recipeToUpdate.punctuation.values.push(parseInt(punctuationValue))
            recipeToUpdate.punctuation.average = punctuationAvg(recipeToUpdate)
            console.log(recipeToUpdate)
            fs.writeFileSync(filePath, JSON.stringify(recipesJson), 'utf8')
        }
    });
}

function punctuationAvg(recipe) {
    return recipe.punctuation.values.reduce((a, b) => a + b, 0) / recipe.punctuation.values.length
}

const searchMode = {
    BY_ID: 'by_id',
    BY_TEXT: 'by_text',
}

module.exports.retrieveAll = retrieveAll
module.exports.retrieve = retrieve
module.exports.searchMode = searchMode
module.exports.addPunctuation = addPunctuation
