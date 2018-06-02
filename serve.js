const app = require('express')();
const graphqlHTTP = require('express-graphql');

const schema = require('./schema')

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true,
}))

app.listen(4000, () => console.log('Listening on 4000...'));