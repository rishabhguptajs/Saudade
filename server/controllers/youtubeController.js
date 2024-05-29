import { google } from 'googleapis';
import User from '../models/userModel.js';
import fs from 'fs';
import Video from '../models/videoModel.js';
import PendingVideo from '../models/pendingVideoModel.js'
import * as iso8601Duration from 'iso8601-duration';
import { v2 as cloudinary } from 'cloudinary'
import nodemailer from 'nodemailer';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  api_key: process.env.CLOUDINARY_API_KEY
})

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.COMPANY_MAIL,
    pass: process.env.COMPANY_MAIL_PASSWORD
  }
})

const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  process.env.REDIRECT_URI
);

const parseDuration = (duration) => {
  const parsed = iso8601Duration.parse(duration);
  console.log('Parsed duration:', parsed);
  return parsed.seconds + parsed.minutes * 60 + parsed.hours * 3600 + parsed.days * 86400;
};

export const uploadToPending = async(req, res) => {
  try {
    const { title, description, tags, privacy, ownerId } = req.body;
    const videoPath = req.file.path;

    const owner = await User.findById({ ownerId });
    if(!owner){
      res.status(404).json({
        success: false,
        message: "Owner not found!"
      })
    }

    const result = await cloudinary.v2.uploader.upload(videoPath, { resource_type: "video" });

    const newPendingVideo = new PendingVideo({
      title,
      description,
      tags,
      privacy,
      videoCloudURL: result.secure_url,
      owner: ownerId
    })

    const savedVideo = await newPendingVideo.save();

    const approvalLink = `https://saudadecompany.vercel.app/approve-video/${savedVideo._id}`;

    const mailOptions = {
      from: process.env.COMPANY_MAIL,
      to: owner.email,
      subject: 'Video Approval Request',
      text: `Please approve or reject the video: ${approvalLink}`,
      html: `<p>Please approve or reject the video: <a href="${approvalLink}">${approvalLink}</a></p>`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if(error){
        console.log("Error sending email: ", error);
        return res.status(500).json({
          success: false,
          message: 'Error sending approval request',
          error: error.message,
        });
      }

      console.log('Email sent:', info.response);
      res.status(200).json({
        success: true,
        message: 'Video uploaded for approval successfully',
        video: savedVideo,
      });
    });
  } catch (error) {
    res.status(400).json({
      message: "Error while uploading video for confirmation!",
      success: false,
      error: error.message
    })
  }
}

export const uploadVideo = async (userId, videoPath, title, description, privacyStatus) => {
  try {
    console.log('User ID:', userId);
    const user = await User.findById(userId);

    if (!user || !user.googleAccessToken) {
      console.log('No access/refresh token found!');
      return { success: false, message: 'No access/refresh token found!' };
    }

    const { googleAccessToken, googleRefreshToken } = user;
    oauth2Client.setCredentials({
      access_token: googleAccessToken,
      refresh_token: googleRefreshToken,
    });

    const youtube = google.youtube({
      version: 'v3',
      auth: oauth2Client,
    });

    const mediaFileSize = fs.statSync(videoPath).size;

    const response = await youtube.videos.insert(
      {
        part: 'snippet,status',
        requestBody: {
          snippet: {
            title,
            description,
          },
          status: {
            privacyStatus,
          },
        },
        media: {
          body: fs.createReadStream(videoPath),
        },
      },
      {
        onUploadProgress: evt => {
          const progress = (evt.bytesRead / mediaFileSize) * 100;
          process.stdout.write(`Uploading: ${Math.round(progress)}% complete\r`);
        },
      }
    );

    console.log('Upload response:', response.data);

    const videoId = response.data.id;
    const videoDetails = await youtube.videos.list({
      part: 'contentDetails',
      id: videoId,
    });

    if (videoDetails.data.items.length === 0) {
      throw new Error('Failed to fetch video details');
    }

    const isoDuration = videoDetails.data.items[0];
    console.log('ISO duration:', isoDuration);

    const duration = parseDuration(isoDuration);
    console.log('Parsed duration (in seconds):', duration);

    const newVideo = new Video({
      title,
      description,
      privacy: privacyStatus,
      fileURL: response.data.snippet.thumbnails.default.url,
      duration,
    });

    await newVideo.save();

    res.status(200).json({ 
      success: true, 
      message: 'Video uploaded successfully', 
      data: response.data 
    });
  } catch (error) {
    console.error('Error uploading video: ', error);
    res.status(400).json({ 
      success: false, 
      message: 'Error uploading video', 
      error: error.message 
    });
  }
};
