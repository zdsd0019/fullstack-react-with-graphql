const Recipe = require("./models/Recipe")

exports.resolver = {
    Query: {
        getAllRecipes: () => {}
    },

    Mutation: {

        addRecipe: async (root, { name, category, description, instructions, username }, { Recipe }) => {
            const newRecipe = await new Recipe({
                name,
                description,
                category,
                instructions,
                username
            }).save();
            return newRecipe
        }
    }
}