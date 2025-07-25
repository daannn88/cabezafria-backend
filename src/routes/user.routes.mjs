import express from 'express'; // importar la dependencia 
import { createUsers, getAllUsers, getUsersById, removeUsersById, updateUsersById } from '../controllers/users.controllers.mjs'; 
import { authUser } from '../middlewares/auth-user.middleware.mjs';
const router = express.Router();   // invocando el router de express

router.post( '/api/users', createUsers );
router.get( '/api/users', getAllUsers );
router.get( '/api/users/:id', getUsersById );  
router.delete( '/api/users/:id', removeUsersById );
router.patch( '/api/users/:id', updateUsersById );

//exponer el router de este archivo para ser usado por otros en la
export default router;

