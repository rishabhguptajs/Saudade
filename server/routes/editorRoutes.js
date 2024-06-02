import express from 'express'
import multer from 'multer';
import { loginEditor, registerEditor } from '../controllers/editorController.js'
import { fetchPendingVideo, uploadToPending } from '../controllers/youtubeController.js'

const router = express.Router()

const storage = multer.diskStorage({
    destination: './uploads/',
    filename: (req, file, cb) => {
        cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
    }
});

const upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        checkFileType(file, cb);
    }
}).single('video');

const checkFileType = (file, cb) => {
    const filetypes = /mp4|mkv|gif/;
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = filetypes.test(file.mimetype);

    if (mimetype && extname) {
        return cb(null, true);
    } else {
        cb('Error: Videos Only!');
    }
};

router.post('/register', registerEditor);

router.post('/login', loginEditor);

router.post('/upload-pending', uploadToPending);

router.get('/pending-video/:id', upload, fetchPendingVideo);

export default router