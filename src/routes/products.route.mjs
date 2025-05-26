import express from 'express';
import { createProduct, getAllProducts } from '../controllers/products.controller.mjs';

const router = express.Router();

router.post('/api/products', createProduct );
router.get('/api/products', getAllProducts )

export default router;