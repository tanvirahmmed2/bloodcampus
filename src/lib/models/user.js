const mongoose = require('mongoose')



const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim:true
    },
    bloodgroup: {
        type: String,
        required: true,

    },
    district: {
        type: String,
        required: true
    },
    upazilla: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true,
        trim:true
    },
    dateOfBirth: {
        type: Date,
        required: true,
    },
    lastDoneted: {
        type: Date,
        default: null

    },
    isAvailable: {
        type: Boolean,
        default: false,
    },
    isBanned: {
        type: Boolean,
        default: false,
    },
    role: {
        type: String,
        trim: true,
        enum: ['admin, member'],
        default:'member'
    },
    totalDonated: {
        type: Number,
        default: 0
    },
    requests: [
        {
            userId:  { type: String, trim: true, required: true },
            name: { type: String, trim: true, required: true },
            number: { type: String, trim: true, required: true },
            upazilla: { type: String, trim: true, required: true },
            message: { type: String, trim: true, required: true },
        }
    ],
    resetToken: {
        type: String,
        trim: true
    },
    tokenExpireAt: {
        type: Date,
        trim: true,
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }

})


const User =mongoose.models.User || mongoose.model('User', userSchema)

module.exports = User
