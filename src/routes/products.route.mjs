import express from 'express';
import { createProduct, deleteProductById, getAllProducts, getAllProductsByBrand, getProductById, getProductsByFilter, updateProductById } from '../controllers/products.controller.mjs';
import { authUser } from '../middlewares/auth-user.middleware.mjs';

const router = express.Router();

router.post('/api/products', createProduct );
router.get('/api/products', getAllProducts );
router.get('/api/products/:id', getProductById );            //:id (Parametrizar la ruta: Creamos un especie de variable)
router.delete('/api/products/:id', deleteProductById );
router.patch('/api/products/:id', authUser, updateProductById );
router.post('/api/filter/products', getProductsByFilter );
router.post('/api/products/brand', getAllProductsByBrand)

export default router