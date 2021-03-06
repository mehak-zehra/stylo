const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Query {
        getUser(email: String): User
        getAllUsers: [User]
    }

    type User {
        id: ID!
        firstName: String
        lastName: String
        email: String
        password: String
        address: String
        city: String
        state: String
        zipCode: String
    }

    type Mutation {
        createUser(firstName: String!, lastName: String!, email: String! password: String!, address: String, city: String, state: String, zipCode: String): User!
        login(email: String!, password: String!): User
        getCheckoutSessionId(productName: String!, productDescription: String!, priceAmount: String): String!
    }
`;

module.exports = typeDefs;
