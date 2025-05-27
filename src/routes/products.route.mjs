import express from 'express';
import { createProduct, getAllProducts, getProductById } from '../controllers/products.controller.mjs';

const router = express.Router();

router.post('/api/products', createProduct );
router.get('/api/products', getAllProducts );
router.get('/api/products/:id', getProductById );            //:id (Parametrizar la ruta: Creamos un especie de variable)

export default router;