import express from 'express';
import { createProduct, deleteProductById, getAllProducts, getProductById, updateProductById } from '../controllers/products.controller.mjs';
import { authUser } from '../middlewares/auth-user.middleware.mjs';

const router = express.Router();

router.post('/api/products', authUser, createProduct );
router.get('/api/products', getAllProducts );
router.get('/api/products/:id', getProductById );            //:id (Parametrizar la ruta: Creamos un especie de variable)
router.delete('/api/products/:id', authUser, deleteProductById );
router.patch('/api/products/:id', authUser, updateProductById );

export default router;