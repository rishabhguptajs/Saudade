import mongoose, { mongo } from "mongoose"

const subscriptionPlanSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    duration: {
        type: Number,
        required: true,
    },
    features: {
        type: [String],
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
})

const SubscriptionPlan = mongoose.model("SubscriptionPlan", subscriptionPlanSchema)

export default SubscriptionPlan