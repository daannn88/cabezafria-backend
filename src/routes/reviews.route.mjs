import express from 'express';
import { createReview, deleteReviewById, getAllReviews, getReviewById, updateReviewById } from '../controllers/reviews.controller.mjs';

const router = express.Router();

router.post('/api/reviews', createReview)
router.get('/api/reviews', getAllReviews)
router.get('/api/reviews/:id', getReviewById)
router.patch('/api/reviews/:id', updateReviewById)
router.delete('/api/reviews/:id', deleteReviewById)


export default router;