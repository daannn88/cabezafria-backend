import express from 'express';
import { createReview, deleteReviewById, getAllReviews, getReviewById, updateReviewById } from '../controllers/reviews.controller.mjs';
import { authUser } from '../middlewares/auth-user.middleware.mjs';

const router = express.Router();

router.post('/api/product/:productId/reviews', authUser, createReview)
router.get('/api/reviews', getAllReviews)
router.get('/api/reviews/:id', getReviewById)
router.patch('/api/reviews/:id', authUser, updateReviewById)
router.delete('/api/reviews/:id', authUser, deleteReviewById)

export default router;