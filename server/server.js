const { ApolloServer } = require('apollo-server-express');
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

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

    await mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://dbUser:pass1234@cluster0.qajod.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());

    if (process.env.NODE_ENV === 'production') {
        app.use(express.static(path.join(__dirname, '../client/build')));
    }

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../client/build/index.html'));
    });
    app.listen({ port: PORT }, () =>
        console.log(`server ready at http://localhost:${PORT}${server.graphqlPath}`)
    );
}

// Initialize the Apollo server
startServer();

