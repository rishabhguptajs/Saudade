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
  videoCloudURL: {
    type: String,
    required: true,
  },
  uploadedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Editor',
    required: true,
  },
  approved: {
    type: Boolean,
    default: false,
  },
});

const PendingVideo = mongoose.model('PendingVideo', pendingVideoSchema);
export default PendingVideo;
