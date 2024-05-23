import express from 'express'
import { uploadVideo } from '../controllers/youtubeController.js';

const router = express.Router()

router.post('/upload', uploadVideo);

export default router