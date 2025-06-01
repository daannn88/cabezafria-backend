import express from 'express'
import { createUsers } from '../controllers/users.controllers.mjs'

const router = express.Router()

router.post('/api/login', createUsers);

export default router