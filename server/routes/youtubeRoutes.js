import express from 'express'
import { uploadVideo } from '../controllers/youtubeController.js';
import { authenticateOwner } from '../middlewares/ownerMiddleware.js';

const router = express.Router()

router.post('/upload', authenticateOwner, uploadVideo);

export default router