import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import passport from 'passport'
import connectSqlite3 from 'connect-sqlite3'
import session from 'express-session'
import fs from 'fs'
import path from 'path'

import connectDB from './config/db.js'
import authRoutes from './routes/authRoutes.js'
import { uploadVideo } from './controllers/youtubeController.js'
import youtubeRoutes from './routes/youtubeRoutes.js'
import './config/passport.js'

const app = express()
const SQLiteStore = connectSqlite3(session)

const isDevelopment = process.env.NODE_ENV === 'development';

const dbDir = path.resolve('./var/db');
const dbPath = path.join(dbDir, 'sessions.db');

if (isDevelopment) {
  if (!fs.existsSync(dbDir)) {
    fs.mkdirSync(dbDir, { recursive: true });
  }
}

dotenv.config()
connectDB()

app.use(express.json())
app.use(cors())
app.use(session({
    secret: process.env.COOKIE_KEY,
    resave: false,
    saveUninitialized: false,
    store: new SQLiteStore({ db: 'session.db', dir: dbDir })
}))
app.use(passport.initialize())
app.use(passport.session())

const corsOptions = {
    origin: process.env.CLIENT_URL,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    allowedHeaders: 'Content-Type,Authorization'
};
app.use(cors(corsOptions));
app.use('/api/auth', authRoutes);
app.use('/api/youtube', youtubeRoutes)

app.get('/', (req, res) => {
    res.send('Running Saudade!')
    uploadVideo('6654b2243369cc9a30940dbd', './testVideo.mp4', 'testing-video', 'testing the youtube api', 'public');   
})


const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
    console.log(process.env.GOOGLE_CLIENT_ID)
})