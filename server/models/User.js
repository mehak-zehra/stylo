// const User = mongoose.model('User', {name: String});
const bcrypt = require('bcrypt')
const mongoose = require('mongoose');
const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
        firstName: {
            type: String,
            // required: true,
            trim: true
        },
        lastName: {
            type: String,
            // required: true,
            trim: true

        },
        email: {
            type: String,
            // required: true,
            unique: true,
            match: [/.+@.+\..+/, 'Must match an email address!']
        },
        password: {
            type: String,
            // required: true,
            minlength: 5
        },
        address: {
            type: String,
            // required: true,
            trim: true
        },
        city: {
            type: String,
            // required: true
        },
        state: {
            type: String,
            // required: true
        },
        zipCode: {
            type: String,
            // required: true
        }
    },
    {
        toJSON: {
            virtuals: true
        }
    }
);

// set up pre-save middleware to create password
userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();
});

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
};


const User = mongoose.model('User', userSchema);

module.exports = User;
