import { google } from 'googleapis';
import { OAuth2Client } from 'google-auth-library';
import User from '../models/userModel.js';
import fs from 'fs';
import Video from '../models/videoModel.js';
import * as iso8601Duration from 'iso8601-duration';  // Make sure to import everything from iso8601-duration

const SCOPES = ['https://www.googleapis.com/auth/youtube.upload'];

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

    return { success: true, message: 'Video uploaded successfully', data: response.data };
  } catch (error) {
    console.error('Error uploading video: ', error);
    return { success: false, message: 'Error uploading video', error: error.message };
  }
};
