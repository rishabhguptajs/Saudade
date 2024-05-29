import mongoose from 'mongoose';

const pendingVideoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  privacy: {
    type: String,
    enum: ["public", "private", "unlisted"],
    default: "public",
    required: true,
  },
  tags: [String],
  videoCloudURL: {
    type: String,
    required: true,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Editor',
    required: true,
  },
  isApproved: {
    type: Boolean,
    default: false,
  },
});

const PendingVideo = mongoose.model('PendingVideo', pendingVideoSchema);
export default PendingVideo;
