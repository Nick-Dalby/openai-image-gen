import * as dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import { router } from './routes/openAIRoutes.js'

const port = process.env.PORT || 5555

const app = express()

// body parser
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.listen(port, () => console.log(`server running on port ${port}`))

app.use('/openai', router)


