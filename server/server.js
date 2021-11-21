const { ApolloServer, gql } = require('apollo-server-express');
const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/User')

const resolvers = {
    Query: {
        hello: () => 'hello'
    },

    Mutation: {
        createUser: async (_, { name }) => {
            const user = new User({ name })
            await user.save();
            console.log(name);
            return user;
        }
    }
}

const typeDefs = gql`
    type Query {
        hello: String!
    }

    type User {
        id: ID!
        name: String!
    }

    type Mutation {
        createUser(name: String!): User!
    }
`;

const startServer = async () => {
    const app = express();

    // create a new Apollo server and pass in our schema data
    const server = new ApolloServer({
        typeDefs,
        resolvers
    });
    await server.start();

    server.applyMiddleware({ app });

    await mongoose.connect('mongodb+srv://dbUser:pass1234@cluster0.qajod.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    app.listen({ port: 4000 }, () =>
        console.log(`server ready at http://localhost:4000${server.graphqlPath}`)
    );
}

// Initialize the Apollo server
startServer();

