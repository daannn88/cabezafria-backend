import express from 'express';
import { createComments } from '../controllers/comments.controller.mjs';
const router = express.Router();
//define las rutas para la entidad comments
router.post('/api/comments', createComments)
export default router;