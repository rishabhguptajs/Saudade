import mongoose, { mongo } from "mongoose";

const userSubscriptionSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
    plan: {
        type: mongoose.Schema.Types.ObjectId,   
        ref: "SubscriptionPlan",
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
    status: {
        type: String,
        enum: ["active", "inactive", "cancelled"],
        required: true,
    },
    paymentMethod: {
        type: String,
        required: true,
    },
    renewalStatus: {
        type: String,
        enum: ["auto", "manual"],
        default: "auto",
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
})

const userSubscription = mongoose.model("Subscription", userSubscriptionSchema);

export default userSubscription;