const { AuthenticationError } = require('apollo-server-express');
const User = require('../models/User')

const resolvers = {
    Query: {
        getUser: async (parent, { email }) => {
            console.log(email)
            const user = await User.findOne({ email })
            if (user) { console.log(user) }
            else { console.log("no user found") }

            return user
        },
        getAllUsers: async () => {
            const users = await User.find()
            if (users) { console.log(users) }
            else { console.log("no users found") }

            return users
        }
    },

    Mutation: {
        createUser: async (parent, { firstName, lastName, email, password, address, state, zipCode }) => {
            const user = new User({ firstName, lastName, email, password, address, state, zipCode })
            await user.save();
            console.log(user.firstName);
            return user;
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('Incorrect credentials');
            }
            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }

            // const token = signToken(user);

            return user;
        }
    }
}

module.exports = resolvers;