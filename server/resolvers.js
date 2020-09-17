const Recipe = require("./models/Recipe");
const { find } = require("./models/Recipe");

exports.resolvers = {
    Query: {
        getAllRecipes: async (root, args, { Recipe }) => {
            const allRecipes = await Recipe.find();
            return allRecipes ;
        }
    },

    Mutation: {

        addRecipe: async (root, { name, category, description, instructions, userName }, { Recipe }) => {
            const newRecipe = await new Recipe({
                name,
                description,
                category,
                instructions,
                userName
            }).save();
            return newRecipe;
        }
    }
}