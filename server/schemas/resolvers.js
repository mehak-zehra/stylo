const { AuthenticationError } = require('apollo-server-express');
const User = require('../models/User')
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

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
        },
    },

    Mutation: {
        createUser: async (parent, { firstName, lastName, email, password, address, city, state, zipCode }) => {
            const user = new User({ firstName, lastName, email, password, address, city, state, zipCode })
            await user.save();
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

            return user;
        },
        getCheckoutSessionId: async (parent, { productName, productDescription, priceAmount }) => {
            const line_items = [];

            // generate product id
            const product = await stripe.products.create({
                name: productName,
                description: productDescription
            });

            // generate price id using the product id
            const price = await stripe.prices.create({
                product: product.id,
                unit_amount: parseInt(priceAmount),
                currency: 'usd',
            });

            // add price id to the line items array
            line_items.push({
                price: price.id,
                quantity: 1
            });

            const session = await stripe.checkout.sessions.create({
                payment_method_types: ['card'],
                line_items,
                mode: 'payment',
                success_url: 'https://mehak-stylo.herokuapp.com/confirmation?session_id={CHECKOUT_SESSION_ID}',
                cancel_url: 'https://mehak-stylo.herokuapp.com/error'
            });
            return session.id
        }
    }
}

module.exports = resolvers;