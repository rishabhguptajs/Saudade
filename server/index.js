import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
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

app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {   
    res.send('Running Saudade!')
})

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
})