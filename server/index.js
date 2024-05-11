import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import passport from 'passport'
import passportSetup from './config/passport.js'
import cookieSession from 'cookie-session'
import connectDB from './config/db.js'
import authRoutes from './routes/authRoutes.js'

const app = express()

dotenv.config()
connectDB()

app.use(express.json())
app.use(cors())
app.use(cookieSession({
    name: 'session',
    keys: [ process.env.COOKIE_KEY ],
    maxAge: 30 * 24 * 60 * 60 * 1000,
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
}))

app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {   
    res.send('Running Saudade!')
})

const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})