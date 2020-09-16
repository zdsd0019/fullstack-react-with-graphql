const express = require('express');

const bodyParser = require('body-parser');

const mongoose = require('mongoose');

require('dotenv').config({ path: "variables.env"})

const Recipe = require("./Recipe");

const User = require("./User");

// Bring in GraphQl express middleware
const { graphiqlExpress, graphqlExpress } = require ('apollo-server-express');

const { makeExecutableSchema } = require('graphql-tools');

const { typeDefs } = require('./schema');

const { resolvers } = require('./resolvers');

//  creat schema
const schema = makeExecutableSchema({
    typeDefs,
    resolvers
})

// connects database

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log('DB Connected'))
    .catch(err => console.log(err));

// Initializes application

const app = express();

// Create GraphQL application
app.use('/graphiql', graphiqlExpress({ 
    endpointURL: '/graphql'
}))

// connect schema with Grphql
app.use('/graphql', 

bodyParser.json(),

graphqlExpress({
    schema,
    context: {
        Recipe,
        User
    }

}))

const PORT = process.env.PORT || 4444;

app.listen(PORT, () => {
    console.log(`Server listening on PORT ${PORT}`)
})