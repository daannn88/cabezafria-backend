import express from 'express';
import { createProduct, deleteProductById, getAllProducts, getProductById, updateProductById } from '../controllers/products.controller.mjs';

const router = express.Router();

router.post('/api/products', createProduct );
router.get('/api/products', getAllProducts );

router.get('/api/products/:id', getProductById );            //:id (Parametrizar la ruta: Creamos un especie de variable)
router.delete('/api/products/:id', deleteProductById );
router.patch('/api/products/:id', updateProductById );

export default router;