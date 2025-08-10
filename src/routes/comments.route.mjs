import express from 'express';
import { addComment, deleteComment } from '../controllers/comments.controller.mjs';
import { authUser } from '../middlewares/auth-user.middleware.mjs';


const router = express.Router();
//define las rutas para la entidad comments
router.post('/api/home', addComment);
router.delete('/api/home/:Id', authUser, deleteComment);

export default router;