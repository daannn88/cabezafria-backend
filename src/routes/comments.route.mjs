import express from 'express';
import { addComment, deleteComment, getCommentsByProduct } from '../controllers/comments.controller.mjs';
import { authUser } from '../middlewares/auth-user.middleware.mjs';


const router = express.Router();
//define las rutas para la entidad comments
router.post('/api/comments', addComment);
router.get('/api/comments/:Id', authUser, getCommentsByProduct);
router.delete('/api/comments/:Id', authUser, deleteComment);

export default router;