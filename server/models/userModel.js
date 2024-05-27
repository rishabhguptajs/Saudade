import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    channelName: {
        type: String,
        required: false,
    },
    channelURL: {
        type: String,
        required: false,
    },
    description: {
        type: String,
    },
    socialLinks: {
        type: Array,
    },
    uploadedVideoLinks: {
        type: Array,
    },
    creationDate: {
        type: Date,
        default: Date.now,
    },
    isVerified: {
        type: Boolean,
        default: false,
    },
    googleAccessToken: {
        type: String,
    },
    googleAccessToken: {
        type: String,
    },
    subscriptionDetails: {
        type: Array,
    }
})

const User = mongoose.model("User", userSchema);

export default User;