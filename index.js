'use strict';

const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema').schema;


const serverPort = process.env.PORT || 3000;
const app = express();

app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true
}));

app.listen(serverPort);