const { ApolloServer } = require('apollo-server-express');
const express = require('express');
const mongoose = require('mongoose');

const resolvers = require('./schemas/resolvers');
const typeDefs = require('./schemas/typeDefs')
const { authMiddleware } = require('./utils/auth');
const PORT = process.env.PORT || 4000;

const startServer = async () => {
    const app = express();

    // create a new Apollo server and pass in our schema data
    const server = new ApolloServer({
        typeDefs,
        resolvers,
        context: authMiddleware
    });
    await server.start();

    server.applyMiddleware({ app });

    await mongoose.connect('mongodb+srv://dbUser:pass1234@cluster0.qajod.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());

    app.listen({ port: PORT }, () =>
        console.log(`server ready at http://localhost:4000${server.graphqlPath}`)
    );
}

// Initialize the Apollo server
startServer();

