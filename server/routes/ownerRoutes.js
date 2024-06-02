import express from 'express'
import { addEditor } from '../controllers/ownerController.js';
import { authenticateOwner } from '../middlewares/ownerMiddleware.js';

const router = express.Router();

router.post('/new-editor', authenticateOwner, addEditor);

export default router