const { Schema, model } = require('mongoose');
const moment = require('moment');

const UsersSchema = new Schema({
    usersname: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/]
    },
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Thought'
        }
    ],
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Users'
        }
    ]
},
    {
        toJSON: {
            virtuals: true
        },
        id: false
    }
);

UsersSchema.virtual('friendCount').get(function () {
    return this.friends.length;
});

// create the Users model using the UsersSchema
const Users = model('Users', UsersSchema);

// export the Users model
module.exports = Users;