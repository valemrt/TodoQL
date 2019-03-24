'use strict';

const todos = require('./todos');
const gtools = require('graphql-tools');
const _  = require('lodash');

const typeDefs = `
type Todo {
    id: Int!
    completed: Boolean
    description: String
}

type Query {
    todo(id: Int!): Todo
    list: [Todo]
}

type Mutation {
    addTodo(id: Int!, completed: String, description: String): [Todo]
}`;

const resolvers = {
    Query: {
        // Assuming args equals an object like { id: '1' }
        todo: (parent, args) => {
            let match = _.find(todos.todos, { 'id': parseInt(args.id) });
            console.log('match is '+JSON.stringify(match));
            return match;
        },
        list: () => todos.todos
    },
    Mutation: {
        addTodo: (parent, args) => {
            // Assuming args equals an object like { id: '1', completed: true, description: 'Buy milk' }

            todos.todos.push(args);
            return todos.todos;
        },
    }
};

module.exports.schema = gtools.makeExecutableSchema({
    typeDefs,
    resolvers,
});
