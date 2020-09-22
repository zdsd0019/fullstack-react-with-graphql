exports.typeDefs = `
type Recipe {
    _id: ID
    name: String!
    category: String!
    description: String!
    instructions: String!
    createdDate: String!
    likes: Int,
    userName: String
}

type User {
    _id: ID
    userName: String! @Unique
    password: String!
    email: String!
    joinDate: String
    favourite: [Recipe]
}

type Query {
    getAllRecipes: [Recipe]
}

type Token {
    token: String!
}

type Mutation {
    addRecipe(name: String!, category: String!, description: String!, instructions: String!, userName: String ) : Recipe

    signupUser(userName: String!, email: String!, password: String! ): Token
}
`