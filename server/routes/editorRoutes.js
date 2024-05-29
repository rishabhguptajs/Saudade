import express from 'express'
import { registerEditor } from '../controllers/editorController.js'

const router = express.Router()

router.post('/register', registerEditor)

export default router