import Video from "../models/videoModel.js";
import PendingVideo from "../models/pendingVideoModel.js";

// export const

export const videoApproval = async(req, res) => {
    try {
        
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error sending approval request',
            error: error.message,
          });
    }
}

export const fetchVideo = async(req, res) => {
    try {
        const { videoId } = req.params;
        const video = await PendingVideo.findById({ videoId });

        res.status(200).json({
            success: true,
            message: "Video fetched successfully!",
            video
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Problem while fetching video!",
            error: error.message
        })
    }
}