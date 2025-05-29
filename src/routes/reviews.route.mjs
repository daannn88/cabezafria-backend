import express from 'express';
import { createReview } from '../controllers/reviews.controller.mjs';

const router = express.Router();

router.post('/api/reviews', createReview)

export default router;