const Recipe = require("./models/Recipe");
const { find } = require("./models/Recipe");
const { json } = require("body-parser");
const jwt = require ('jsonwebtoken');

const createToken = (user, secret, expiresin) => {

    const { userName, email } = user;

    return jwt.sign({ userName, email }, secret, { expiresin })
}


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
        },

        signupUser: async (root, { userName, email, password}, { User }) => {
            const user = await user.findOne({ userName });

            if (user) {
                throw new Error('user already exists')
            }

            const newUser = await new User({
                userName,
                email,
                password
            }).save();
            return { token: createToken(newUser, process.env.SECRET, '1hr')};
        }
    }
};