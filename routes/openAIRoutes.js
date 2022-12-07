import express from 'express'
import { generateimage } from '../controllers/openaiController.js'
export const router = express.Router()

router.post('/generateimage', generateimage)
