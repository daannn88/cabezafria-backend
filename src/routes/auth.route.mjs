import express from 'express'
import { createUsers } from '../controllers/users.controllers.mjs'
import { loginUser } from '../controllers/auth.controller.mjs';

const router = express.Router()

router.post('/api/register', createUsers);
router.post('/api/login', loginUser );


export default router