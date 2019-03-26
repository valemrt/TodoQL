# TodoQL

Node.js Express app exposing REST API for a task management system.

## Run locally

You can download the project and playing with it youself, you just need to have Node.js installed.

Just run 
` npm install ` and `npm start` to have your server up and running.

## API usage

Your GraphQL endpoint will be `http://localhost:3000/graphql`.

When defining a GraphQL schema you usually have `Query` and `Mutation`, representing the interaction you can have with your server.

Here's a list of the request you can try out based on this current implementation:

- POST 

    `{ "query": "{ list { description } }" }`
    
    to get a list of all stored Todos (Query).
  
- POST 

    `{ "query": "{ todo(id: 1) { description } }" }`
    
    to get a specific Todos matching the passed input (Query).   
- POST

```
{
   "query": "mutation{addTodo(id:7,completed:\"true\",description:\"zazaz\"){id completed description}}"
} 
   ```
   
   Use this request to add a new Todo to the list (Mutation).
   
## Notes
This is only a basic example of how to create APIs using GraphQL, for detailed documentation refer to the [official site.](https://graphql.org/learn/)