import * as dotenv from 'dotenv'
dotenv.config()
import * as path from 'path';
import { fileURLToPath } from 'url';
import express from 'express'
import { router } from './routes/openAIRoutes.js'

const port = process.env.PORT || 5555

const app = express()

// body parser
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// set static folder
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, 'public')))

app.listen(port, () => console.log(`server running on port ${port}`))

app.use('/openai', router)


