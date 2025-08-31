import express from 'express'; // importar la dependencia 
import { addFavourite, createUsers, deleteUser, getAllUsers, getFavorites, getUserById, removeFavourite, updateUser } from '../controllers/users.controllers.mjs'; 
const router = express.Router();   // invocando el router de express

router.post( '/api/users', createUsers );
router.get( '/api/users', getAllUsers );
router.get( '/api/users/:id', getUserById );  
router.delete( '/api/users/:id', deleteUser );
router.patch( '/api/users/:id', updateUser );
router.post("/api/users/:id/favorites/:productId", addFavourite );
router.delete("/api/users/:id/favorites/:productId", removeFavourite );
router.get("/api/users/:id/favorites", getFavorites);

//exponer el router de este archivo para ser usado por otros en la
export default router;

