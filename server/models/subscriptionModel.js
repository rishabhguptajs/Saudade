import mongoose from "mongoose";

const subscriptionSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
    plan: {
        type: String,
        required: true,
    },
    startDate: {
        type: Date,
        default: Date.now,
        required: true,
    },
    endDate: {
        type: Date,
        required: true,
    },
})

const Subscription = mongoose.model("Subscription", subscriptionSchema);

export default Subscription;