const { SchemaComposer } = require( 'graphql-compose');


const schemaComposer = new SchemaComposer();

const { UserQuery, UserMutation } =require ('./user');
const { BookQuery, BookMutation } =require ('./book');

schemaComposer.Query.addFields({
    ...UserQuery,
    ...BookQuery,
});

schemaComposer.Mutation.addFields({
    ...UserMutation,
    ...BookMutation,
});

module.exports = schemaComposer.buildSchema();