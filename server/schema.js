exports.typeDefs = `
type Recipe {
    name: String!
    category: String!
    description: String!
    instructions: String!
    createdDate: String!
    likes: Int,
    userName: String
}

type User {
    username: String! @Unique
    password: String!
    email: String!
    joinDate: String
    favourite: [Recipe]
}

type Query {
    getAllRecipes: [Recipe]
}
`