import express from 'express'
import { createUsers } from '../controllers/users.controllers.mjs'
import { loginUser, reNewToken } from '../controllers/auth.controller.mjs';
import { authUser } from '../middlewares/auth-user.middleware.mjs';

const router = express.Router()

router.post('/api/auth/register', createUsers);
router.post('/api/auth/login', loginUser );
router.get('/api/auth/re-new-token', authUser, reNewToken )

export default router