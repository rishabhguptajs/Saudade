import express from 'express'
import dotenv from 'dotenv'

const app = express()

dotenv.config()

app.use(express.json())

app.get('/', (req, res) => {   
    res.send('Running Saudade!')
})

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
})