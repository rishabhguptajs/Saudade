import express from 'express'
import { addEditor } from '../controllers/ownerController.js';

const router = express.Router();

router.post('/new/editor', addEditor);

export default router