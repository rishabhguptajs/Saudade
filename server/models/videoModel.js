import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    duration: {
        type: Number,
        required: true,
    },
    tags: [String],
    privacy: {
        type: String,
        enum: ["public", "private", "unlisted"],
        default: "public",
        required: true,
    },
    fileURL: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    isApproved: {
        type: Boolean,
        default: false
    }
})

const Video = mongoose.model("Video", videoSchema);

export default Video;