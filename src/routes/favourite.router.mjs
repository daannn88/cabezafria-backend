import express from "express";
import { createfavourite } from "../controllers/favourite.controller.mjs";
import { authUser } from "../middlewares/auth-user.middleware.mjs";

const router = express.Router();

router.post( '/api/favourite', authUser, createfavourite );








export default router;